import React from "react";
import "./App.css";

import BreakSessionSet from "./BreakSessionSet";
import TimerControls from "./TimerControls";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      breakTimeLeft: 300,
      session: 25,
      sessionTimeLeft: 1500,
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
        breakTimeLeft: Math.min(3600, state.breakTimeLeft + number * 60),
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
        sessionTimeLeft: Math.min(3600, state.sessionTimeLeft + number * 60),
      }));
    }
  }
  handleResetClick() {
    this.setState({
      break: 5,
      breakTimeLeft: 300,
      session: 25,
      sessionTimeLeft: 1500,
      timerRunningFlag: false,
    });
  }
  handleStartTimerClick() {
    this.setState((state) => ({ timerRunningFlag: !state.timerRunningFlag }));
  }

  render() {
    let sessionMinutes = Math.floor(
      this.state.sessionTimeLeft / 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    let sessionSeconds = Math.floor(
      this.state.sessionTimeLeft % 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    let breakMinutes = Math.floor(
      this.state.breakTimeLeft / 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    let breakSeconds = Math.floor(
      this.state.breakTimeLeft % 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });

    return (
      <div id="app-container">
        <h1>25 + 5 Clock</h1>
        <BreakSessionSet
          break={this.state.break}
          session={this.state.session}
          handleBreakSet={this.handleBreakSet}
          handleSessionSet={this.handleSessionSet}
        />
        <div id="countdown-container">
          {this.state.sessionTimeLeft ? (
            <h2 id="timer-label">Session time left</h2>
          ) : (
            <h2 id="timer-label">Break time left</h2>
          )}
          <h1 id="time-left">
            {this.state.sessionTimeLeft
              ? `${sessionMinutes}:${sessionSeconds}`
              : `${breakMinutes}:${breakSeconds}`}
          </h1>
        </div>
        <TimerControls
          timerRunningFlag={this.state.timerRunningFlag}
          handleResetClick={this.handleResetClick}
          handleStartTimerClick={this.handleStartTimerClick}
        />
      </div>
    );
  }
}
export default App;
