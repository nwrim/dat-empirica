import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Overview extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> Game Overview </h1>
          <p>
            In this game, you will be asked to come up with a set of nouns that are {" "}<strong>as different from each other as possible, in all meanings and uses of the words.</strong>{" "}
            For example, {"{"}"cat", "pigeon"{"}"} is better than {"{"}"cat", "kitten"{"}"} for this game, because "cat" and "kitten" are very close in meaning and used in similar context.
          </p>  

          {treatment.playerCount > 1 ? (
            <div>
              <p>
                <strong>
                  You will play this game simultaneously with{" "}
                  {treatment.playerCount - 1} other player(s) in real-time
                </strong>
                . As we will explain in more detail later, you and your teammates will submit a single noun set containing up to{" "}<strong> 10 nouns</strong>.
              </p>

              <p>
              We will use an artificial intelligence algorithm to evaluate the quality of your list, and you will be bonused based on that evaluation.{" "}
                <strong> Note that "free-riding" is not permitted</strong>.{" "}
                <em style={{ color: "red" }}>
                  If we detect that you are inactive during the game (for example, if you visit another tab outside the game), you will not receive payment.
                </em>
              </p>
            </div>

          ) : (
            <p>
              In this game, you will submit a single noun set containing up to{" "}<strong> 10 nouns</strong>. We
              will use an artificial intelligence algorithm to evaluate the quality of your list, and you will be bonused based on that evaluation.
            </p>
          )}

          <p>
            You have at most{" "}
            <strong>{Math.ceil(treatment.stageDuration / 60.0)} minutes</strong>{" "}
            to work on the game. There can be up to 10 minutes waiting time until you start the game.
            Completing the entire game may take you as long as {Math.ceil((treatment.stageDuration / 60.0) + 10)} minutes.{" "}
            <strong>
              If you do not have at least{" "}
              {Math.ceil((treatment.stageDuration / 60.0) + 10)} minutes
              available to work on this HIT please return it now.
            </strong>
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
