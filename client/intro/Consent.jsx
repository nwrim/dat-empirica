import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent bp3-ui-text">
          <h2 className="bp3-heading"> The University of Chicago, Department of Sociology </h2>
          <p>
            <strong>Study Number</strong>: IRB20-1407 
	   </p>
	   <p>
	     <strong>Study Title</strong>: Optimizing Team Composition in Group Tasks
	     </p>
	     <p>
            <strong>Researcher(s)</strong>: Dr. James A. Evans
             </p>
             <p>
             <strong>Collaborating Institutions</strong>: Massachusetts Institute of Technology, Sloan School of Management
          </p>
          <h5 className="bp3-heading">Description</h5>
          <p>
            We are researchers at the University of Chicago doing a research study about team composition and team performance. For this study, you will be asked to do several psychological tasks as well as answer surveys/questionnaires. The study is divided into two parts, and this is part 2 of the study. Participation should take about 5-20 minutes. Your participation is voluntary.
          </p>
          <h5 className="bp3-heading">Incentives</h5>
          <p>For participating in part 2 of the study, you will be compensated base pay of the amount mentioned in the recruitment and can obtain a bonus of up to the amount mentioned in the recruitment deposited to your payment account. MTurk does not allow for prorated compensation. In the event of an incomplete HIT, you must contact the research team and compensation will be determined based on what was completed and at the researchers' discretion.</p>
	   <p>
	   <strong>PLEASE NOTE</strong>: This study contains attention checks to make sure that participants are finishing the tasks honestly and completely. As long as you read the instructions and complete the tasks, your HIT will be approved. If you fail these checks, your HIT will be rejected.
	   </p>
          <h5 className="bp3-heading">Risks and Benefits</h5>
          <p>
            Your participation in this study does not involve any risk to you beyond that of everyday life. Taking part in this research study may not benefit you personally, but we may learn new things that could broaden our understanding of team composition and team performance.
          </p>

          <h5 className="bp3-heading">Confidentiality</h5>
          <p>
          <ul>
          <li>Your Mechanical Turk Worker ID and unique ID assigned to you in Qualtrics (the software you used to collect your survey answers) will be linked to your research data. Only coded data will be analyzed. All data collected will be kept in password-protected computers or stored in secure servers only accessible by the study investigators.</li>
          <li>If you decide to withdraw from this study, any data already collected will be destroyed.</li>
          <li>Your Mechanical Turk Worker ID will be used to distribute payment to you but will not be stored with the research data we collect from you. Please be aware that your MTurk Worker ID can potentially be linked to information about you on your Amazon public profile page, depending on the settings you have for your Amazon profile. We will not be accessing any personally identifying information about you that you may have put on your Amazon public profile page.</li>
          <li>Note that Amazon Mechanical Turk and Qualtrics have specific privacy policies of their own. You should be aware that these web services may be able to link your responses to your ID in ways that are not bound by this consent form and the data confidentiality procedures used in this study, and if you have concerns you should consult these services directly.</li>
          <li>Identifiable data will never be shared outside the research team.</li>
          <li>De-identified information from this study may be used for future research studies or shared with other researchers for future research without your additional informed consent.</li>
          </ul>
          </p>
          <h5 className="bp3-heading">Contacts & Questions</h5>
          <p>
            If you have questions or concerns about the study, you can contact the researchers at Dr. James A. Evans, knowlab.crowdsource@gmail.com, 773-702-1891.
          </p>
	   <p>
	   If you have any questions about your rights as a participant in this research, feel you have been harmed, or wish to discuss other study-related concerns with someone who is not part of the research team, you can contact the University of Chicago Social & Behavioral Sciences Institutional Review Board (IRB) Office by phone at (773) 702-2915, or by email at sbs-irb@uchicago.edu. 
	   </p>
          <h5 className="bp3-heading">Consent</h5>
          <p>
            Participation is voluntary. Refusal to participate or withdrawing from the research will involve no penalty or loss of benefits to which you might otherwise be entitled. 
          </p>

          <p>
            By clicking the button below, you confirm that you have read the consent form, are at least 18 years old, and agree to participate in the research. Please print or save a copy of this page for your records.
          </p>

          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }
}
