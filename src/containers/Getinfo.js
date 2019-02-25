import React, { Component } from 'react';
import Character from '../components/Character';

class Getinfo extends Component {
  render(){
      const informacion = this.props.data;
      
      if(this.props.data===null){
          return(
              <h3 className="mx-auto">Loading...</h3>
          )
      }else{
        return(
          <div className="container-fluid" style={{maxWidth: '1900px'}}>
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