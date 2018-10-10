import React from 'react';
import * as v from 'victory';
// import { VictoryBar } from 'victory';

const data = [
  { year: 1, earnings: 70000},
  { year: 2, earnings: 83200 },
  { year: 3, earnings: 106832 },
  { year: 4, earnings: 137363 }
];

const colors = ['red', 'blue', 'orange', 'green'];

class Bar extends React.Component {
  render() {
    return (
      <v.VictoryChart domainPadding={25} >
        <v.VictoryLabel 
          text={"Post Grad CS Salary" }
          //position
          x={200}
          y={50}
        />
        <v.VictoryAxis
          // tickValues specifies both the number of ticks and where they are placed on the axis
          tickValues={data.year}
          tickFormat={["Year 1", "Year 2", "Year 3", "Year 4"]}
          label="Time after graduation"

        />
        <v.VictoryAxis                    
          dependentAxis // This prop determines the values being passed in are the 'y' values
          tickFormat={(y) => (`$${y / 1000}k`)}
        />
        <v.VictoryBar
          data={data}
          x="year"
          y="earnings"
        />
      </v.VictoryChart>
    );
  }
}

export default Bar;