import React, { Component } from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const FieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  width: 600px;
  background-color: rgb(50, 54, 57);
`;

class Field extends Component {
  render() {
    return (
      <FieldWrapper>
        {this.props.cells.map((cell, index) => {
          return <Cell cell={cell} key={index}/>
        })}
      </FieldWrapper>
    )
  }
}

export default Field;