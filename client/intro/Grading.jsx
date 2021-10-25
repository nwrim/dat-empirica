import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Grading extends React.Component {
  state = {
    satisfiedInst: false,
  };

  handleSatisfaction = (satisfied, event) => {
    event.preventDefault();
    this.setState({ satisfiedInst: satisfied });
  };
  
  render() {
    const { hasPrev, hasNext, onNext, onPrev, treatment } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1 className="fw-bold"> Submission and Grading </h1>
          <p>
            You can submit your word list in two ways. The first way is simply running out of time. After {Math.ceil(treatment.stageDuration / 60.0)} minutes pass, the words in the final list will be saved and submitted for grading.
          </p>
          {treatment.playerCount > 1 ? (
            <div>
              <p>
                When you are satisfied with the current word list in the Final List, <strong>you can toggle the button under the Final List to signal that you are satisfied with the list.</strong>{" "}
                You can toggle again to signal that you are no longer satisfied with the list. <strong> If everyone on the team is satisfied, the Final List will be submitted for grading.</strong>
              </p>
            </div>
          ) : (
            <p>
            When you are satisfied with the current word list in the Final List, you can toggle the button under the Final List to submit the Final List for grading.
            </p>
          )}
          <p>
          Below is an example image of the toggle button:
          </p>
          <div className="image-inst">
            <img src={"experiment/interfaceToggle.PNG"} style={{ border: "2px solid" }}/>
          </div>

          <p>
          We will use an algorithm to automatically evaluate the quality of your list, and you will receive a bonus based on that evaluation.{" "}
          <strong>The algorithm calculates the "distance" between each word based on its usage in real life. </strong>{" "}The average distance between the word will be used for assigning bonuses.
          </p>

          <p>
          There also will be a deduction to the bonus if you submit less than 10 words that follow the rules. <em style={{ color: "red" }}>
          We strongly encourage you to submit 10 words so that you do not get a deduction in bonus.
          </em>
          </p>

          <p>
            <strong>The distance between the same word is 0. If you put in the same word more than once in the submitted list, this will greatly decrease your bonus.</strong>{" "}<em style={{ color: "red" }}>
          We strongly encourage you not to submit duplicate words so that you do not get a deduction in bonus.</em>
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
