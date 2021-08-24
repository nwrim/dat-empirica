import React from "react";

export default class TaskResponse extends React.Component {
  state = { inputValue: ''};

  handleChange = event => {
    const value = event.target.value;
    const { player } = this.props;
    // only allow value to be set if it is character
    // this lets participants input random character as the first letter - not sure why
    // code modified from https://stackoverflow.com/questions/52846347/reactjs-cannot-restrict-user-input-to-letters-only
    if (value === "" || /^[A-Za-z]+$/.test(value))
	// this should be changed to appending to the list (figure it out after making the redering function)
	this.setState({inputValue: value});
  };

  handleSubmit = event => {
    const { stage } = this.props;
    event.preventDefault();
    // this.props.player.stage.submit();
    stage.append('wordList', this.state.inputValue);
    this.setState({inputValue: ''});
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Word Limt Reached!</h5>
          Please remove a word to add a new one
        </div>
      </div>
    );
  }

  renderInput() {
    const { player } = this.props;
    const value = this.state.inputValue;
    return (
      <input
        type={"text"}
        onChange={this.handleChange}
        value={value}
        required
      />
    );
  }

  render() {
    const { round, stage, player } = this.props;

    // If the player already submitted, don't show the slider or submit button
    if (stage.get('wordList').length >= 10) {
      return this.renderSubmitted();
    }

    return (
      <div className="task-response">
        <form className="task-response-form" onSubmit={this.handleSubmit}>
          {this.renderInput()}

          <button type="submit">Add Word</button>
        </form>
      </div>
    );
  }
}

