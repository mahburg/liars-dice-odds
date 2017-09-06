import React, { Component } from 'react';

class Stats extends Component{
    
    render(){
        const currentStats = this.props.stats.map((c,i,a)=>{
            return(
                <div className="statsItem" key={i}>
                    <h5>Odds of rolling {i} of a kind: {Math.round(c * 10000)/100}%</h5>
                    <hr/>
                    <h5>Odds of rolling at least {i} of a kind: {Math.round(this.props.least[i] * 10000)/100}%</h5>
                </div>
            )
        })
        return(
            <div className="stats-container">
                {currentStats}
            </div>
        )
    }
}

export default Stats;