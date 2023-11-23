import React from "react";
import { ResumeStyle } from "./ResumeStyle";
import { Link } from "react-router-dom";

const ResumeComponent = () => {
    const contactScrollHandler = () => {
        const sectionElement = document.getElementById("contact");
        sectionElement.scrollIntoView({behavior: "smooth"});
      };

  return (
    <ResumeStyle>
      <div className="resume-container" id="resume">
        <div>
          <h3 className="resume-title">Resume</h3>
        </div>
        <div className="resume-content-container">
        <div className="summary-container">
        <h3 className="resume-subtitle">Summary</h3>
          <div className="summary">
            <p className="summary-name">Favour Chinaza Anajemba-Agada</p>
            <p className="summary-desc">
              Experienced developer with 3+ years and skilled in HTML, CSS,
              JavaScript, C, Ruby, Java, ExpressJS, ReactJS, NextJS, NextTS, SQL, SQlite, Apollo
              GraphQL, Styled Component, SASS, Prime React, React Bootstrap, 
              Tailwind CSS, Material UI, Firebase, AWS, and CMS (Shopify, Wix, and WordPress). Strong soft skills
              in teamwork, attention to detail, and problem-solving. Proven
              track record of meeting deadlines and satisfying clients.
              Impressive portfolio with projects including ecommerce, traffic
              update app, games, biography website, fintech loan app, and
              residential apartment search platform. I am familiar with tools 
              such as Git, Tirello, Jira, Notion, payment gateways(Flutterwave and Paystack), messaging platforms(EmailJS, Nodemailer, and Sendgrid) amongst many others.
            </p>
            <ul className="summary-details">
              <li>nazanajemba@gmail.com</li>
              <li>+447719130342</li>
              {/* <li>+234 8167-265-619</li> */}
            </ul>
          </div>
          <div className="education">
            <h3 className="edu-subtitle">Education</h3>
            {/* <div className="edu-unn">
              <p className="edu-name">MSc Advanced Computer Science</p>
              <p className="edu-duration">2023-2024</p>
              <p className="edu-location uk-location">
                Manchester Metropolitan University, Manchester - United Kingdom
              </p>
            </div> */}
            <div className="edu-unn">
              <p className="edu-name">BSc Zoology and Environmental Biology</p>
              <p className="edu-duration">2014-2018</p>
              <p className="edu-location unn-location">
                University of Nigeria, Nsukka - Enugu State
              </p>
            </div>
            <div className="edu-femcode">
              <p className="edu-name">Frontend Web Developer</p>
              <p className="edu-duration">2019-2020</p>
              <p className="edu-location">FemCode Africa</p>
              <p className="edu-desc">
                I have built and developed various projects while also serving
                as a guardian to fellow students on campus. Throughout my
                journey, I have mastered a range of tech tools, including
                Javascript, ReactJS, Ruby on Rails, and C. By attending daily
                standup meetings, I ensure I am on track with my progress.
                Additionally, I actively participate in weekly collaboration
                sessions focused on data structures and algorithms problem
                solving. Working collaboratively with a team, we strive to
                create exceptional solutions.
              </p>
            </div>
            <div className="edu-qwasar">
              <p className="edu-name">
                FullStack Developer (Software Engineering)
              </p>
              <p className="edu-duration">2022-2022</p>
              <p className="edu-location">Qwasar Silicon Valley</p>
              <p className="edu-desc">
                An enthusiatic and equipped Front End Web Developer intern with
                FemCode Africa 1.0, worked with Bootstrap, JavaScript, CSS,
                HTML5, jQuery. Through my internship, I gained hands-on
                experience in developing responsive websites and implementing
                interactive features. Committed to continuous learning and
                staying up-to-date, I have honed my skills and maintained a
                strong attention to detail. Excited to contribute my creativity
                and deliver impactful web solutions.
              </p>
            </div>
          </div>
          
        </div>
        {/* Professional Experience */}
        <div className="experience-container">
          <div className="education">
            <h3 className="exp-subtitle">Professional Experience</h3>
            <div className="exp-ogtl">
              <p className="exp-name">Lead Tutor - Science and Engineering</p>
              <p className="exp-duration">Nov. 2023 - Present</p>
              <p className="exp-location">
                National Saturday Club, Manchester Metropolitan University - UK
              </p>
              <ul className="exp-activities">
              <li>Collaborating with existing university resources to integrate my program into a wider network of outreach and engagement opportunities for the club members.</li>
              <li>Taking charge of monitoring and evaluating the club’s performance, utilizing provided resources.</li>
              <li>Providing mentorship and guidance to Club co-facilitators, recruited through RISE, to assist in program delivery and empower them to conduct their own sessions with my support.</li>
              <li>Participating in team meetings, trainings, brainstorming sessions, and knowledge sharing activities.</li>
              <li>Leading the club group on a trip to London for an annual showcase at Somerset House. This event serves as a platform to celebrate and showcase everyone’s work in a professional environment.</li>
            </ul>
            </div>
            <div className="exp-ogtl">
              <p className="exp-name">Software Developer</p>
              <p className="exp-duration">Apr. 2023 - Sep. 2023</p>
              <p className="exp-location">
                Outsource Global Technologies Ltd, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
              <li>Collaborating with senior developers and team members to understand project requirements and specifications.</li>
              <li>Writing clean, efficient, and maintainable code using appropriate programming languages and frameworks. </li>
              <li>ontributed to the Frontend development of the IDEC (Import Duty Exemption Certificate) platform for the Federal Govt of Nigeria.</li>
              <li>Debugging and troubleshooting software issues, identifying and implementing solutions.</li>
              <li>Keeping up-to-date with emerging technologies and industry trends.</li>
              <li>Participating in team meetings, brainstorming sessions, and knowledge sharing activities.</li>
            </ul>
            </div>
            <div className="exp-milantiawebs">
              <p className="exp-name">Freelance Frontend Developer</p>
              <p className="exp-duration">Dec. 2022 - Present</p>
              <p className="exp-location">
                Milantiawebs, London - UK
              </p>
              <ul className="exp-activities">
                <li>Develop and customize Shopify themes to match the client's brand and design requirements. This involves working with HTML, CSS, JavaScript, and Shopify's Liquid templating language.</li>
                <li>Conduct thorough testing of the website or application to identify and resolve any bugs, inconsistencies, or performance issues.</li>
                <li>Understand the client's requirements, discuss project scope, and gather necessary information to ensure clarity and alignment.</li>
                <li>Collaborate effectively with designers, and other stakeholders to ensure a cohesive and successful implementation of the Shopify store.</li>
                <li>Set up and configure Shopify stores settings.</li>
              </ul>
            </div>
            <div className="exp-deep">
              <p className="exp-name">Frontend Developer</p>
              <p className="exp-duration">Sep. 2022 - Dec. 2022</p>
              <p className="exp-location">
                Deep Technologies Ltd, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
                <li>
                Developed a robust FinTech loan and ecommerce application, leveraging frontend technologies to create a seamless user experience and efficient functionality.
                </li>
                <li>Delivered engaging presentations to clients, effectively showcasing project features, benefits, and value proposition, resulting in successful project acquisitions.</li>
                <li>Skillfully refactored a complex code-base developed by another programmer, improving code quality, readability, and maintainability while optimizing performance.</li>
                <li>Actively participated in code reviews and provided constructive feedback to fellow developers, improving overall code quality and fostering a culture of continuous learning and improvement within the development team.</li>
                <li>Stayed abreast of the latest frontend technologies and industry trends, proactively recommending and implementing innovative solutions to enhance the company's web development processes and maintain a competitive edge.</li>
            </ul>
            </div>
            <div className="exp-iykemedia">
              <p className="exp-name">Freelance Frontend Developer || Content Writer</p>
              <p className="exp-duration">May 2020 - Jul. 2022</p>
              <p className="exp-location">
              Iykemedia Branding Concepts, Anambra - Nigeria
              </p>
              <ul className="exp-activities">
                <li>Evaluate the client's needs and recommend the most suitable CMS platform based on factors such as scalability, flexibility, ease of use, and specific project requirements.</li>
                <li>Assist clients in organizing and managing their website content within the CMS. This includes creating pages, adding images and videos, and optimizing content for search engines.</li>
                <li>Track and analyze social media metrics, such as post engagement, click-through rates, and follower growth, providing insights to optimize future content strategies and improve performance.</li>
                <li>Extend the functionality of the website by integrating and customizing plugins or widgets available within the CMS. This may include contact forms, galleries, social media feeds, e-commerce functionality, and more.</li>
                <li>Write engaging and compelling social media posts that align with the brand's voice and tone, ensuring they resonate with the target audience.</li>
            </ul>
            </div>
            <div className="exp-nts">
              <p className="exp-name">IT Support || Content Writer - Contract</p>
              <p className="exp-duration">Nov. 2019 - Apr. 2020</p>
              <p className="exp-location">
              Naija Talent Search, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
                <li>Implemented proactive measures and preventive maintenance strategies to minimize system downtime and user disruptions. This included regularly monitoring and addressing potential issues before they escalated, resulting in improved system stability and reduced downtime.</li>
                <li>Developed and delivered user training programs and documentation to enhance end-user knowledge and self-sufficiency. </li>
                <li>Create or source visually appealing graphics, images, or videos to accompany social media posts, enhancing their impact and engagement potential.</li>
                <li>Conduct research and analysis to identify relevant hashtags that can enhance the reach and discoverability of social media posts, ensuring optimal visibility within target communities.</li>
                <li>Serve as the first point of contact for users seeking technical assistance. Receive and log support requests, prioritize issues based on urgency and impact, and track progress to ensure timely resolution.</li>
            </ul>
            </div>
            <div className="exp-dfc">
              <p className="exp-name">Computer Operator || Instructor</p>
              <p className="exp-duration">Jan. 2009 - Aug. 2012</p>
              <p className="exp-location">
                Divine Favour Computer Institute, Sokoto - Nigeria
              </p>
              <ul className="exp-activities">   
                <li>Through my expertise and guidance, I enhanced participants' proficiency in using Microsoft Word, Excel, PowerPoint, and other Office applications, enabling them to create professional documents, analyze data effectively, and deliver impactful presentations.</li>
                <li>By implementing macros, templates, and advanced functions, I improved efficiency, reduced manual effort, and enhanced productivity for both myself and the users I supported.</li>
                <li>Demonstrated strong problem-solving skills and provided prompt technical support to users encountering Microsoft Office-related issues.</li>
                <li>My training efforts resulted in improved proficiency, increased confidence, and enhanced productivity among trainees.</li>
                <li>Conducted a series of Microsoft PowerPoint workshops for employees, equipping them with advanced presentation design techniques and effective communication skills. </li>
            </ul>
            </div>
          </div>
        </div>
        </div>
        <div className='hire-me-btn-container'>
                  <div className='hire-me'>
                  <p className='action-text'>Let's work together.</p>
                  <button onClick={contactScrollHandler} className='hire-me'><Link to='/' className='menu-link'>Hire me</Link></button>
                  </div>
                </div>
      </div>
    </ResumeStyle>
  );
};

export default ResumeComponent;
