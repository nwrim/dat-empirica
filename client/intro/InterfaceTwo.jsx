import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InterfaceTwo extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const imagePath =
      treatment.playerCount > 1
        ? "experiment/interfaceFinalGroup.PNG"
        : "experiment/interfaceFinalSingle.PNG";

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> the Final List </h1>
          <p>
            After you put a word in the Sandbox, you can move the word into the <strong>"Final List"</strong>{" "} by clicking the <img src="/experiment/images/arrow-right.svg" height="18px"/> button.
            You can move a word back to the Sandbox by clicking the <img src="/experiment/images/arrow-left.svg" height="18px"/> button.
          </p>
          <p>
            <strong>You can store up to 10 words in the Final List.</strong>{" "} 
            If the Final List is full, the <img src="/experiment/images/arrow-right.svg" height="18px"/> button will deactivate, 
            and you will have to move a word back to the Sandbox to add another word to the Final List.
          </p>

          {treatment.playerCount > 1 ? (
            <div>
              <p>
                <strong>
                The Final List is also shared by all players.
                Everyone will be able to move the word regardless of who added the word.
                </strong>{" "}
              </p>
              <p>
              <em style={{ color: "red" }}>
                  The words in the Final List WILL be graded for bonuses.
              </em>{" "}
              Below is an example image of the Sandbox and the Final List:
              </p>

            </div>

          ) : (
            <p>
              Below is an example image of the Sandbox and the Final List:
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
