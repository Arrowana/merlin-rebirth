import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Map extends Component {
  render() {
    return (
      <div>
        <svg height="500" width="1000">
          <path d="M100,100 h600 v300 h-600 z" stroke="lightgrey" fill="none" id="route" />

          <polygon points="0,0 50,20 0,40" transform="translate(-25, -20)">
            <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#route" />
            </animateMotion>
          </polygon>
            Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    );
  }
}

class RobotController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.status
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>State: {this.state.status}</p>
        <button onClick={() => this.action()}>
          {this.state.status === 'Stopped' ? 'Resume': 'Stop'}
        </button>
      </div>
    );
  }

  action() {
    if(this.state.status === 'Stopped') {
      document.getElementsByTagName('svg')[0].unpauseAnimations();
      this.setState({status: 'Moving'});
    } else {
      document.getElementsByTagName('svg')[0].pauseAnimations();
      this.setState({status: 'Stopped'});
    }
  }
}

class RobotControlPanel extends Component {
  constructor(props) {
    super(props);

    this.robots = [
      {name: 'Robotos ISO 9001', status: 'Full speed'}
    ];
  }

  render() {
    return (
      <div id="control-panel">
        <h2>Control panel</h2>
        {this.robots.map(robot => <RobotController {...robot} />)}
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Merlin rebirth dashboard</h2>
        </div>
        <Map />
        <RobotControlPanel />
      </div>
    );
  }
}

export default App;
