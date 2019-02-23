import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Getinfo from './containers/Getinfo';
//import NextButton from './components/Nextbutton';


const API_URL = 'https://swapi.co/api/people/';

class App extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      nextPage: API_URL
    };
  }

  componentDidMount() {
    fetch(this.state.nextPage)
      .then(response => response.json())
      .then(data => this.setState({ data })
      );
  }
  updatePage = () =>{
    //ESTO NO SE SI ESTA BIEN????
    //LLAMO PARA QUE SE VUELVA A MONTAR EL COMPONENTE LLAMANDO A LA NUEVA URL
    this.componentDidMount();
  }
  handleClickNext = () => {
    //SETEO EL ESTADO, PERO AL SER ASINCRONO, PONGO UN CALLBACK PARA EJECUTARSE LUEGO DE ESTAR ACTUALIZADO.
    this.setState({ nextPage: this.state.data.next }, this.updatePage);
  }
  handleClickPrev = () => {
    //SETEO EL ESTADO, PERO AL SER ASINCRONO, PONGO UN CALLBACK PARA EJECUTARSE LUEGO DE ESTAR ACTUALIZADO.
    if(this.state.data.previous){
      this.setState({ nextPage: this.state.data.previous }, this.updatePage);
    }
  }
  render() {
    let buttons;
    if(this.state.data){
      if(this.state.data.previous){ 
        buttons = <div className="d-flex justify-content-end"><button onClick={this.handleClickPrev} type="button" className="btn btn-primary">Prev</button><button onClick={this.handleClickNext} type="button" className="btn btn-primary">Next</button></div>
      }else{
        buttons = <div className="d-flex justify-content-end"><button type="button" className="btn btn-primary" disabled>Prev</button><button onClick={this.handleClickNext} type="button" className="btn btn-primary">Next</button></div>
      }
    }
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        {buttons}
        <Getinfo data={this.state.data}/>
        {buttons}
        </header>
      </div>
    );
  }
}

export default App;
