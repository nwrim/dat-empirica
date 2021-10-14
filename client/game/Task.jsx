import React from "react";

import TaskResponse from "./TaskResponse";
import { SandboxStimulus, FinalWordStimulus } from "./TaskStimulus";

import { StageTimeWrapper } from "meteor/empirica:core";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

const TimedButton_1 = StageTimeWrapper((props) => {
  const { player, onClick, activateAt, remainingSeconds, stage } = props;

  const disabled = remainingSeconds > activateAt;
  return (
    <button
      type="button"
      className={`bp3-button bp3-icon-cross bp3-intent-danger ${
        player.get("satisfied") ? "bp3-minimal" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Unsatisfied
    </button>
  );
});

const TimedButton_2 = StageTimeWrapper((props) => {
  const { player, onClick, activateAt, remainingSeconds, stage } = props;

  const disabled = remainingSeconds > activateAt;
  return (
    <button
      type="button"
      className={`bp3-button bp3-icon-tick bp3-intent-success ${
        player.get("satisfied") ? "" : "bp3-minimal"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Satisfied
    </button>
  );
});

class TaskSandbox extends React.Component {
    constructor(props) {
    super(props);
    this.state = { activeButton: false };
  }

  render() {
    const { game, stage, player } = this.props;
      
    return (
      <div className="taskSandbox">
        <SandboxStimulus {...this.props} />
        <TaskResponse {...this.props} />
      </div>
    );
  }
}

class TaskFinal extends React.Component {
    constructor(props) {
    super(props);
    this.state = { activeButton: false };
  }
  
    componentDidMount() {
    const { player } = this.props;
    setTimeout(() => this.setState({ activeButton: true }), 5000); //we make the satisfied button active after 5 seconds
    if (player.stage.submitted) {
      this.setState({ activeButton: false });
    }
  }

  handleSatisfaction = (satisfied, event) => {
    const { game, player, stage } = this.props;
    event.preventDefault();

    //if everyone submitted then, there is nothing to handle
    if (player.stage.submitted) {
      return;
    }

    //if it is only one player, and satisfied, we want to lock everything
    if (game.players.length === 1 && satisfied) {
      this.setState({ activeButton: false });
    } else {
      //if they are group (or individual that clicked unsatisfied), we want to momentarily disable the button so they don't spam, but they can change their mind so we unlock it after 1.5 seconds
      this.setState({ activeButton: false });
      setTimeout(() => this.setState({ activeButton: true }), 800); //preventing spam by a group
    }

    player.set("satisfied", satisfied);
    stage.append("log", {
      verb: "playerSatisfaction",
      subjectId: player._id,
      state: satisfied ? "satisfied" : "unsatisfied",
      at: moment(TimeSync.serverTime(null, 1000)),
    });
    console.log("task moment", moment(TimeSync.serverTime(null, 1000)));
  };

  render() {
    const { game, stage, player } = this.props;
      
    return (
      <div className="taskSandbox">
        <FinalWordStimulus {...this.props} />
        <div className="mt-3">
          <TimedButton_1 
            stage={stage} 
            player={player}
            activateAt={game.treatment.stageDuration - 5}
            onClick={this.handleSatisfaction.bind(this, false)}
          />

          <TimedButton_2 
            stage={stage} 
            player={player}
            activateAt={game.treatment.stageDuration - 5}
            onClick={this.handleSatisfaction.bind(this, true)}
          />
	      </div>
      </div>
    );
  }
}

export { TaskSandbox, TaskFinal };


