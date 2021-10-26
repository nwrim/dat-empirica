import React from "react";

import {Centered} from "meteor/empirica:core";

import { Radio, RadioGroup } from "@blueprintjs/core";

export default class IndividualExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    timeReasonable: "",
    uiProblems: "",
    instructionsClear: "",
    fair: "",
    feedback: "",
    strategyQ1: "",
    strategyQ2: "",
    strategyQ3: "",
    strategyQ4: ""
  };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  exitMessage = (player, game) => {
    return (
      <div>
        {" "}
        <h1 className={"bp3-heading"}> Exit Survey </h1>
        <br />
        <h3>
          Please email us the following code and your MTurk/Prolific ID if you want us to double-check that you got paid. This is a precautionary step. We will be paying you even if you do not email us the code. You are free to not email us if you don't feel comfortable with it. We will not be connecting your email address to any of the data, and your email address will not be shared publicly:{" "}
          <em>{player._id}</em>.
        </h3>
        <p>
          <strong>
            We will run the algorithm to calculate the quality of your answer within 24 hours, and will send the base pay and the bonus as soon as possible.
          </strong>{" "}
        </p>
      </div>
    );
  };

  exitForm = () => {
    const {
      timeReasonable,
      uiProblems,
      instructionsClear,
      fair,
      feedback
    } = this.state;

    return (
      <div>
        {" "}
        <p>
          Please answer the following short survey. You do not have to provide
          any information you feel uncomfortable with.
        </p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-line thirds">
            <div className="pt-form-group">
              <label className="pt-label" htmlFor="age">
                Were the instructions clear?
              </label>
              <div className="pt-form-content">
                <textarea
                  className="pt-input pt-fill"
                  dir="auto"
                  name="instructionsClear"
                  value={instructionsClear}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="pt-form-group">
              <label className="pt-label" htmlFor="age">
                Was the time limit reasonable?
              </label>
              <div className="pt-form-content">
                <textarea
                  className="pt-input pt-fill"
                  dir="auto"
                  name="timeReasonable"
                  value={timeReasonable}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="pt-form-group">
              <label className="pt-label" htmlFor="age">
                Did you encounter any problems with the user interface?
              </label>
              <div className="pt-form-content">
                <textarea
                  className="pt-input pt-fill"
                  dir="auto"
                  name="uiProblems"
                  value={uiProblems}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-line thirds">
            <div className="pt-form-group">
              <label className="pt-label" htmlFor="age">
                Do you feel the pay was fair?
              </label>
              <div className="pt-form-content">
                <textarea
                  className="pt-input pt-fill"
                  dir="auto"
                  name="fair"
                  value={fair}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="pt-form-group">
              <label className="pt-label" htmlFor="age">
                Feedback, including problems you encountered.
              </label>
              <div className="pt-form-content">
                <textarea
                  className="pt-input pt-fill"
                  dir="auto"
                  name="feedback"
                  value={feedback}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>{" "}
      </div>
    );
  };

  componentWillMount() {}

  render() {
    const { player, game } = this.props;
    return (
      <Centered>
        <div className="exit-survey">
          {this.exitMessage(player, game)}
          <hr />
          {this.exitForm()}
        </div>
      </Centered>
    );
  }
}
