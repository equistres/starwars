import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Getinfo from './containers/Getinfo';
import NextButton from './components/Nextbutton';


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
    console.log(this.state.nextPage)
  }
  render() {
    let prevButton = ">";
    if(this.state.data!=null){
      if(this.state.data.previous!=null){
        prevButton = this.state.data.previous
      }
    }
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        <Getinfo data={this.state.data}/>
        <button onClick={this.handleClickNext}>next page</button>
        <NextButton prevButton={prevButton}/>
        </header>
      </div>
    );
  }
}

export default App;
