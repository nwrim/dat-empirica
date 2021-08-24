import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

export default class TaskStimulus extends React.Component {

  removeWord = item => {
    const { stage, player } = this.props

    stage.set('wordList', stage.get('wordList').filter(l => l !== item))
    stage.append('log', {
      verb: 'removedWord',
      subjectId: player._id,
      object: item,
      at: moment(TimeSync.serverTime(null, 1000)),
    });
  }

  render() {
    const { round, stage, player } = this.props
    const list = stage.get('wordList')
    return (
      <div className="list">
        <h2>Current Word List:</h2>
        <ol>
          {list.map((item, i) => {
            return (
              <li key={i}>
                {item}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
