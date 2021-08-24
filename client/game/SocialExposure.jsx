import React from "react";
import EventLog from "./EventLog";
import ChatLog from "./ChatLog";

export default class SocialExposure extends React.Component {
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
      return null;
    }

    return (
      <div className="social-exposure">
        <h3 className="title">Social Information</h3>
        <p className="title">
          {
            otherPlayers.length > 1
              ? <strong>There are {otherPlayers.length} other players:</strong>
              : <strong>There is one other player:</strong>
          }
        </p>
        {this.renderPlayer(player, true)}
        {otherPlayers.map(p => this.renderPlayer(p))}
        <div>
          <EventLog events={events} stage={stage} player={player} />
          <ChatLog messages={messages} stage={stage} player={player} />
        </div>
      </div>
    );
  }
}


