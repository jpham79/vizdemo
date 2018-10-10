import React, { Component } from 'react';
import './App.css';
import Bar from './Bar.js';
import Scatter from './Scatter.js';
import Panel from './Panel.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: ""
    }
  }

  getType (param) {
    this.setState.type = param;
  }

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
          <div className="ui line segment" >
            <Scatter />
          </div>
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
