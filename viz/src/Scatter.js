import React from 'react';
import * as v from 'victory';

class Glyph extends React.Component { //Custom Component which will be inserted into the Scatter Plot

    render() {
        const { x, y, datum } = this.props; //Uses the props passed in from parent component to determine how Data is displayed
        let glyph = datum._y >= 0 ? this.props.type1 : this.props.type2;

        return ( 
            <text x={x} y={y} fontSize={this.props.size}>
                {glyph}
            </text>
        );
    }
}

class Scatter extends React.Component {

    render() {
        return (
            <v.VictoryChart>
                <v.VictoryLabel
                    text={"y = Sin(2piX)"}
                    x={200}
                    y={10}
                />

                <v.VictoryScatter //Defines the Scatter Plot
                    y={(d) =>Math.sin(2 * Math.PI * d.x)} //The formula for our plot
                    samples={this.props.seed} //The number of data points on the plot
                    dataComponent={<Glyph type1={this.props.type1} type2={this.props.type2} size={this.props.size} />} //Takes in a whole component to display as points
                />
            </v.VictoryChart>
        );
    }
}

export default Scatter;