import React from "react";
import "./App.css";

import BreakSessionSet from "./BreakSessionSet";
import TimerControls from "./TimerControls";
import Countdown from "./Countdown";

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
    // functions for adjusting break and session length
    this.handleBreakSet = this.handleBreakSet.bind(this);
    this.handleSessionSet = this.handleSessionSet.bind(this);

    // functions to manage timer countdown
    this.decreaseDisplayTime = this.decreaseDisplayTime.bind(this);

    // functions to handle timer control buttons.
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }
  switchBetweenSessionAndBreak() {
    // when the display timer reaches zero this function is called and manages the transation
    // from a session to a break. Changes the timer label, Resets the display time
    if (this.state.label === "Session") {
      this.setState((state) => ({
        displayTime: state.break * 60,
        label: "Break",
      }));
    } else {
      this.setState((state) => ({
        displayTime: state.session * 60,
        label: "Session",
      }));
    }
  }
  decreaseDisplayTime() {
    // Decreases the displayTime by 1. When the display time hits zero, an audio element is
    // played and the function switchBetweenSessionBreak is called.
    if (this.state.displayTime !== 0) {
      this.setState((state) => ({
        displayTime: --state.displayTime,
      }));
    } else {
      let sound = document.getElementById("beep");
      sound.play();
      this.switchBetweenSessionAndBreak();
    }
  }
  handleStartClick() {
    // Create an interval element that calls decreaseDisplayTime every 1000ms
    // then updates the timerRunningFlag to indicated that the timer is running
    this.countDown = setInterval(this.decreaseDisplayTime, 1000);
    this.setState({ timerRunningFlag: true });
  }
  handleStopClick() {
    // Destroys the interval element stopping DisplayTime from decreasing.
    // then updates the timerRunningFlag to indicated that the timer is stopped
    clearInterval(this.countDown);
    this.setState({ timerRunningFlag: false });
  }

  handleBreakSet(number) {
    // Function handles the break set arrows. Adjust the state variable break
    // by +1 or -1. Conditions added in to ensure that the 1 <= break <= 60.
    // also prevents the break length from being adjust while the timer is running.
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
    // Function behaves the same as 'handleBreakSet' only acts on the session
    // state variable. Also updates the displayTime to reflect changes in session length
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
    // When reset is clicked any countdown timer will be stopped, The audio element will
    // be reloaded, and state variables will be returned to their starting values.
    if (this.countDown) {
      clearInterval(this.countDown);
    }
    let sound = document.getElementById("beep");
    sound.load();
    this.setState({
      break: 5,
      session: 25,
      displayTime: 1500,
      label: "Session",
      timerRunningFlag: false,
    });
  }

  render() {
    // When render is called we calculate two values displayMinutes, and displaySeconds.
    // Both values are restricted to display two digits.
    let displayMinutes = Math.floor(
      this.state.displayTime / 60
    ).toLocaleString("en-US", { minimumIntegerDigits: 2 });
    let displaySeconds = (this.state.displayTime % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
    // Then Return the app components.
    return (
      <div id="app-container">
        <div id="title">
          <h1 id="app-name">25 + 5 Clock</h1>
          <h6 id="author">coded by cody</h6>
        </div>
        <BreakSessionSet
          break={this.state.break}
          session={this.state.session}
          handleBreakSet={this.handleBreakSet}
          handleSessionSet={this.handleSessionSet}
        />
        <Countdown
          label={this.state.label}
          displayMinutes={displayMinutes}
          displaySeconds={displaySeconds}
        />
        <TimerControls
          timerRunningFlag={this.state.timerRunningFlag}
          handleResetClick={this.handleResetClick}
          handleStartClick={this.handleStartClick}
          handleStopClick={this.handleStopClick}
        />
        <audio
          id="beep"
          src="https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg"
        />
      </div>
    );
  }
}
export default App;
