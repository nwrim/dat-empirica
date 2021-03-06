import Empirica from "meteor/empirica:core";
import { render } from "react-dom";
import GroupExitSurvey from "./exit/GroupExitSurvey.jsx";
import IndividualExitSurvey from "./exit/IndividualExitSurvey.jsx";
import Thanks from "./exit/Thanks";
import Sorry from "./exit/Sorry";
import About from "./game/About";
import Round from "./game/Round";
import Consent from "./intro/Consent";
import Overview from "./intro/Overview";
import Rules from "./intro/Rules";
import InterfaceOne from "./intro/InterfaceOne";
import InterfaceTwo from "./intro/InterfaceTwo";
import InterfaceThree from "./intro/InterfaceThree";
import InterfaceSocial from "./intro/InterfaceSocial";
import Grading from "./intro/Grading";
import IndividualQuiz from "./intro/IndividualQuiz";
import GroupQuiz from "./intro/GroupQuiz";
import NewPlayer from "./intro/NewPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
// Set the About Component you want to use for the About dialog (optional).
Empirica.about(About);

// Set the Consent Component you want to present players (optional).
Empirica.consent(Consent);

// Set the component for getting the player id (optional)
Empirica.newPlayer(NewPlayer);

// Introduction pages to show before they play the game (optional).
// At this point they have been assigned a treatment. You can return
// different instruction steps depending on the assigned treatment.
Empirica.introSteps((game, treatment) => {
  const steps = [Overview, Rules, InterfaceOne, InterfaceTwo, Grading];
  if (treatment.playerCount > 1) {
    steps.push(InterfaceSocial);
  }
  steps.push(InterfaceThree)
  if (game.treatment.playerCount > 1) {
    steps.push(GroupQuiz);
  } else {
    steps.push(IndividualQuiz);
  }
  return steps;
});

Empirica.breadcrumb(() => null);

// The Round component containing the game UI logic.
// This is where you will be doing the most development.
// See client/game/Round.jsx to learn more.
Empirica.round(Round);

// End of Game pages. These may vary depending on player or game information.
// For example we can show the score of the user, or we can show them a
// different message if they actually could not participate the game (timed
// out), etc.
// The last step will be the last page shown to user and will be shown to the
// user if they come back to the website.
// If you don't return anything, or do not define this function, a default
// exit screen will be shown.
Empirica.exitSteps((game, player) => {
  if (player.exitStatus !== "finished") {
    return [Sorry];
  }
  if (game.players.length > 1) {
    return [GroupExitSurvey, Thanks];
  } else {
    return [IndividualExitSurvey, Thanks];
  }
});

// Start the app render tree.
// NB: This must be called after any other Empirica calls (Empirica.round(),
// Empirica.introSteps(), ...).
// It is required and usually does not need changing.
Meteor.startup(() => {
  render(Empirica.routes(), document.getElementById("app"));
});
