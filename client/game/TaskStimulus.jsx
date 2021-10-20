import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";
import { Button, Icon } from "@blueprintjs/core";

class SandboxStimulus extends React.Component {
  showList = list => {
    const { game, player, stage } = this.props;  
    const otherPlayers = _.reject(game.players, p => p._id === player._id);
    const finalWordList = stage.get('finalWordList');
    const disabled = finalWordList.length >= 10;

    if (otherPlayers.length === 0) {
      return (
      <ul>
        {list.map((item, i) => {
            return (
              <li key={i}>
                <Button icon="trash" onClick={() => { this.removeWord(item) }}/>{" "}
                <Button icon="arrow-right" onClick={() => { this.moveWordToFinal(item) }} disabled={disabled}/>{" "}
                {`${i+1}. ${item.word}`}
              </li>
              )
            }
          )
        }
      </ul>
      )
    }
    return (
      <ul>
        {list.map((item, i) => {
            return (
              <li key={i}>
                <Button icon="trash" onClick={() => { this.removeWord(item) }}/>{" "}
                <Button icon="arrow-right" onClick={() => { this.moveWordToFinal(item) }} disabled={disabled}/>{" "}
                {`${i+1}. ${item.word}`} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]                
              </li>
              )
            }
          )
        }
      </ul>
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
    if (stage.get('finalWordList').length >= 10) {
      console.log('overflow')
    }
  }

  render() {
    const { stage } = this.props;
    return (
	  <div className="sandboxWord">
	    <h2 className="fw-bold">Sandbox</h2>
	    <h5 className="text-secondary">These words will NOT be graded</h5>
	    <h4>
        <img src="/experiment/images/trash.svg" height="18px"/> : remove word,{" "}
	      <img src="/experiment/images/arrow-left.svg" height="18px"/>
	      <img src="/experiment/images/arrow-right.svg" height="18px"/> : move word
      </h4>
      <div className="sandboxWordList bp3-card">
        {this.showList(stage.get('sandboxWordList'))}
      </div>
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
      <ul>
        {list.map((item, i) => {
            return (
              <li key={i}>
                <Button icon="arrow-left" onClick={() => { this.moveWordToSandbox(item) }}/>{" "}
                {`${i+1}. ${item.word}`}
              </li>
              )
            }
          )
        }
      </ul>
      )
    }
    return (
      <ul>
        {list.map((item, i) => {
            return (
              <li key={i}>
                <Button icon="arrow-left" onClick={() => { this.moveWordToSandbox(item) }}/>{" "}
                {`${i+1}. ${item.word}`} [<font color={item.color}>{item.name === player.get("name") ? "You" : item.name}</font>]
              </li>
              )
            }
          )
        }
      </ul>
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
	    <div className="sandboxWord">
	      <h2 className="fw-bold">Final List</h2>
	      <h5 className="text-secondary">These words will be graded.</h5>
	      { len >= 10 && <h4 className="text-danger fw-bold">Move a word to add something else.</h4>}
	      { !(len >= 10) && <h4>You can add {10 - len} more word(s)</h4>}
	      <div className="sandboxWordList bp3-card">
		      {this.showList(finalWordList)}
	      </div>
	    </div>
    )
  }
}

export { SandboxStimulus, FinalWordStimulus };
