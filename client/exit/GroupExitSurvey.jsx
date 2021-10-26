import React from "react";

import { Centered } from "meteor/empirica:core";

import {
  Button,
  Classes,
  FormGroup,
  RadioGroup,
  TextArea,
  Intent,
  Radio,
} from "@blueprintjs/core";

export default class GroupExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    strategy: "",
    fair: "",
    feedback: "",
    satisfied: "",
    workedWell: "",
    perspective: "",
    chatComfort: "",
    chatUseful: "",
    interfaceUseful: "",
    time: "",
  };

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  exitMessage = (player, game) => {
    return (
      <div>
        {" "}
        <h1> Exit Survey </h1>
        <br />
        <p>
          Please email us the following code and your MTurk/Prolific ID if you want us to double-check that you got paid. This is a precautionary step. We will be paying you even if you do not email us the code. You are free to not email us if you don't feel comfortable with it. We will not be connecting your email address to any of the data, and your email address will not be shared publicly:{" "}
          <em>{player._id}</em>.
        </p>
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
      strategy,
      fair,
      feedback,
      satisfied,
      workedWell,
      perspective,
      chatComfort,
      interfaceUseful,
      time,
      chatUseful,
    } = this.state;

    return (
      <div>
        {" "}
        <p>
          Please answer the following short survey. You do not have to provide
          any information you feel uncomfortable with.
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="bp3-form-group">
            <div className="bp3-form-content">
              <RadioGroup
                name="satisfied"
                label="How satisfied are you with your team's performance in the game?"
                onChange={this.handleChange}
                selectedValue={satisfied}
              >
                <Radio
                  label="Very satisfied"
                  value="verySatisfied"
                />
                <Radio
                  label="Satisfied"
                  value="somewhatSatisfied"
                />
                <Radio
                  label="Neutral"
                  value="neutral"
                />

                <Radio
                  label="Dissatisfied"
                  value="somewhatDissatisfied"
                />
                <Radio
                  label="Very dissatisfied"
                  value="veryDissatisfied"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="bp3-form-group">
            <div className="bp3-form-content">
              <RadioGroup
                name="workedWell"
                label="Do you think your team worked well together?"
                onChange={this.handleChange}
                selectedValue={workedWell}
              >
                <Radio
                  label="Strongly agree"
                  value="stronglyAgree"
                />
                <Radio label="Agree" value="agree" className={"pt-inline"} />
                <Radio
                  label="Neutral"
                  value="neutral"
                />

                <Radio
                  label="Disagree"
                  value="disagree"
                />

                <Radio
                  label="Strongly disagree"
                  value="stronglyDisagree"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="bp3-form-group">
            <div className="bp3-form-content">
              <RadioGroup
                name="perspective"
                label="How valuable do you think your perspective was to the end results?"
                onChange={this.handleChange}
                selectedValue={perspective}
              >
                <Radio
                  label="Extremely valuable"
                  value="extremelyValuable"
                />
                <Radio
                  label="Valuable"
                  value="valuable"
                />
                <Radio
                  label="Neutral"
                  value="neutral"
                />
                <Radio
                  label="Not valuable"
                  value="invaluable"
                />
                <Radio
                  label="Extremely not valuable"
                  value="extremelyInvaluable"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="bp3-form-group">
            <div className="bp3-form-content">
              <RadioGroup
                name="chatComfort"
                label="How comfortable were you in sharing your perspective with the team through the chat?"
                onChange={this.handleChange}
                selectedValue={chatComfort}
              >
                <Radio
                  label="Very comfortable"
                  value="extremelyValuable"
                />
                <Radio
                  label="Comfortable"
                  value="comfortable"
                />
                <Radio
                  label="Neutral"
                  value="neutral"
                />

                <Radio
                  label="Uncomfortable"
                  value="uncomfortable"
                />

                <Radio
                  label="Very uncomfortable"
                  value="veryUncomfortable"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="form-line thirds">
            <FormGroup
              className={"form-group"}
              inline={false}
              label={"Was the time limit reasonable?"}
              labelFor={"time"}
            >
              <TextArea
                id="time"
                name="time"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={time}
                fill={true}
              />
            </FormGroup>
            
            <FormGroup
              className={"form-group"}
              inline={false}
              label={"Do you feel the pay was fair?"}
              labelFor={"fair"}
              //className={"form-group"}
            >
              <TextArea
                id="fair"
                name="fair"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={fair}
                fill={true}
              />
            </FormGroup>

            <FormGroup
              className={"form-group"}
              inline={false}
              label={"Did you encounter any problems with the user interface?"}
              labelFor={"interfaceUseful"}
            >
              <TextArea
                id="interfaceUseful"
                name="interfaceUseful"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={interfaceUseful}
                fill={true}
              />
            </FormGroup>
          </div>

          <div className="form-line thirds">
            <FormGroup
              className={"form-group"}
              inline={false}
              label={"Was the in-game chat feature useful?"}
              labelFor={"chatUseful"}
            >
              <TextArea
                id="chatUseful"
                name="chatUseful"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={chatUseful}
                fill={true}
              />
            </FormGroup>

            <FormGroup
              className={"form-group"}
              inline={false}
              label={"How would you describe your strategy in the game?"}
              labelFor={"strategy"}
            >
              <TextArea
                id="strategy"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={strategy}
                fill={true}
                name="strategy"
              />
            </FormGroup>

            <FormGroup
              className={"form-group"}
              inline={false}
              label={"Feedback, including problems you encountered. Please let us know if any of the players did not participate or was unresponsive."}
              labelFor={"feedback"}
            >
              <TextArea
                id="feedback"
                name="feedback"
                large={true}
                intent={Intent.PRIMARY}
                onChange={this.handleChange}
                value={feedback}
                fill={true}
              />
            </FormGroup>
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
