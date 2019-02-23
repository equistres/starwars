import React, { Component } from 'react';

let buttonPrev = null
let buttonCurrent= null
let buttonNext= null

export default class NextButton extends Component {
    render(){
        if(this.props.data===null){
            return(<div></div>)
            
        }else {
            if(this.props.data.previous===null){
                return(
                    <div>
                        <button>Anterior</button>
                        <button>Siguiente</button>
                    </div>
                )
            }
        }
    }
}