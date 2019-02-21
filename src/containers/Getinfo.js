import React, { Component } from 'react';
import Character from '../components/Character';


const API = 'https://swapi.co/api/';
const DEFAULT_QUERY = 'people/';

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
      .then(data => this.setState({ data })
      );
  }

  render(){
      const informacion = this.state.data;
      
      if(this.state.data===null){
          return(
              <h3 className="mx-auto">Loading...</h3>
          )
      }else{
        return(
          <div className="container-fluid">
            <div className="row">
            {
              informacion.results.map((item) => {
                return(
                  <Character key={item.name} data={item}/>
                )
                
              })
            }
            </div>
          </div>

        )
      }
  }
}

export default Getinfo;