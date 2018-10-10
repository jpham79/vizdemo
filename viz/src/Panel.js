import React from 'react';
import './App.css';
import Scatter from './Scatter.js';
import * as v from 'victory';
// import { VictoryBar } from 'victory';


class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "test"
        }
    }

    handleChange(event) {
        this.setState({type: event.target.value})
        console.log(this.state.type);
      }

      
  render() {
    return (
        <div className="panel">
        <h1>Scatter Plot Control Panel</h1>
            <input className="ui input" type="text" value={this.state.type} onChange={this.handleChange.bind(this)}></input>
        </div>
    );
  }
}

export default Panel;