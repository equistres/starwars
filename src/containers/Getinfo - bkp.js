import React, { Component } from 'react';
import Character from '../components/Character';


const API = 'https://swapi.co/api/';
const DEFAULT_QUERY = 'people/5/';

class Getinfo extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(API+DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render(){
      if(this.state.data===null){
          return(
              <h3 className="mx-auto">Loading...</h3>
          )
      }else{
        return(
            <Character data={this.state.data}/>
        )
      }
  }
}

export default Getinfo;