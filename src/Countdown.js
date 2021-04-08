import React from "react";

class Countdown extends React.Component {
  render() {
    return (
      <div id="countdown-container">
        <h2 id="timer-label">{this.props.label} time left</h2>
        <h1 id="time-left">{`${this.props.displayMinutes}:${this.props.displaySeconds}`}</h1>
      </div>
    );
  }
}
export default Countdown;
