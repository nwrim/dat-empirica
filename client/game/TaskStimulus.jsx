import React from "react";

const l = ['a', 'b', 'c'];
const ll = l.filter(l => l !== 'a');
    
export default class TaskStimulus extends React.Component { 
  // state = {list: ['a', 'b', 'c'], count: 0};
  // or use round instead? add round.set('list', []); in callback?
  //  onClick={() => stage.set('wordList', round.wordList.filter(l => l !== item))}
  
  showList = list => {
  const { round, stage, player } = this.props;
    return (
    <ol>
      {list.map(function(item) {
        return <li key={item}>{item} <button type="button" onClick={() => stage.set('wordList', stage.get('wordList').filter(l => l !== item))}>
        Remove
        </button> </li>;
      })}
    </ol>
    )
  }

 
  render() {
  const { round, stage, player } = this.props;
    return (
      <div className="list">
      <h2>Current Words:</h2>
      {this.showList(stage.get('wordList'))}
      </div>
    );
  }
}
