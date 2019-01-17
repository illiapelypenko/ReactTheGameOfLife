import React, { Component } from 'react';
import styled from 'styled-components';
const TitleWrapper = styled.div`
  width: 600px;
  font-size: 4rem;
  text-align: center;
  background-color: #FFE67C;
  cursor: pointer;
`;

class Title extends Component {
  render() {
    return (
      <TitleWrapper>Game Of Life</TitleWrapper>
    )
  }
}

export default Title;