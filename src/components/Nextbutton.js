import React, { Component } from 'react';

export default class NextButton extends Component {
    render(){
    return(
        <div>
            <button>{this.props.prevButton}</button>
            <button>2</button>
            <button>3</button>
        </div>
    )
    }
}