import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Getinfo from './containers/Getinfo';


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
  handleClickNext = () =>{
    console.log("entro en handleClickNext", this.state.data.next);
    this.state.nextPage = this.state.data.next
    //this.setState({ nextPage:  this.state.data.next})
    console.log("el estado despues de cambiarlo", this.state.nextPage)
    this.componentDidMount()
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        <Getinfo data={this.state.data}/>
        <button onClick={this.handleClickNext}>next page</button>
        </header>
      </div>
    );
  }
}

export default App;
