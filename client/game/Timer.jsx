import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {
  secondsToTime= (e) => {
    const m = Math.floor(e % 3600 / 60).toString().padStart(2,'0')
    const s = Math.floor(e % 60).toString().padStart(2,'0');

  return (m + ':' + s);
  }

  render() {
    const { remainingSeconds } = this.props;

    const classes = ["timer"];
    if (remainingSeconds <= 5) {
      classes.push("lessThan5");
    } else if (remainingSeconds <= 10) {
      classes.push("lessThan10");
    }
  
    return (
      <div className={classes.join(" ")}>
        <h2 className="fw-bold">Timer</h2>
        <span className="seconds">{this.secondsToTime(remainingSeconds)}</span>
      </div>
    );
  }
}

export default (Timer = StageTimeWrapper(timer));
