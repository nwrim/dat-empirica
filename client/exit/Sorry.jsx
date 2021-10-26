import React from "react";

import {Centered} from "meteor/empirica:core";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  render() {
    const { player, hasNext, onSubmit } = this.props;
    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "All games you are eligible for have filled up too fast...";
        break;
      case "gameLobbyTimedOut":
        msg = "There were NOT enough players for the game to start..";
        break;
      // case "playerLobbyTimedOut":
      //   msg = "???";
      //   break;
      case "playerEndedLobbyWait":
        msg =
          "You decided to stop waiting, we are sorry it was too long a wait.";
        break;
      default:
        msg = "Unfortunately the Game was cancelled...";
        break;
    }

    return (
      <Centered>
        <div className="score">
          <h1>Sorry!</h1>

          <p>Sorry, you were not able to play today! {msg}</p>

          {player.exitStatus === "gameLobbyTimedOut" ? (
            <p>
              Please email us the code <em>{player._id}_Timeout</em> and your MTurk/Prolific ID in order to
              receive the base payment for your time today.
            </p>
          ) : null}

          {player.exitStatus === "gameFull" ? (
            <p>
              Please email us the code <em>{player._id}_GameFull</em> and your MTurk/Prolific ID in order to
              receive the $0.5 bonus for showing up today.
            </p>
          ) : null}

          {/*) : (*/}
          {/*<p>*/}
          {/*Please click on: <strong>Reset current session</strong> from the*/}
          {/*top right side of the page (if it appears for you) to see if there*/}
          {/*are other games that you could join now. Note you will need to go*/}
          {/*over the instructions and quiz again (they might be different for*/}
          {/*different games). Otherwise, Please return the HIT now so our*/}
          {/*platform does not register your MTurk ID as someone who already*/}
          {/*participated.*/}
          {/*</p>*/}

          <p>
            <strong>Please come back for the next invited game.</strong>{" "}
            {/*We will send an email notification once the next  HIT is scheduled.*/}
          </p>

          {/*This is not really needed .. all of these people failed to start the game .. if we allow them to submit, then their data will be deleted, we don't want that*/}
          <p>
            {hasNext ? (
              <button
                className="btn btn-primary btn-lg"
                type="button"
                onClick={() => onSubmit()}
              >
                Done
              </button>
            ) : (
              ""
            )}
          </p>
        </div>
      </Centered>
    );
  }
}