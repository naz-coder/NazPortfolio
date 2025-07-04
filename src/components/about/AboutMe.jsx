import React from 'react';
import {AboutMeStyle} from "./AboutMeStyle";
import { Link } from 'react-router-dom';
import skillsData from "../../projects.json";


const AboutMe = () => {
  return (
    <AboutMeStyle>
        <div id='aboutMe'>
            <div className="skills">
               <div className="about">
                <h3 className='about-subtitle'><span className="span_item">About</span> me</h3>
                <p className='about-description-a'>
                  A Frontend Developer with a keen eye for design and user experience, 
                  I blend creativity with technical expertise to build responsive, user-friendly web 
                  applications. With solid skills in modern frontend technologies and a drive to stay 
                  updated, I transform ideas into intuitive digital experiences. I’m passionate about 
                  solving real problems through clean code and thoughtful design and I’m driven by a 
                  vision to build innovative products that inspire, engage, and make a difference. In
                  my spare time, I love to read, travel and stay inspired.</p>
                <div className='hire-me'>
                  <p className='action-text'>Let's work together.</p>
                  <Link to='/contact' className='menu-link'><button className='hire-me'>Hire me</button></Link>
                </div>
            </div>
                <div className='skill-level-code'>
                <h3 className='about-title'><span className='span_item'>Skills</span> and tools</h3>
               <div className='tool_icon_outter'>
                  <div className="category_tools">
                     <h3 className="category_title">Front End</h3>
                     <div className="individual_tools">
                        {skillsData.frontendTools.map((data) => {
                        return(
                           <div className='individual_tools' key={data.id}>
                              <div>
                                 <img src={data.image} alt={data.altName}/>
                                 <h2 className='tool_title'>{data.title}</h2>
                              </div>
                           </div>
                        )
                  })}
                     </div>
                  </div>
                  <div className="category_tools">
                     <h3 className="category_title category_title_style">Content Management System (CMS)</h3>
                     <div className="individual_tools_small">
                        {skillsData.CMSTools.map((data) => {
                        return(
                           <div className='individual_tools' key={data.id}>
                              <div>
                                 <img src={data.image} alt={data.altName}/>
                                 <h2 className='tool_title'>{data.title}</h2>
                              </div>
                           </div>
                        )
                  })}
                     </div>
                  </div>
                  <div className="category_tools">
                     <h3 className="category_title category_title_style">Back End and Database</h3>
                     <div className="individual_tools_small">
                        {skillsData.backendTools.map((data) => {
                        return(
                           <div className='individual_tools' key={data.id}>
                              <div>
                                 <img src={data.image} alt={data.altName}/>
                                 <h2 className='tool_title'>{data.title}</h2>
                              </div>
                           </div>
                        )
                  })}
                     </div>
                  </div>
                  <div className="category_tools">
                     <h3 className="category_title category_title_style">Version Control and More</h3>
                     <div className="individual_tools">
                        {skillsData.gitAndOtherTools.map((data) => {
                        return(
                           <div className='individual_tools' key={data.id}>
                              <div>
                                 <img src={data.image} alt={data.altName}/>
                                 <h2 className='tool_title'>{data.title}</h2>
                              </div>
                           </div>
                        )
                  })}
                     </div>
                  </div>
                </div>                
               </div>
            
            </div>
        </div>
    </AboutMeStyle>
  )
}

export default AboutMe