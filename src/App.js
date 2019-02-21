import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Getinfo from './containers/Getinfo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation />
        <Getinfo />
        </header>
      </div>
    );
  }
}

export default App;
