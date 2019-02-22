import React, { PureComponent } from 'react';
import Character from '../components/Character';




class Getinfo extends PureComponent {
 
  constructor(props) {
    super(props);
    
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(this.props.currentPage )
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

        this.props.handleNextPage(informacion.next)
        console.log(informacion)
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