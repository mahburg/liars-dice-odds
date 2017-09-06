import React, { Component } from 'react';
import './App.css';

import Inputs from './Components/Inputs';
import Stats from './Components/Stats';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dice: 0,
      stats: [],
      summedStats: []
    }
    this.remOne = this.remOne.bind(this);
    this.addN = this.addN.bind(this);
  }
  remOne(){
    let tempDice = this.state.dice - 1;
    this.setState({
      dice: tempDice,
      stats: oddsEach(tempDice),
      summedStats: atLeast(tempDice)
    })
  }
  addN(n){
    let tempDice = this.state.dice + n;
    this.setState({
      dice: tempDice,
      stats: oddsEach(tempDice),
      summedStats: atLeast(tempDice)
    })
  }
 
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Liars Dice Stats! {this.state.dice}</h2>
        </div>
        <Inputs remOne={this.remOne} addN={this.addN}/>
        <Stats stats={this.state.stats} least={this.state.summedStats} />
      </div>
    );
  }
}

function factorial (n){
  let out = 1;
  for (let i = 2; i <= n ;i++) {
    out *= i;
  }
  return n ? out: 1;
}

function odds(k, n){
  let mult = factorial(n)/(factorial(k)*factorial(n-k));
  let exp = Math.pow((1/3), k) * Math.pow((2/3),(n-k));
  return mult * exp;
}

function oddsEach(n){
  let out = [];
  for (let i = 0; i <= n; i++){
    out.push(Math.round(odds(i, n)*10000)/10000);
  }
  return out;
}

function atLeast(n){
  let arr = [];
  for (let i = 0; i <= n; i++){
    arr.push(odds(i, n));
  }
  let out = arr.map((c,i,a)=>{
    return Math.round(a.slice(i).reduce((s,v)=>{return s+v},0)*10000)/10000;
  })
  return out;
}

export default App;
