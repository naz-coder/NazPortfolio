import React, { useState } from "react";
import academyHeroImg from "../../assets/academyHeroImg.png";
import { AcademyHeroStyle } from "./AcademyHeroStyle";
import Enroll from "../enrollmentForm/Enroll";


const AcademyHero = () => {
  const [contactForm, setContactForm] = useState(false);

  const academyFormHandler = (e) => {
    e.preventDefault();
    setContactForm(true);
  };

  return (
    <AcademyHeroStyle>
      <div className="academy-hero">
        <div className="academy-hero-content">
          <h2 className="section-name">
            Learning with us keeps you{" "}
            <span className="section-name-span">Moving forward.</span>
          </h2>
          <h3 className="section-title">Our Unique Advantages</h3>
          <p className="section-description">
            What sets us apart is our focus on practical application, giving you
            the chance to develop real-life projects that enhance your skills
            and build your portfolio as a web developer. Embark on your tech
            career journey with us today, regardless of your experience level.
            At CodeSpac, we welcome novices and provide comprehensive training
            to help you thrive. <br></br>
            <br></br>Certification awaits you upon completing the program,
            showcasing your newfound expertise. Contact us now and take the
            first step towards a rewarding tech career.
          </p>
          <p className="section-description">
            At CodeSpac, we take pride in our personalized approach to student
            interaction, recognizing the uniqueness of each individual. Brace
            yourself for an immersive educational journey that blurs the line
            between virtual and reality, making every moment count at CodeSpac.
          </p>
          <div className="enroll" onClick={academyFormHandler}>
            <a className="enroll-here">Join us</a>
          </div>
        </div>
        <div className="academy-hero-img">
          <img src={academyHeroImg} alt="Codespac Hero Image"/>
        </div>
      </div>
      {contactForm && <Enroll />}
    </AcademyHeroStyle>
  );
};

export default AcademyHero;
