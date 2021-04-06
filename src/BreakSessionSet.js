import React from "react";

// Fontawesome imports
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BreakSessionSet extends React.Component {
  render() {
    return (
      <div id="set-timers-container">
        <div id="break">
          <h3 id="break-label">Set Break Length</h3>
          <button
            id="break-increment"
            onClick={(number) => this.props.handleBreakSet(1)}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <h4 id="break-length">{this.props.break}</h4>
          <button
            id="break-decrement"
            onClick={(number) => this.props.handleBreakSet(-1)}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div id="session">
          <h3 id="session-label">Set Session Length</h3>
          <button
            id="session-increment"
            onClick={(number) => this.props.handleSessionSet(1)}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <h4 id="session-length">{this.props.session}</h4>
          <button
            id="session-decrement"
            onClick={(number) => this.props.handleSessionSet(-1)}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    );
  }
}

export default BreakSessionSet;
