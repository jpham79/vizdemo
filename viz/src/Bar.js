import React from 'react';
import './App.css';
import * as v from 'victory';
// import { VictoryBar } from 'victory';

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

class Bar extends React.Component {
  render() {
    return (
      <v.VictoryChart>
        <v.VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </v.VictoryChart>
    );
  }
}

export default Bar;