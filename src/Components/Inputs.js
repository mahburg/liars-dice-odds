import React, { Component } from 'react';

class Inputs extends Component{
    
    render(){
        return(
            <div className="inputs-container">
                <button className="button rem-die" onClick={()=>this.props.remOne()}>Remove Die</button>
                <button className="button plus-one" onClick={()=>this.props.addN(1)}>+1</button>
                <button className="button plus-five" onClick={()=>this.props.addN(5)}>+5</button>
                <button className="button new-game">New Game</button>
            </div>
        )
    }
}

export default Inputs;