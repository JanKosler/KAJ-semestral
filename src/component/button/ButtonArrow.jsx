import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * ButtonArrow component that extends the base React Component class.
 */
class ButtonArrow extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick} style={this.props.style}>
        {this.props.children}
        <IconWrapper>
          <ArrowIcon viewBox="0 0 24 24">
            <path d="M5 12h14m-7-7l7 7-7 7"></path>
          </ArrowIcon>
        </IconWrapper>
      </StyledButton>
    );
  }
}

export default ButtonArrow;

const StyledButton = styled.button.attrs({
  className:
    'inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800',
})``;

const IconWrapper = styled.span.attrs({
  className:
    'inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-white bg-blue-500 rounded-full',
})``;

const ArrowIcon = styled.svg.attrs({
  className: 'w-4 h-4',
})`
  fill: 'none';
  stroke-linecap: 'round';
  stroke-linejoin: 'round';
  stroke-width: '2';
  stroke: 'currentColor';
`;
