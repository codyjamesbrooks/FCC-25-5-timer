import React from "react";

// FontAwesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CountDownTimer extends React.Component {
  render() {
    let displayTime = this.props.session * 60;

    return (
      <div>
        <div id="countdown-container">
          <h2 id="timer-label">Count Down</h2>
          <h1 id="time-left">
            {(displayTime / 60).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {(displayTime % 60).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </h1>
        </div>
        <div id="timer-controls">
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faPause} />
        </div>
      </div>
    );
  }
}

export default CountDownTimer;
