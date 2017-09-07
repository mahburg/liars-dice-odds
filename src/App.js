import React, { Component } from 'react';
import './App.css';

import Inputs from './Components/Inputs';
import Stats from './Components/Stats';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dice: 0,
      data: {
        labels: [],
        datasets: [{
            type:'line',
            label: 'Odds of at least',
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
            label: 'Independent Odds',
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
    this.remOne = this.remOne.bind(this);
    this.addN = this.addN.bind(this);
  }
  remOne(){
    let tempDice = this.state.dice - 1;
    this.setState({
      dice: tempDice,
      data: this.comboData(tempDice)
    })
  }
  addN(n){
    let tempDice = this.state.dice + n;
    this.setState({
      dice: tempDice,
      data: this.comboData(tempDice)
    })
  }

  comboData(n){
    let tempData = Object.assign({}, this.state.data);
    tempData.datasets[0].data = atLeast(n);
    tempData.datasets[1].data = oddsEach(n);
    tempData.labels = Array.from(Array(n).keys());
    return tempData;
  }
 
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="dice-remaining" >Dice Remaining: {this.state.dice}</h2>
          <h2>Liar's Dice Odds!</h2>
        </div>
        <Inputs remOne={this.remOne} addN={this.addN}/>
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
