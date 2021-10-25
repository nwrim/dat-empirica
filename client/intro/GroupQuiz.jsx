import React from "react";

import { Centered, AlertToaster } from "meteor/empirica:core";

import { Radio, RadioGroup } from "@blueprintjs/core";

export default class GroupQuiz extends React.Component {
  state = {
    nParticipants: "",
    bonus: "",
    nFinalWords: "",
    nRecomWords: "",
    criterion: "",
    gradedlist: "",
    num_players: 0
  };

  componentDidMount() {
    const { game } = this.props;
    this.state.num_players = game.treatment.playerCount;
  }

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleRadioChange = (event) => {
    const el = event.currentTarget;
    console.log("el", el);
    console.log("ev", event);
    this.setState({ [el.name]: el.value });
  };

  handleEnabledChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: !this.state[el.name] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //it should be this.state.nParticipants !== "3" but we don't have "treatment" in QUIZ
    if (
      this.state.nParticipants !== this.state.num_players.toString() ||
      this.state.bonus !== "all" ||
      this.state.nFinalWords !== "10" ||
      this.state.nRecomWords !== "10" ||
      this.state.criterion !== "different" ||
      this.state.gradedlist !== "final"
    ) {
      AlertToaster.show({
        message:
          "Sorry, you have one or more mistakes. Please ensure that you answer the questions correctly, or go back to the instructions",
      });
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, onPrev } = this.props;
    return (
      <Centered>
        <div className="quiz">
          <h1 className={"bp3-heading"}> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
          <div className="bp3-form-group">
              <label className="bp3-label" htmlFor="number-of-participants">
                How many participants will play at the same time, including
                yourself?
              </label>
              <div className="bp3-form-content">
                <input
                  id="nParticipants"
                  className="bp3-input"
                  type="number"
                  min="0"
                  max="150"
                  step="1"
                  dir="auto"
                  name="nParticipants"
                  value={this.state.nParticipants}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="bp3-form-group">
              <div className="bp3-form-content">
                <RadioGroup
                  label="Select the true statement about the bonus:"
                  onChange={this.handleRadioChange}
                  selectedValue={this.state.bonus}
                  name="bonus"
                  required
                >
                  <Radio
                    label="I will get a bonus only based on the word I put in."
                    value="single"
                  />
                  <Radio
                    label="We will submit only one word list as a team and therefore we will all get the same bonus."
                    value="all"
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="bp3-form-group">
              <label className="bp3-label" htmlFor="number-of-participants">
                What is the maximum amount of words you can put in your Final List?
              </label>
              <div className="bp3-form-content">
                <input
                  id="nFinalWords"
                  className="bp3-input"
                  type="number"
                  min="0"
                  max="150"
                  step="1"
                  dir="auto"
                  name="nFinalWords"
                  value={this.state.nFinalWords}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="bp3-form-group">
              <label className="bp3-label" htmlFor="number-of-participants">
                How many words do we encourage you to submit?
              </label>
              <div className="bp3-form-content">
                <input
                  id="nRecomWords"
                  className="bp3-input"
                  type="number"
                  min="0"
                  max="150"
                  step="1"
                  dir="auto"
                  name="nRecomWords"
                  value={this.state.nRecomWords}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>

            <div className="bp3-form-group">
              <div className="bp3-form-content">
                <RadioGroup
                  label="What kind of words do you have to come up with to get the most bonus?"
                  onChange={this.handleRadioChange}
                  selectedValue={this.state.criterion}
                  name="criterion"
                  required
                >
                  <Radio
                    label="words that are very similar to each other"
                    value="similar"
                  />
                  <Radio
                    label="words that are most pleasant to hear"
                    value="pleasant"
                  />
                  <Radio
                    label="words that are very different from each other"
                    value="different"
                  />
                  <Radio
                    label="words that are most unpleasant to hear"
                    value="unpleasant"
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="bp3-form-group">
              <div className="bp3-form-content">
                <RadioGroup
                  label="Words on which list will get graded for bonus?"
                  onChange={this.handleRadioChange}
                  selectedValue={this.state.gradedlist}
                  name="gradedlist"
                  required
                >
                  <Radio label="the Final List" value="final" />
                  <Radio label="the Sandbox" value="sandobx" />
                  <Radio label="both the Sandbox and the Final List" value="both" />
                </RadioGroup>
              </div>
            </div>

            <button
                type="button"
                onClick={onPrev}
                disabled={!hasPrev}
                className="btn btn-secondary btn-lg"
              >
                Back to instructions
              </button>
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </form>
        </div>
      </Centered>
    );
  }
}