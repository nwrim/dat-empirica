import React from "react";

export default class TaskStimulus extends React.Component {   
  showList = list => {
  const { round, stage, player } = this.props;
    return (
    <ol>
      {list.map(function(item) {
        return <li key={item}> {item} <button type="button" 
        onClick={(item) => this.removeWord(item)}>
        {/*onClick={() => stage.set('wordList', stage.get('wordList').filter(l => l !== item))}>*/}
        Remove
        </button> </li>;
      })}
    </ol>
    )
  }
  
  removeWord = item => {
    const {stage, player} = this.props;
    
    stage.set('wordList', stage.get('wordList').filter(l => l !== item));
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
