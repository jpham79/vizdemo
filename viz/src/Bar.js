import React from 'react';
import './App.css';
import * as v from 'victory';
// import { VictoryBar } from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class Bar extends React.Component {
  render() {
    return (
      <v.VictoryChart domainPadding={25} >
        <v.VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <v.VictoryAxis          
          // passes in data from the y value into tickFormat
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <v.VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          style={{
            data: { fill: "#c43a31" }
          }}
        />
      </v.VictoryChart>
    );
  }
}

export default Bar;