import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InterfaceThree extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;
    const imagePath =
      treatment.playerCount > 1
        ? "experiment/interfaceAllGroup.PNG"
        : "experiment/interfaceAllSingle.PNG";

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> Interface </h1>
          <p>
            You are ready to take the quiz! Please see below for an example image of the entire interface.
            The interface might look a little different depending on how many player you are playing with, and your screen size.
          </p>

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
