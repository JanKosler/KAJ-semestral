import React, { Component } from 'react';
import styled from 'styled-components';

/* Context for managing hover state across components, this could be later used to modify the children of the parent maybe */
const HoverContext = React.createContext({
  hoveredTicker: '',
  setHoveredTicker: () => {},
});

/* Component to display a donut chart visualizing data */
class DonutChart extends Component {
  constructor(props) {
    super(props);
    /* State for tracking which ticker is currently hovered */
    this.state = {
      hoveredTicker: '',
    };
  }

  /* Method to update the hovered ticker in the state */
  setHoveredTicker = (ticker) => {
    this.setState({ hoveredTicker: ticker });
  };

  render() {
    const { data } = this.props;
    const radius = 50;
    const strokeWidth = 70;
    const viewBoxSize = 200;
    const viewBoxHalf = viewBoxSize / 2;

    /* Calculate scale based on total percentage to ensure it sums to 100% */
    const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0);
    const scale = 100 / totalPercentage;

    let nextDashOffset = 0;

    return (
      /* Provides the hover context to all child components */
      <HoverContext.Provider
        value={{ hoveredTicker: this.state.hoveredTicker, setHoveredTicker: this.setHoveredTicker }}
      >
        <Container>
          <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            {data.map((item, index) => {
              const adjustedPercentage = item.percentage * scale;
              const dashArray = (adjustedPercentage / 100) * 2 * Math.PI * radius;
              const dashOffset = nextDashOffset;
              nextDashOffset -= dashArray;

              return (
                <ChartSegment
                  key={index}
                  item={item}
                  radius={radius}
                  viewBoxHalf={viewBoxHalf}
                  strokeWidth={strokeWidth}
                  dashArray={dashArray}
                  dashOffset={dashOffset}
                />
              );
            })}
            <circle r={radius + 2} cx={viewBoxHalf} cy={viewBoxHalf} fill="white" />
          </svg>
          <Text>{this.state.hoveredTicker}</Text>
        </Container>
      </HoverContext.Provider>
    );
  }
}

/* Component to render individual segments of the donut chart */
class ChartSegment extends Component {
  static contextType = HoverContext;

  render() {
    const { item, radius, viewBoxHalf, strokeWidth, dashArray, dashOffset } = this.props;
    const { hoveredTicker, setHoveredTicker } = this.context;
    const strokeColor = hoveredTicker !== item.name && hoveredTicker !== '' ? 'lightgray' : item.color;

    return (
      /* Renders a segment of the donut chart */
      <Circle
        r={radius}
        cx={viewBoxHalf}
        cy={viewBoxHalf}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dashArray} ${2 * Math.PI * radius - dashArray}`}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${viewBoxHalf} ${viewBoxHalf})`}
        onMouseEnter={() => setHoveredTicker(item.name)}
        onMouseLeave={() => setHoveredTicker('')}
      />
    );
  }
}

export default DonutChart;

/* Styled container to position the SVG donut chart */
const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

/* Styled component for the SVG circles used in the chart */
const Circle = styled.circle`
  transition: stroke 0.3s ease-in-out;
`;

/* Styled component for displaying the ticker text at the center of the chart */
const Text = styled.p.attrs({
  className: 'text-gray-600',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
