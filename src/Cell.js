import React, { Component } from 'react';
import styled from 'styled-components';
const CellWrapper = styled.div`
  height: 18px;
  width: 18px;
  background-color: ${props => props.isLive ? "green" : "grey"};
  //border: 1px solid black;
`;

export class Cell extends Component {
  render() {
    return (
      <CellWrapper isLive={this.props.cell.isLive}>
        {/* {this.props.cell.liveNeighbors} */}
      </CellWrapper>
    )
  }
}

export default Cell;