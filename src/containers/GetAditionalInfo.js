import React, { Component } from 'react';

class GetAditionalinfo extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(this.props.value)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render(){
      if(this.state.data===null){
          return(
            <span>-</span>
          )
      }else{
        return(
            <span>{this.state.data.name}</span>
        )
      }
  }
}

export default GetAditionalinfo;