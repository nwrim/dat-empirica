import React from "react";
import { TimeSync } from "meteor/mizzao:timesync";
import moment from "moment";

export default class TaskStimulus extends React.Component {   

  removeWord = item => {
    const {stage, player} = this.props;
    
    stage.set('wordList', stage.get('wordList').filter(l => l !== item));
}


  showList = list => {
  const { round, stage, player } = this.props;
        //onClick={() => this.removeWord(item)}>
        //onClick={() => stage.set('wordList', stage.get('wordList').filter(l => l !== item))}>
    return (
    <ol>
      {list.map(function(item) {
        return <li key={item}> {item} <button type="button" 
        onClick={() => this.removeWord(item)}>

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
      <h2>Current Word List:</h2>
      {this.showList(stage.get('wordList'))}
      </div>
    );
  }
}
