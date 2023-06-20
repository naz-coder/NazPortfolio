import React from 'react';
import {AboutMeStyle} from "./AboutMeStyle";
import { Link } from 'react-router-dom';

const AboutMe = () => {
   const contactScrollHandler = () => {
      const sectionElement = document.getElementById("contact");
      sectionElement.scrollIntoView({behavior: "smooth"});
    };

  return (
    <AboutMeStyle>
        <div id='aboutMe'>
            <div className="skills">
                <div className='skill-level-code'>
                <h3 className='about-title'>Skill</h3>
                 <div>
                    <label for="file">HTML 95%</label>
                    <progress id="file" value="95" max="100">95%</progress>
                 </div>
                 <div>
                    <label for="file">CSS 90%</label>
                    <progress id="file" value="90" max="100">90%</progress>
                 </div>
                 <div>
                    <label for="file">JavaScript 75%</label>
                    <progress id="file" value="75" max="100">75%</progress>
                 </div>
                 <div>
                    <label for="file">ReactJS 65%</label>
                    <progress id="file" value="65" max="100">65%</progress>
                 </div>
                 <div>
                    <label for="file">NextJS 60%</label>
                    <progress id="file" value="60" max="100">60%</progress>
                 </div>
                 <div>
                    <label for="file">Ruby 40%</label>
                    <progress id="file" value="40" max="100">40%</progress>
                 </div>
                 <div>
                    <label for="file">C Language 40%</label>
                    <progress id="file" value="40" max="100">40%</progress>
                 </div>
                 <div>
                    <label for="file">ExpressJS 40%</label>
                    <progress id="file" value="40" max="100">40%</progress>
                 </div>
                 <div>
                    <label for="file">WordPress 70%</label>
                    <progress id="file" value="70" max="100">70%</progress>
                 </div>
                 <div>
                    <label for="file">Shopify 85%</label>
                    <progress id="file" value="85" max="100">85%</progress>
                 </div>
                 <div>
                    <label for="file">Wix 80%</label>
                    <progress id="file" value="80" max="100">80%</progress>
                 </div>
                 <div>
                    <label for="file">Bootstrap 96%</label>
                    <progress id="file" value="96" max="100">96%</progress>
                 </div>
                </div>
            <div className="about">
                <h3 className='about-subtitle'>About me</h3>
                <p className='about-description-a'>
                I have a flair for creating good designs, understanding and implementing proper user experience. Over the years I have
                 been able to sharpen my frontend skills by staying up to date with current frontend technologies which means I am always ready
                 to learn and apply new concepts to new or existing projects. Also, I try as much as possible to listen to users' feedback and 
                 reviews to know what area I need to improve on. I know that working on my front-end skills is something really 
                important to me, and it's really something that I'm looking forward to in my next role.
                </p>
                <p className='about-description-b'>
                Having working experience as a Software Developer and understanding the processes, I believe I have the ability to support everyone's 
                effort within the development team, and since I already understand frontend flows and processes, it is far easier to work and 
                collaborate with the frontend team on finding the best and suitable approach to get jobs done and also reducing the time 
                needed to understand some concepts. Also, I am a self-motivated person who is willing to go above and beyond on any project, 
                and willing to learn valuable skills needed in the team on my own time while proffering solutions and bringing ideas to resolve issues, 
                as well as ensuring that deadlines are adhered to and that client's satisfaction is put forward.    
                </p>
                <p className='about-description-c'>
                In the next 5 to 10 years, I want to have been able to build a tech product that has impacted a great number of people. Also, I have 
                the zeal to mentor newbies in tech, so, I see myself trying out managerial roles and building a community of vibrant amazing techies 
                producing tech products that impact the world in diverse ways. That's my top career goal!
                </p>
                <div className='hire-me'>
                  <p className='action-text'>Let's work together.</p>
                  <button onClick={contactScrollHandler} className='hire-me'><Link to='/' className='menu-link'>Hire me</Link></button>
                </div>
            </div>
            </div>
        </div>
    </AboutMeStyle>
  )
}

export default AboutMe