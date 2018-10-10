import React, { Component } from 'react';
import './App.css';
import * as r from 'semantic-ui-react'
import Bar from './Bar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Victory Demo
        </header>
        <div className="container">
          <div className="ui bar segment" >
            <Bar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
