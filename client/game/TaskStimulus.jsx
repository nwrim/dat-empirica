import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

class SandboxStimulus extends React.Component {
  showList = list => {
    const { game, player, stage } = this.props;  
    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    const finalWordList = stage.get('finalWordList');
    const disabled = finalWordList.length >= 10;

    if (otherPlayers.length === 0) {
      return (
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>{" "}
                <button onClick={() => { this.moveWordToFinal(item) }} disabled={disabled}>move to final</button>
              </li>
              )
            }
          )
        }
      </ol>
      )
    }
    return (
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]{" "}
                <button onClick={() => {this.removeWord(item)}}>Remove</button>{" "}
                <button onClick={() => { this.moveWordToFinal(item) }}>move to final</button>
              </li>
              )
            }
          )
        }
      </ol>
    )
  }

  removeWord = item => {
    const { stage, player } = this.props
    stage.set('sandboxWordList', stage.get('sandboxWordList').filter(l => l !== item))
    stage.append('log', {
      verb: 'removedWord',
      subjectId: player._id,
      object: item,
      at: moment(TimeSync.serverTime(null, 1000)),
    });
  }

  moveWordToFinal = item => {
    const { stage, player } = this.props
    stage.set('finalWordList', stage.get('finalWordList').concat(item))
    stage.set('sandboxWordList', stage.get('sandboxWordList').filter(l => l !== item))
    stage.append('log', {
      verb: 'movedWordToFinal',
      subjectId: player._id,
      object: item,
      at: moment(TimeSync.serverTime(null, 1000)),
    });
  }

  render() {
    const { stage } = this.props;
    return (
      <div className="sandboxWordList">
        <h2>Sandbox</h2>
        <h3>These words will NOT be graded</h3>      
        {this.showList(stage.get('sandboxWordList'))}
      </div>

    )
  }
}

class FinalWordStimulus extends React.Component {
  showList = list => {
    const { game, player } = this.props;  
    const otherPlayers = _.reject(game.players, p => p._id === player._id);

    if (otherPlayers.length === 0) {
      return (
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <button onClick={() => { this.removeWord(item) }}>Remove</button>{" "}
                <button onClick={() => { this.moveWordToSandbox(item) }}>move to sandbox</button>
              </li>
              )
            }
          )
        }
      </ol>
      )
    }
    return (
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]{" "}
                <button onClick={() => {this.removeWord(item)}}>Remove</button>{" "}
                <button onClick={() => { this.moveWordToSandbox(item) }}>move to sandbox</button>
              </li>
              )
            }
          )
        }
      </ol>
    )
  }
  
  moveWordToSandbox = item => {
    const { stage, player } = this.props
    stage.set('sandboxWordList', stage.get('sandboxWordList').concat(item))
    stage.set('finalWordList', stage.get('finalWordList').filter(l => l !== item))
    stage.append('log', {
      verb: 'movedWordToSandbox',
      subjectId: player._id,
      object: item,
      at: moment(TimeSync.serverTime(null, 1000)),
    });
  }

  render() {
    const { stage } = this.props
    const finalWordList = stage.get('finalWordList');
    const len = finalWordList.length;
    
    return (
    <div className="finalWordlist">
      <h2>Current Final List:</h2>
      <h3>These words will be graded.</h3>
      { len >= 10 && <h3>The list is full! Remove a word to add something else.</h3>}
      { !(len >= 10) && <h3>You can add {10 - len} more word(s)</h3>}
      {this.showList(finalWordList)}
    </div>
    )
  }
}

export { SandboxStimulus, FinalWordStimulus };
