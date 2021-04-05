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
          <FontAwesomeIcon
            id="break-increment"
            icon={faChevronUp}
            onClick={(number) => this.props.handleBreakSet(1)}
          />
          <h4 id="break-length">{this.props.break}</h4>
          <FontAwesomeIcon
            id="break-decrement"
            icon={faChevronDown}
            onClick={(number) => this.props.handleBreakSet(-1)}
          />
        </div>
        <div id="session">
          <h3 id="session-label">Set Session Length</h3>
          <FontAwesomeIcon
            id="session-increment"
            icon={faChevronUp}
            onClick={(number) => this.props.handleSessionSet(1)}
          />
          <h4 id="session-length">{this.props.session}</h4>
          <FontAwesomeIcon
            id="session-decrement"
            icon={faChevronDown}
            onClick={(number) => this.props.handleSessionSet(-1)}
          />
        </div>
      </div>
    );
  }
}

export default BreakSessionSet;
