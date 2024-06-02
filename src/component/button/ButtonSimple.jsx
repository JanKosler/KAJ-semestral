import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * A simple button component
 */
class ButtonSimple extends Component {
  render() {
    const { children, style, className, onClick } = this.props;

    return (
      <StyledButton style={style} onClick={onClick} className={className}>
        <span>{children}</span>
      </StyledButton>
    );
  }
}

export default ButtonSimple;

const StyledButton = styled.button.attrs({
  className:
    'inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800',
})``;
