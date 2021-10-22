import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InterfaceOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const imagePath =
      treatment.playerCount > 1
        ? "experiment/interfaceSandboxGroup.PNG"
        : "experiment/interfaceSandboxSingle.PNG";

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> the Sandbox</h1>

          <p>
            You are provided with a handy <strong>"Sandbox"</strong>{" "} where you can brainstorm and store any words. 
            You can add a word in the Sandbox simply by typing a word and pressing the "Add Word" button.
            You can delete a word from the Sandbox by simply clicking the <img src="/experiment/images/trash.svg" height="18px"/> button next to the word.  
          </p>

          {treatment.playerCount > 1 ? (
            <div>
              <p>
                As we mentioned, you will play this game simultaneously with{" "}
                  {treatment.playerCount - 1} other player(s) in real-time.{" "}
                <strong>
                The Sandbox will be shared across all players.
                </strong>{" "}
                The player who added the word will be displayed next to the word.{" "}
                <strong>
                Everyone will be able to delete or move the word (moving will be explained on the next page) regardless of who added the word.
                </strong>{" "}
              </p>
              <p>
              <em style={{ color: "red" }}>
                  The words in the Sandbox will NOT be graded for bonuses.
              </em>{" "}
              Below is an example image of the Sandbox:
              </p>

            </div>

          ) : (
            <p>
              <em style={{ color: "red" }}>
                  The words in the Sandbox will NOT be graded for bonuses.
              </em>{" "}
              Below is an example image of the Sandbox:
            </p>
          )}
          <div className="image-inst">
            <img src={imagePath} style={{ border: "2px solid" }}/>
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
