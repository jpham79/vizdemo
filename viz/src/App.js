import React, { Component } from 'react';
import './App.css';
import Bar from './Bar.js';
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
          <h1 className="title">A simple Bar Graph</h1>
        </div>
          <Panel />
          <div className="row">
            <img src={require('./img/app.png')} />
            <img src={require('./img/bar.png')} />
            <img src={require('./img/scatter.png')} />
          </div>
          <div className="row">
            <img src={require('./img/panel1.png')} />
            <img src={require('./img/panel2.png')} />
          </div>

      </div>
    );
  }
}

export default App;
