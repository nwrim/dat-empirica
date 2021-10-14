import React from "react";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialInteractions from "./SocialInteractions.jsx";
import {TaskSandbox, TaskFinal} from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="row pt-5">
        <div className="col-xl-12 col-xxl-3">
          <PlayerProfile player={player} stage={stage} game={game} />
        </div>
        <div className="col-md-6 col-xl-4 col-xxl-3">
          <TaskSandbox game={game} round={round} stage={stage} player={player} />
        </div>
        <div className="col-md-6 col-xl-4 col-xxl-3">
          <TaskFinal game={game} round={round} stage={stage} player={player} />
        </div>
        <div className="col-lg-12 col-xl-4 col-xxl-3">
          <SocialInteractions stage={stage} player={player} game={game} />
        </div>
      </div>
    );
  }
}
