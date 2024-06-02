import React, { useState } from 'react';
import styled from 'styled-components';

const DonutChart = ({ data }) => {
  const radius = 50;
  const strokeWidth = 70;
  const viewBoxSize = 200;
  const viewBoxHalf = viewBoxSize / 2;
  const circumference = 2 * Math.PI * radius;

  const [hoveredTicker, setHoveredTicker] = useState('');

  let nextDashOffset = 0;

  const totalPercentage = data.reduce((sum, item) => sum + item.percentage, 0);
  const scale = 100 / totalPercentage;

  return (
    <Container>
      <svg width={viewBoxSize} height={viewBoxSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {data.map((item, index) => {
          const adjustedPercentage = item.percentage * scale;
          const dashArray = (adjustedPercentage / 100) * circumference;
          const dashOffset = nextDashOffset;
          nextDashOffset -= dashArray; // Update offset for the next segment

          const strokeColor = hoveredTicker !== item.name && hoveredTicker !== '' ? 'lightgray' : item.color;

          return (
            <Circle
              key={index}
              r={radius}
              cx={viewBoxHalf}
              cy={viewBoxHalf}
              fill={item.color}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashArray} ${circumference - dashArray}`}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${viewBoxHalf} ${viewBoxHalf})`}
              onMouseEnter={() => setHoveredTicker(item.name)}
              onMouseLeave={() => setHoveredTicker('')}
            />
          );
        })}
        {/* Add a white circle to cover the center of the donut chart + 1 to catch the few bad pixels :)*/}
        <circle r={radius + 2} cx={viewBoxHalf} cy={viewBoxHalf} fill="white" />
      </svg>
      <Text>{hoveredTicker}</Text>
    </Container>
  );
};

export default DonutChart;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Circle = styled.circle.attrs({})`
  transition: stroke 0.3s ease-in-out;
`;

const Text = styled.p.attrs({
  className: 'text-gray-600',
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
