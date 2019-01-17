import React, { Component } from 'react';
import styled from 'styled-components';
const CellWrapper = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.isLive ? "#295F2D" : "#1D1B1D"};
`;

class Cell extends Component {
  render() {
    return (
      <CellWrapper isLive={this.props.cell.isLive}></CellWrapper>
    )
  }
}

export default Cell;