import React, { Component } from 'react';
import './App.css';

import Inputs from './Components/Inputs';
import Stats from './Components/Stats';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dice: 0
    }
    this.remOne = this.remOne.bind(this);
    this.addN = this.addN.bind(this);
  }
  remOne(){
    let tempDice = this.state.dice - 1;
    this.setState({
      dice: tempDice
    })
  }
  addN(n){
    let tempDice = this.state.dice + n;
    this.setState({
      dice: tempDice
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Liars Dice Stats! {this.state.dice}</h2>
        </div>
        <Inputs remOne={this.remOne} addN={this.addN}/>
        <Stats/>
      </div>
    );
  }
}

export default App;
