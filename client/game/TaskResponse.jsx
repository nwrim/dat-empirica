import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

export default class TaskResponse extends React.Component {
  state = { inputValue: ''};

  handleChange = event => {
    const value = event.target.value;
    // only allow value to be set if it is character
    // this lets participants input random character as the first letter - not sure why
    // code modified from https://stackoverflow.com/questions/52846347/reactjs-cannot-restrict-user-input-to-letters-only
    if (value === "" || /^[A-Za-z]+$/.test(value))
	// this should be changed to appending to the list (figure it out after making the redering function)
	this.setState({inputValue: value});
  };

  handleSubmit = event => {
    const { stage, player } = this.props;
    const newVal = {
      name: player.get("name"),
      color: player.get("nameColor"),
      word: this.state.inputValue,
    };
    event.preventDefault();
    stage.set('sandboxWordList', stage.get('sandboxWordList').concat(newVal));
    stage.append('log', {
      verb: 'addedWord',
      subjectId: player._id,
      object: this.state.inputValue,
      at: moment(TimeSync.serverTime(null, 1000)),
    });
    this.setState({inputValue: ''});
  };

  renderInput() {
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

