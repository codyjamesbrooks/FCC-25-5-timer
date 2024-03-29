import React from "react";

// FontAwesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TimerControls extends React.Component {
  render() {
    return (
      <div id="timer-controls">
        {/*----------------------- Start/Stop Button ---------------------------*/}
        {/* OnClick and display conditionaly rendered based on timerRunningFlag */}
        <button
          id="start_stop"
          onClick={
            this.props.timerRunningFlag
              ? this.props.handleStopClick
              : this.props.handleStartClick
          }
        >
          {this.props.timerRunningFlag ? (
            <FontAwesomeIcon icon={faPause} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faPlay} size="2x" />
          )}
        </button>
        {/* --------------------- Timer reset Button ---------------------------*/}
        <button id="reset" onClick={this.props.handleResetClick}>
          <FontAwesomeIcon icon={faSyncAlt} size="2x" />
        </button>
      </div>
    );
  }
}

export default TimerControls;
