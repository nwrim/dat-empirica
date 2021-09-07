import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialExposure from "./SocialExposure.jsx";
import {TaskSandbox, TaskFinal} from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <TaskSandbox game={game} round={round} stage={stage} player={player} />
          <TaskFinal game={game} round={round} stage={stage} player={player} />
          <SocialExposure stage={stage} player={player} game={game} />
        </div>
      </div>
    );
  }
}
