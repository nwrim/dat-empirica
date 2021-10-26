import React from "react";

import {Centered} from "meteor/empirica:core";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  
  render() {
    const { player, game } = this.props;
    return (
      <Centered>
        <div className="game finished">
          <div className="pt-non-ideal-state">
            <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
              <span className="pt-icon pt-icon-thumbs-up" />
            </div>
            <h4 className="pt-non-ideal-state-title"><strong>Finished! Please let us know if you do not get paid in 24 hours. You will be paid via bonus to the first HIT.</strong>{" "}
            </h4>
            <h4>
            Please email us the following code and your MTurk/Prolific ID if you want us to double-check that you got paid. This is a precautionary step - we will be paying you even if you do not email us the code. You are free to not email us if you don't feel comfortable with it. We will not be connecting your email address to any of the data, and your email address will not be shared publicly.</h4>
            <hr />
            <h4 className="pt-non-ideal-state-title">
              Submission code: {player._id}
            </h4>
            <hr />
            <div className="pt-non-ideal-state-description">
              Thank you for participating!
            </div>
          </div>
        </div>
      </Centered>
    );
  }
}
