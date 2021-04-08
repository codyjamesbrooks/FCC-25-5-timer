import React from "react";
import "./App.css";

import BreakSessionSet from "./BreakSessionSet";
import TimerControls from "./TimerControls";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      displayTime: 1500,
      label: "Session",
      timerRunningFlag: false,
    };
    this.handleBreakSet = this.handleBreakSet.bind(this);
    this.handleSessionSet = this.handleSessionSet.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);

    // functions to manage timer countdown
    this.decreaseDisplayTimeLeft = this.decreaseDisplayTimeLeft.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
  }

  decreaseDisplayTimeLeft() {
    if (this.state.displayTime === 0 && this.state.label === "Session") {
      this.setState((state) => ({
        displayTime: state.break * 60,
        label: "Break",
      }));
    } else if (this.state.displayTime === 0 && this.state.label === "Break") {
      this.setState((state) => ({
        displayTime: state.session * 60,
        label: "Session",
      }));
    } else {
      this.setState((state) => ({
        displayTime: --state.displayTime,
      }));
    }
  }
  startCountdown() {
    this.countDown = setInterval(this.decreaseDisplayTimeLeft, 1000);
    this.setState({ timerRunningFlag: true });
  }
  stopCountdown() {
    clearInterval(this.countDown);
    this.setState({ timerRunningFlag: false });
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
      this.state.session + number >= 1 &&
      this.state.session + number <= 60 &&
      this.state.timerRunningFlag === false
    ) {
      this.setState((state) => ({
        session: state.session + number,
        displayTime: state.displayTime + number * 60,
      }));
    }
  }

  handleResetClick() {
    if (this.countDown) {
      clearInterval(this.countDown);
    }
    this.setState({
      break: 5,
      session: 25,
      displayTime: 1500,
      label: "Session",
      timerRunningFlag: false,
    });
  }

  render() {
    let displayMinutes = Math.floor(
      this.state.displayTime / 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2 });
    let displaySeconds = (this.state.displayTime % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

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
          <h2 id="timer-label">{this.state.label} time left</h2>
          <h1 id="time-left">{`${displayMinutes}:${displaySeconds}`}</h1>
        </div>
        <TimerControls
          timerRunningFlag={this.state.timerRunningFlag}
          handleResetClick={this.handleResetClick}
          startCountdown={this.startCountdown}
          stopCountdown={this.stopCountdown}
        />
      </div>
    );
  }
}
export default App;
