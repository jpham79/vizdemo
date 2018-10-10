import React from 'react';
import './App.css';
import Scatter from './Scatter.js';

class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type1: '',
            type2: '',
            seed: 2,
            size: 12,
            toggle: false,
            interval: ''
        }
        this.setType1 = this.setType1.bind(this); //Need to bind functions
        this.setType2 = this.setType2.bind(this);
        this.setSeed = this.setSeed.bind(this);
        this.setSize = this.setSize.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    setType1(event) {
        this.setState({ type1: event.target.value }); //Can only change state with setState function
    }

    setType2(event) {
        this.setState({ type2: event.target.value });
    }

    setSeed(event) {
        this.setState({ seed: event.target.value });
    }

    setSize(event) {
        this.setState({ size: event.target.value });
    }

    incrementSize() {
        this.setState({ seed: this.state.seed + 1 });
    }

    toggle() { 
        this.setState({ toggle: !this.state.toggle }); //Handles the state of the toggle button
        if (this.state.toggle) {
            clearInterval(this.state.interval);
        } else {
            this.state.interval = setInterval(() =>
                this.incrementSize(), 1000);
        }
    }

    render() {
        return (
            <div className="container" id="dark">
                <div class="row">
                    <div className="ui line segment">
                        <Scatter seed={this.state.seed} size={this.state.size} type1={this.state.type1} type2={this.state.type2} />
                    </div>
                    <div className="panel">
                        <h1 className="ui dividing header">Scatter Plot Control Panel</h1>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Glyph 1
                            </div>
                            <input className="ui input focus" type="text" value={this.state.type1} onChange={this.setType1} placeholder="glyph _y > 0"></input>
                        </div>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Glyph 2
                            </div>
                            <input className="ui input" type="text" value={this.state.type2} onChange={this.setType2} placeholder="glyph _y < 0"></input>
                        </div>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Sample Size
                            </div>
                            <input className="ui input" type="text" value={this.state.seed} onChange={this.setSeed}></input>
                        </div>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Font Size
                            </div>
                            <input className="ui input" type="text" value={this.state.size} onChange={this.setSize}></input>
                        </div>
                        <button className="ui inverted button" id="go" onClick={this.toggle}>TOGGLE!</button>
                    </div>
                </div>
                <h1 className="title2">A Scatter Plot That Uses State Properties</h1>
            </div>

        );
    }
}

export default Panel;