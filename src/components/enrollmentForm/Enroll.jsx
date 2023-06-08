import React from "react";
import { EnrollStyle } from "./EnrollStyle";
import ContactForm from "../atoms/form/ContactForm";
import joinUs from "../../assets/joinUs.png";

const Enroll = () => {
  return (
    <EnrollStyle>
      <div className="contact-container" id="contact">
        <div className="section-title-codespac">
        {/* <h3 className="section-title"></h3> */}
        <p className="section-description">
        Revitalize your learning journey with a dynamic infusion of
            excitement, bidding farewell to the tiresome monotony of routine.
            Unlock the door to a world of engaging and immersive learning
            methods that will leave you captivated and inspired. Say goodbye to
            dullness and embrace the thrill of knowledge acquisition like never
            before!
        </p>
        </div>
        <div className="contact-outter">
          <div className="contact-details">
          <img src={joinUs} alt="join us" className="join-us-img"/>
          </div>
            <ContactForm/>
        </div>
      </div>
    </EnrollStyle>
  );
};

export default Enroll;

