import React from "react";
import "./App.css";

import BreakSessionSet from "./BreakSessionSet";
import CountDownTimer from "./CountDownTimer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
    };

    this.handleBreakSet = this.handleBreakSet.bind(this);
    this.handleSessionSet = this.handleSessionSet.bind(this);
  }

  handleBreakSet(number) {
    this.setState((state) => ({
      break: state.break + number,
    }));
  }
  handleSessionSet(number) {
    this.setState((state) => ({
      session: state.session + number,
    }));
  }

  render() {
    return (
      <div id="app-container">
        <h1>25 + 5 Clock</h1>
        <BreakSessionSet
          break={this.state.break}
          session={this.state.session}
          handleBreakSet={this.handleBreakSet}
          handleSessionSet={this.handleSessionSet}
        />
        <CountDownTimer session={this.state.session} break={this.state.break} />
      </div>
    );
  }
}
export default App;
