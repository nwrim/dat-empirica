import React from "react";

import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const { player } = this.props;
    return (
      <div className="profile-score">
        <h3>Your Profile</h3>
        <img src={player.get("avatar")} className="profile-avatar" />
        <center>Your name is: <b>{player.get("name")}</b></center>
      </div>
    );
  }

  renderRules() {  
      return (
      <div className="profile-rules">
	<h3>Rules</h3>
	1. Only <b>single words</b> in English.<br/>
	2. Only <b>nouns</b> (e.g., things, objects, concepts).<br/>
	3. <b>No proper nouns</b> (e.g., no specific people or places).<br/>
	4. <b>No specialised vocabulary</b> (e.g., no technical terms).<br/>
	5. Think of the words <b>on your own</b> (e.g., do not just look at objects in your surroundings).<br/>
      </div>
  );
 }

  render() {
    const { stage } = this.props;

    return (
      <aside className="player-profile">
        {this.renderProfile()}
        {/* do not render score and add rules instead
        // {this.renderScore()} */}
        <Timer stage={stage} />
        {this.renderRules()}


      </aside>
    );
  }
}
