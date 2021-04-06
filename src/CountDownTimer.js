import React from "react";

// FontAwesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CountDownTimer extends React.Component {
  render() {
    let sessionTimeRemaining = this.props.session * 60;
    let breakTimeRemaining = this.props.breakTime * 60;
    const decreaseTimer = (timeRemaining) => {
      --timeRemaining;
    };

    let decreaseTimeLeft = () => {
      while (this.state.timeRunningFlag && sessionTimeRemaining > 0) {
        setInterval(decreaseTimer(sessionTimeRemaining), 1000);
      }
    };
    return (
      <div>
        <div id="countdown-container">
          <h2 id="timer-label">Count Down</h2>
          <h1 id="time-left">
            {Math.floor(sessionTimeRemaining / 60).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {(sessionTimeRemaining % 60).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </h1>
        </div>
        <div id="timer-controls">
          <button id="start_stop" onClick={this.props.handleStartTimerClick}>
            {this.props.timerRunningFlag ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button id="reset" onClick={this.props.handleResetClick}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
      </div>
    );
  }
}

export default CountDownTimer;
