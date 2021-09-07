import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

export default class TaskStimulus extends React.Component {
  showList = list => {
    const { game, player, round, stage } = this.props;  
    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    const first10list = list.slice(0,10);
    const morelist = list.slice(10);
    if (otherPlayers.length === 0) {
      return (
      <div className="first10list">
      
        <h2>Current Word List:</h2>
        <h3>These 10 words will be graded:</h3>
      <ol>
        {first10list.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>
              </li>
            )
          }
        
        )
        }
      </ol>

        <h3>These words will NOT be graded - remove words from above to move words up:</h3>      
      <ol start="11">
        {morelist.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>
              </li>
            )
          }
        
        )
        }
      </ol>
      </div>
    )
    }
    return (
      <div className="first10list">
      
        <h2>Current Word List:</h2>
        <h3>These words will be graded:</h3>
      <ol>
        {first10list.map((item, i) => {
            return (
              <li key={i}>
                {item.word} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]{" "}
                <button onClick={() => {this.removeWord(item)}}>Remove</button>
              </li>
            )
          }
        
        )
        }
      </ol>
              <h3>These words will NOT be graded - remove words from above to move words up:</h3>      
      <ol start="11">
        {morelist.map((item, i) => {
            return (
              <li key={i}>
                {item.word} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]{" "}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>
              </li>
            )
          }
        
        )
        }
      </ol>
      </div>
    )
  }

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
        {this.showList(list)}
      </div>
    )
  }
}
