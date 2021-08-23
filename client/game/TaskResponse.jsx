import React from "react";

export default class TaskResponse extends React.Component {
  handleChange = event => {
    const value = event.currentTarget.value;
    const { player } = this.props;
    // only allow value to be set if it is character
    // this lets participants input random character as the first letter - not sure why
    // code modified from https://stackoverflow.com/questions/52846347/reactjs-cannot-restrict-user-input-to-letters-only
    if (value === "" || /^[A-Za-z]+$/.test(value))
	// this should be changed to appending to the list (figure it out after making the redering function)
	player.round.set("value", value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  renderInput() {
    const { player } = this.props;
    const value = player.round.get("value");
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
    const { player } = this.props;

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
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

