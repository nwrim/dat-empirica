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
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <Button icon="trash" onClick={() => { this.removeWord(item) }}/>{" "}
                <Button icon="arrow-right" onClick={() => { this.moveWordToFinal(item) }} disabled={disabled}/>
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
                <Button icon="trash" onClick={() => { this.removeWord(item) }}/>{" "}
                <Button icon="arrow-right" onClick={() => { this.moveWordToFinal(item) }} disabled={disabled}/>              </li>
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
		  <div className="sandboxWord">
		    <h2 align="center">Sandbox</h2>
		    <h3 align="center">These words will NOT be graded</h3>
		    <h3 align="center"><img src="/experiment/images/trash.svg" height="18px"/> : remove word,{" "}
		    <img src="/experiment/images/arrow-left.svg" height="18px"/>
		    <img src="/experiment/images/arrow-right.svg" height="18px"/> : move word</h3>
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
      <ol>
        {list.map((item, i) => {
            return (
              <li key={i}>
                {item.word}{" "}
                <Button icon="arrow-left" onClick={() => { this.moveWordToSandbox(item) }}/>
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
                <Button icon="arrow-left" onClick={() => { this.moveWordToSandbox(item) }}/>
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
    <div className="finalWord">
		    <h2  align="center">Final List:</h2>
		    <h3 align="center">These words will be graded.</h3>
		    { len >= 10 && <h3 align="center">The list is full! Remove a word to add something else.</h3>}
		    { !(len >= 10) && <h3 align="center">You can add {10 - len} more word(s)</h3>}
		  <div className="finalWordList bp3-card">
		    {this.showList(finalWordList)}
		  </div>
		</div>
    )
  }
}

export { SandboxStimulus, FinalWordStimulus };
