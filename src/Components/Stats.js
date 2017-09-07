import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class Stats extends Component{
    constructor(){
        super();
        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    type:'line',
                    label: 'Odds of at least',
                    data: [51, 65, 40, 49, 60, 37, 40],
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
                    data: [200, 185, 590, 621, 250, 400, 95],
                    fill: false,
                    backgroundColor: '#71B37C',
                    borderColor: '#71B37C',
                    hoverBackgroundColor: '#71B37C',
                    hoverBorderColor: '#71B37C',
                    yAxisID: 'y-axis-1'
                  }]
            },
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
                      position: 'left',
                      id: 'y-axis-1',
                      gridLines: {
                        display: false
                      },
                      labels: {
                        show: true
                      }
                    },
                    {
                      type: 'linear',
                      display: true,
                      position: 'right',
                      id: 'y-axis-2',
                      gridLines: {
                        display: false
                      },
                      labels: {
                        show: true
                      }
                    }
                  ]
                }
              }
        }
    }
    render(){
        // const currentStats = this.props.stats.map((c,i,a)=>{
        //     return(
        //         <div className="statsItem" key={i}>
        //             <h1>{i}</h1>
        //             <h5>Odds of rolling {i} of a kind: {Math.round(c.stat * 10000)/100}%</h5>
        //             <hr/>
        //             <h5>Odds of rolling at least {i} of a kind: {Math.round(c.sum * 10000)/100}%</h5>
        //         </div>
        //     )
        // })
        // const statData = this.props.stats;
        return(
            <div className="stats-container">
                <Bar data={this.props.data} options={this.state.options}/>
            </div>
        )
    }
}

export default Stats;