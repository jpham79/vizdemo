import React from 'react';
import * as v from 'victory';
// import { VictoryBar } from 'victory';

const data = [
  { year: 1, earnings: 70000},
  { year: 2, earnings: 83200 },
  { year: 3, earnings: 106832 },
  { year: 4, earnings: 137363 }
];

class CatPoint extends React.Component {
    render() {
      const {x, y, datum} = this.props;
      const cat = datum._y >= 0 ? "😻" : "😹";
      return (
        <text x={x} y={y} fontSize={30}>
          {cat}
        </text>
      );
    }
  }
class Scatter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seed: props.seed
        }
    }

  render() {
    return (
        <v.VictoryChart>
        <v.VictoryScatter
          y={(d) =>
            Math.sin(2 * Math.PI * d.x)
          }
          samples={25}
          dataComponent={<CatPoint/>}
        />
      </v.VictoryChart>
    );
  }
}

export default Scatter;