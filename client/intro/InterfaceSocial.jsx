import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InterfaceSocial extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> Collaborating With Other Players </h1>
          <p>
          <strong>
          You will play this game simultaneously with{" "}
          {treatment.playerCount - 1} other player(s) in real-time.
          </strong>{" "}
          You will see your and your teammates' color and icon in the top right of the screen.
          You can check who is satisfied and who is not in that section.
          </p>

          <p>
            You may also communicate with your teammates through the in-game
            chat. This chat room is public so whatever you write will appear to
            the other teammates. You can use this in any way you want.
          </p>

          <p>
            Remember, you will be sharing the Sandbox and the Final List with all other players.{" "}
            <strong>Everyone will be graded on the Final List the group submit, and will be paid the same bonus</strong>!
          </p>

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
