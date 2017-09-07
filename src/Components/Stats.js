import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Stats extends Component{
    constructor(){
        super();
        this.state = {
            options: {
                responsive: true,
                tooltips: {
                  mode: 'label'
                },
                elements: {
                  line: {
                    fill: false
                  }
                },
                scales: {
                  xAxes: [
                    {
                      display: true,
                      gridLines: {
                        display: false
                      },
                      labels: {
                        show: true
                      }
                    }
                  ],
                  yAxes: [
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Odds of x matches"
                        },
                        ticks:{
                            min: 0,
                            // max: 100,
                            callback: function(value) {return value+"%"}
                        }
                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-2',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Odds of at least x matches"
                        },
                        ticks:{
                            min: 0,
                            max: 100,
                            callback: function(value) {return value+"%"}
                        }
                    }
                  ]
                }
              }
        }
    }
    
    render(){
        return(
            <div className="stats-container">
                <div className="chart">
                    <Bar data={this.props.data} options={this.state.options}/>
                </div>
            </div>
        )
    }
}

export default Stats;