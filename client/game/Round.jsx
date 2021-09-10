import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialInteractions from "./SocialInteractions.jsx";
import {TaskSandbox, TaskFinal} from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="taskRound">
          <PlayerProfile player={player} stage={stage} game={game} />
          <TaskSandbox game={game} round={round} stage={stage} player={player} />
          <TaskFinal game={game} round={round} stage={stage} player={player} />
          <SocialInteractions stage={stage} player={player} game={game} />
      </div>
    );
  }
}
