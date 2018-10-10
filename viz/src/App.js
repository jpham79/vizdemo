import React, { Component } from 'react';
import './App.css';
import Bar from './Bar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Victory Demo
        </header>
        <div className="bar container" id='bar'>
          <div className="ui bar segment" >
            <Bar />
          </div>
          <h1>A simple Bar Graph</h1>
        </div>
        <div className="container" id='dark'>
          <div className="ui bar segment" >
            <Bar />
          </div>
          <h1>A simple Bar Graph</h1>
        </div>
      </div>
    );
  }
}

export default App;
