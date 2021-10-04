import React from "react";

export default class PlayerProfile extends React.Component {
  renderRules() {  
      return (
      <div className="profile-rules">
	<h3>Rules</h3>
	1. Only <b>single words</b> in English.<br/>
	2. Only <b>nouns</b> (e.g., things, objects, concepts).<br/>
	3. <b>No proper nouns</b> (e.g., no specific people or places).<br/>
	4. <b>No specialised vocabulary</b> (e.g., no technical terms).<br/>
	5. Think of the words <b>on your own</b> (e.g., do not just look at objects in your surroundings).<br/>
	6. Click <b>Satisfied</b> if you think your answer is good for submission.<br/>
      </div>
  );
}

  render() {
    // const { stage } = this.props;

    return (
      <div className="player-profile">
        {this.renderRules()}
      </div>
    );
  }
}
