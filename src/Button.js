import React, { Component } from 'react';
import styled from 'styled-components';
const ButtonWrapper = styled.div`
  width: 600px;
  text-align: center;
  font-size: 4rem;
  background-color: #FFE67C;
  cursor: pointer;
`;

class Button extends Component {
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>{this.props.isWorking ? "Reset" : "Start"}</ButtonWrapper>
    )
  }
}

export default Button;