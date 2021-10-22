import React from "react";

export default class PlayerProfile extends React.Component {
  renderRules() {  
    return (
      <div className="alert alert-secondary player-profile" role="alert">
        <h2 className="fw-bold">Rules</h2>
        <ol>
          <li>Only <b>single words</b> in English (no spaces).</li>
          <li>Only <b>nouns</b> (e.g., things, objects, concepts).</li>
          <li><b>No proper nouns</b> (e.g., no specific people or places).</li>
          <li><b>No specialised vocabulary</b> (e.g., no technical terms).</li>
          <li>Think of the words <b>on your own</b> (e.g., do not just look at objects in your surroundings).</li>
        </ol>
      </div>
    );
  }

  render() {
    // const { stage } = this.props;
    return this.renderRules();
  }
}
