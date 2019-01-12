import React, { Component } from 'react';
import styled from 'styled-components';
import Field from './Field';
const lodash = require('lodash');

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  background-color: rgb(32, 33, 36);
  //50 54 47
`;
const Next = styled.div`
  font-size: 28px;
  background-color: yellow;
  cursor: pointer;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      cells: []
    }
    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
    this.updateField = this.updateField.bind(this);
    this.getCells = this.getCells.bind(this);
    this.updateLiveNeighbors = this.updateLiveNeighbors.bind(this);
  }
  getCells() {
    let cells = new Array(40);
    for(let i = 0; i < cells.length; i++){
      cells[i] = new Array(40);
    }
    for(let i = 0; i < cells.length; i++){
      for(let j = 0; j < cells[i].length; j++){
        cells[i][j] = {
          i: i,
          j: j,
          isLive: Math.random() < 0.2 ? true : false,
          liveNeighbors: 0
        };
      }
    }
    this.updateLiveNeighbors(cells);
  }
  componentDidMount() {
    console.log("did");
    this.getCells();//deepClone before setState
  }
  updateLiveNeighbors(cells){//global
    console.log(cells);
    for(let i = 0; i < cells.length; i++){
      for(let j = 0; j < cells[i].length; j++){
        cells[i][j].liveNeighbors = 0;
        let dirs = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
        for(let d = 0; d < dirs.length; d++) {
          let dir = dirs[d];
          let nx = j + dir[0];
          let ny = i + dir[1];
          if(nx > -1 && ny > -1 && nx < cells[i].length && ny < cells.length && cells[ny][nx].isLive === true){
            cells[i][j].liveNeighbors++;
          }
        }
      }
    }
    this.setState({cells: lodash.cloneDeep(cells)});
  }
  updateField() {
    let cells = lodash.cloneDeep(this.state.cells);//future / past
    for(let i = 0; i < cells.length; i++){
      for(let j = 0; j < cells[i].length; j++){
        if(this.state.cells[i][j].isLive === true){
          if(this.state.cells[i][j].liveNeighbors < 2){
            cells[i][j].isLive = false;
          }
          if(this.state.cells[i][j].liveNeighbors > 3){
            cells[i][j].isLive = false;
          }
        } else {
          if(this.state.cells[i][j].liveNeighbors === 3){
            cells[i][j].isLive = true;
          }
        }
      }
    }
    this.updateLiveNeighbors(cells);
  }
  handleOnButtonClick() {
    this.timer = setInterval(this.updateField, 100);
    //this.updateField();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("re");
    let cells = [];
    for(let i = 0; i < this.state.cells.length; i++){
      for(let j = 0; j < this.state.cells[i].length; j++){
        cells.push(this.state.cells[i][j]);
      }
    }
    return (
      <AppWrapper>
        <Field cells={cells}/>
        <Next onClick={this.handleOnButtonClick}>Next</Next>
      </AppWrapper>
    );
  }
}

export default App;