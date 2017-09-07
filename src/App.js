import React, { Component } from 'react';
import './App.css';

import Inputs from './Components/Inputs';
import Stats from './Components/Stats';

const initialState = {
  dice: 0,
  data: {
    labels: [0],
    datasets: [{
        type:'line',
        label: '',
        data: [],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
    },{
        type: 'bar',
        label: '',
        data: [],
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }]
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    this.remOne = this.remOne.bind(this);
    this.addN = this.addN.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  remOne(){
    if (this.state.dice){
      let tempDice = this.state.dice - 1;
      this.setState({
        dice: tempDice,
        data: this.comboData(tempDice)
      })
    }
  }
  addN(n){
    let tempDice = this.state.dice + n;
    this.setState({
      dice: tempDice,
      data: this.comboData(tempDice)
    })
  }
  resetGame(){
    this.setState(initialState);
  }
  comboData(n){
    let tempData = Object.assign({}, this.state.data);
    tempData.datasets[0].data = atLeast(n);
    tempData.datasets[0].label = `Odds of at least x matches in ${n}`;

    tempData.datasets[1].data = oddsEach(n);
    tempData.datasets[1].label = `Odds of x matches in ${n}`;
    tempData.labels = n > 0 ?Array.from(Array(n+1).keys()):[];
    return tempData;
  }
 
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="dice-remaining" >Dice Remaining: {this.state.dice}</h1>
          <h1>Liar's Dice Odds!</h1>
        </div>
        <Inputs remOne={this.remOne} addN={this.addN} resetGame={this.resetGame}/>
        <Stats data={this.state.data} />
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
    out.push(Math.round(odds(i, n)*10000)/100);
  }
  return out;
}

function atLeast(n){
  let arr = [];
  for (let i = 0; i <= n; i++){
    arr.push(odds(i, n));
  }
  let out = arr.map((c,i,a)=>{
    return Math.round(a.slice(i).reduce((s,v)=>{return s+v},0)*10000)/100;
  })
  return out;
}

export default App;
