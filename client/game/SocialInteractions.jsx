import React from "react";
import Timer from "./Timer.jsx";
import ChatLog from "./ChatLog";

export default class SocialInteractions extends React.Component {
  renderSocialInteraction(otherPlayer) {
    // Get the value or return NA if no value was entered
    const value = otherPlayer.round.get("value") ?? "NA";
    return (
      <div className="alter" key={otherPlayer._id}>
        <img src={otherPlayer.get("avatar")} className="profile-avatar" />
      </div>
    );
  }
  
  renderPlayer(player, self = false) {
    return (
      <div className="player" key={player._id}>
        <span className="image">
          <span
            className={`satisfied bp3-tag bp3-round ${
              player.get("satisfied") ? "bp3-intent-success" : "bp3-intent-danger"
            }`}
          >
            <span
              className={`bp3-icon-standard ${
                player.get("satisfied") ? "bp3-icon-tick" : "bp3-icon-cross"
              }`}
            />
          </span>

          <img src={player.get("avatar")} />
        </span>
        {/* <span className="name" style={{ color: player.get("nameColor") }}> */}
        <span className="name" style={{ color: player.get("nameColor") }}>
          {player.get("name")}
          {self ? " (You)" : ""}
        </span>
      </div>
    );
  }

  render() {
    const { game, player, round, stage } = this.props;

    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    
    const messages = stage.get("chat").map(({ text, playerId }) => ({
      text,
      subject: game.players.find(p => p._id === playerId)
    }));
     
    const events = stage.get("log").map(({ subjectId, ...rest }) => ({
      subject: subjectId && game.players.find(p => p._id === subjectId),
      ...rest
    }));
 
    if (otherPlayers.length === 0) {
      return (
        <div className="social-interactions">
          <Timer stage={stage} /> 
        </div>
      );
    }

    return (
      <div className="social-interactions">
        <Timer stage={stage} /> 	
        <div className="status">
          <div className="players bp3-card">
            {this.renderPlayer(player, true)}
            {otherPlayers.map(p => this.renderPlayer(p))}
          </div>
        </div>
        <ChatLog messages={messages} stage={stage} player={player} />
      </div>
    );
  }
}


