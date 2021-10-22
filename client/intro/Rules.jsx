import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Rules extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> Rules </h1>
          <p>
            Again, you will be asked to come up with a set of nouns that are {" "}<strong>as different from each other as possible, in all meanings and uses of the words</strong>{" "}in this game.
          </p>
          <p>
            However, the words that you can use are restricted. Please take a look at the rules on what words you can use below.
            {" "}<strong>These rules will be visible throughout the game.</strong> 
          </p>

        <div className="alert alert-secondary player-profile-inst" role="alert">
          <h2 className="fw-bold">Rules</h2>
          <ol>
            <li>Only <b>single words</b> in English (no spaces).</li>
            <li>Only <b>nouns</b> (e.g., things, objects, concepts).</li>
            <li><b>No proper nouns</b> (e.g., no specific people or places).</li>
            <li><b>No specialised vocabulary</b> (e.g., no technical terms).</li>
            <li>Think of the words <b>on your own</b> (e.g., do not just look at objects in your surroundings).</li>
          </ol>
        </div>

          <p>
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className="btn btn-secondary btn-lg"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className="btn btn-secondary btn-lg">
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
