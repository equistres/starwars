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
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        <Getinfo data={this.state.data}/>
        <button onClick={this.handleClickNext}>next page</button>
        {/* <NextButton data={this.state.data}/> */}
        </header>
      </div>
    );
  }
}

export default App;
