import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Getinfo from './containers/Getinfo';

const API = 'https://swapi.co/api/';
const DEFAULT_QUERY = 'people/';

const FIRST_PAGE = API + DEFAULT_QUERY
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextPageUrl: FIRST_PAGE,
      elementos: [<Getinfo  currentPage={FIRST_PAGE} handleNextPage={this.handleNextPage}/>]
    };
  }

  loadNextPage = () =>
  {
    console.log(this.state.elementos)
    this.setState(prevState => ({
      elementos: [...prevState.elementos, <Getinfo  currentPage={this.state.nextPageUrl} handleNextPage={this.handleNextPage}/>]
    }))
    console.log(this.state.elementos)
  }

  handleNextPage = (nextUrl) =>{
    console.log('url vieja', this.state.nextPageUrl)
    this.setState({ nextPageUrl: nextUrl })
    console.log('url nueva', this.state.nextPageUrl)
  }
  render() {
    console.log('ELEMENTOS',this.state.elementos)
    console.log('DIBUJO APP')
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        {this.state.elementos}
        <button onClick={this.loadNextPage} >Load Next Page </button>
        </header>
      </div>
    );
  }
}

export default App;
