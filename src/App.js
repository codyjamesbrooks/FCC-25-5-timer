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
      timerRunningFlag: false,
    };
    this.handleBreakSet = this.handleBreakSet.bind(this);
    this.handleSessionSet = this.handleSessionSet.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleStartTimerClick = this.handleStartTimerClick.bind(this);
  }

  handleBreakSet(number) {
    if (
      (this.state.break > 1 || number > 0) &&
      this.state.timerRunningFlag === false
    ) {
      this.setState((state) => ({
        break: Math.min(60, state.break + number),
      }));
    }
  }
  handleSessionSet(number) {
    if (
      (this.state.session > 1 || number > 0) &&
      this.state.timerRunningFlag === false
    ) {
      this.setState((state) => ({
        session: Math.min(60, state.session + number),
      }));
    }
  }
  handleResetClick() {
    this.setState({
      break: 5,
      session: 25,
    });
  }
  handleStartTimerClick() {
    this.setState((state) => ({ timerRunningFlag: !state.timerRunningFlag }));
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
        <CountDownTimer
          session={this.state.session}
          break={this.state.break}
          timerRunningFlag={this.state.timerRunningFlag}
          handleResetClick={this.handleResetClick}
          handleStartTimerClick={this.handleStartTimerClick}
        />
      </div>
    );
  }
}
export default App;
