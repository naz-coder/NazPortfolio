import React from "react";
import { ResumeStyle } from "./ResumeStyle";
import { Link } from "react-router-dom";
import ImpactOf5GTechnologyOnEnergyEfficiency from "../../assets/ImpactOf5GTechnologyOnEnergyEfficiency.pdf";

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
              JavaScript, C, Ruby, Java, MVC, RESTful APIs, Spring Boot, HTTP Webserver, JDBC, ExpressJS, ReactJS, NextJS, NextTS, SQL, SQlite, Apollo
              GraphQL, Styled Component, SASS, Prime React, React Bootstrap, 
              Tailwind CSS, Material UI, Firebase, AWS, and CMS (Shopify, Wix, and WordPress). 3D design using Tinkercad. Introducing young adults and children to Coding using Scratch software and Microbits. Strong soft skills
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
          {/* Education section */}
          <div className="education">
            <h3 className="edu-subtitle">Educational History</h3>
            <div className="edu-unn">
              <p className="edu-name">MSc Advanced Computer Science</p>
              <p className="edu-duration">2023-2024</p>
              <p className="edu-location uk-location">
                Manchester Metropolitan University, Manchester - United Kingdom
              </p>
            </div>
            <div className="edu-unn">
              <p className="edu-name">BSc Zoology and Environmental Biology</p>
              <p className="edu-duration">2014-2018</p>
              <p className="edu-location unn-location">
                University of Nigeria, Nsukka - Enugu State
              </p>
            </div>
            <div className="edu-qwasar">
              <p className="edu-name">
                FullStack Developer (Software Engineering)
              </p>
              <p className="edu-duration">2022-2022</p>
              <p className="edu-location">Qwasar Silicon Valley</p>
              {/* <p className="edu-desc">
              I have built and developed various projects while also serving
                as a guardian to fellow students on campus. Throughout my
                journey, I have mastered a range of tech tools, including
                Javascript, ReactJS, Ruby on Rails, and C. By attending daily
                standup meetings, I ensure I am on track with my progress.
                Additionally, I actively participate in weekly collaboration
                sessions focused on data structures and algorithms problem
                solving. Working collaboratively with a team, we strive to
                create exceptional solutions.
              </p> */}
            </div>
            <div className="edu-femcode">
              <p className="edu-name">Frontend Web Developer (Software Engineering)</p>
              <p className="edu-duration">2019-2020</p>
              <p className="edu-location">FemCode Africa</p>
              {/* <p className="edu-desc">
                An enthusiatic and equipped Front End Web Developer intern with
                FemCode Africa 1.0, worked with Bootstrap, JavaScript, CSS,
                HTML5, jQuery. Through my internship, I gained hands-on
                experience in developing responsive websites and implementing
                interactive features. Committed to continuous learning and
                staying up-to-date, I have honed my skills and maintained a
                strong attention to detail. Excited to contribute my creativity
                and deliver impactful web solutions.
              </p> */}
            </div>
          </div>
          {/* Volunteer History */}
          <div className="education">
            <h3 className="edu-subtitle">Volunteer History</h3>
            <div className="edu-unn">
              <p className="edu-name">AFRICA TECHNOLOGY EXPO</p>
              <p className="edu-location uk-location">SPARK AFRICA (ABUJA - NIGERIA)</p>
              <ul className="exp-activities">
              <li>Event Registration and Guest Reception: Actively managed the front desk at the Spark Africa Technology Expo 2023, efficiently handling the registration process and distribution of identification tags and promotional materials to attendees.</li>
              <li>Guest Services Coordination: Assisted guests and attendees by providing guidance and ensuring they found comfortable seating, enhancing their overall experience and satisfaction with the event.</li>
              <li>Event Planning and Organization: Contributed to the planning and execution of the Spark Africa Technology Expo, participating in strategic meetings and collaborating with team members to ensure the event's success through meticulous preparation and organization</li>
            </ul>
            </div>
            <div className="edu-unn">
              <p className="edu-name">QWASAR SILICON VALLEY</p>
              <p className="edu-location unn-location">OURSOURCE GLOBAL SOFTWARE ACADEMY (ABUJA - NIGERIA)</p>
              <ul className="exp-activities">
              <li>As a Guardian Intern during my internship program, I supported fellow interns at the academy by troubleshooting their coding issues and providing clear, actionable guidance on how to resolve these challenges effectively.</li>
              <li>I was tasked with leading several daily stand-up meetings, where I actively listened to the progress updates of team members, offering advice and suggesting practical solutions to any problems they encountered.</li>
              <li>I participated in the quality assurance process for software developed by other interns, providing constructive feedback on enhancements and recognizing noteworthy achievements.</li>
            </ul>
            </div>
          </div>
          {/* Research */}
          <div className="education">
            <h3 className="edu-subtitle">Research</h3>
            <div className="edu-unn">
              <p className="edu-name">A research survey paper on the Impact of 5G Technology on Energy Efficiency</p>
              <p className="edu-duration">2024</p>
              <p className="edu-desc"><strong><i>Abstract: This technical survey explores the intricate interplay between 5G technology and energy efficiency, emphasizing the imperative of balancing enhanced connectivity with environmental sustainability. The paper delves into the impact of 5G on energy consumption, presenting key enablers such as Device-to-Device Communication (D2D), Massive MIMO, advanced sleep modes, and heterogeneous networks. It addresses challenges and trade-offs, including infrastructure costs, millimeter-wave technology constraints, and the delicate balance between energy efficiency and Quality of Service (QoS). Through a comprehensive review of existing research, the survey contributes insights into strategies for a sustainable digital future in the era of 5G.</i></strong></p>
              <br></br>
              <a href={ImpactOf5GTechnologyOnEnergyEfficiency} download className='download-btn'>Download paper</a>
            </div>
          </div>
          
        </div>
        {/* Professional Experience */}
        <div className="experience-container">
          <div className="education">
            <h3 className="exp-subtitle">Professional Experience</h3>
            <div className="exp-ogtl">
              <p className="exp-name">Lead Tutor - Science and Engineering</p>
              <p className="exp-duration">Oct. 2023 - Oct. 2024</p>
              <p className="exp-location">
                National Saturday Club, Manchester Metropolitan University - UK
              </p>
              <ul className="exp-activities">
              <li>Facilitate a series of interactive STEM workshop sessions, engaging young club members with hands-on projects that foster a deep understanding of Science and Engineering concepts.</li>
              <li>Lead initiatives using Micro:bits to introduce club members to Coding and STEM, enhancing their skills through practical, project-based learning experiences.</li>
              <li>Leveraging existing university resources to seamlessly integrate my program into an expansive network of outreach and engagement opportunities for club members.</li>
              <li>Engaging members in hands-on learning by constructing projects with Tinkercad and Scratch software, introducing them to the fundamentals of 3D modeling and software development.</li>
              <li>Overseeing the monitoring and evaluation of the club’s performance, effectively utilizing available resources to optimize outcomes.</li>
              <li>Providing mentorship and guidance to Club co-facilitators, recruited through RISE, to assist in program delivery and empower them to conduct their own sessions with my support.</li>
              <li>Leading the club group on a trip to London for an annual showcase at Somerset House. This event serves as a platform to celebrate and showcase everyone’s STEM work in a professional environment.</li>
            </ul>
            </div>
            <div className="exp-ogtl">
              <p className="exp-name">Frontend Developer</p>
              <p className="exp-duration">Apr. 2023 - Oct. 2023</p>
              <p className="exp-location">
                Outsource Global Technologies Ltd, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
              <li>Wrote clean, efficient, and maintainable code by utilizing appropriate programming languages and frameworks, ensuring high performance and compatibility.</li>
              <li>Successfully refactored existing code-bases from other programmers, addressing software issues with effective troubleshooting and solution implementation to enhance system reliability and functionality.</li>
              <li>Actively participated in daily online and weekly physical team meetings, engaging in brainstorming sessions and contributing to knowledge-sharing activities to foster a collaborative and innovative work environment.</li>
              <li>Collaborated closely with senior developers and team members to thoroughly understand project requirements, facilitating streamlined development processes and meeting critical deadlines.</li>
              <li>Tested and validated applications and software systems to ensure robust functionality and user satisfaction before and after deployment into production environments.</li>
            </ul>
            </div>
            <div className="exp-milantiawebs">
              <p className="exp-name">Freelance Frontend Developer</p>
              <p className="exp-duration">Dec. 2022 - Sept. 2023</p>
              <p className="exp-location">
                Milantiawebs, London - UK
              </p>
              <ul className="exp-activities">
                <li>Collaborated closely with clients to understand their needs, define project scope, and collect essential information, ensuring clear alignment and understanding throughout the project lifecycle.</li>
                <li>Executed comprehensive testing across all stages of website or application development to identify and rectify bugs, inconsistencies, and performance issues, ensuring a high-quality final product.</li>
                <li>Fostered effective collaboration with designers and key stakeholders to guarantee a unified and successful implementation of the project, aligning all components with the strategic goals.</li>
                <li>Specialized in developing and customizing Shopify themes to reflect the client's brand identity and design preferences, utilizing HTML, CSS, JavaScript, and Shopify's Liquid templating language for precise and engaging results.</li>
                <li>Configured and optimized Shopify store settings to enhance functionality and user experience, ensuring a seamless integration of all features and capabilities.</li>
              </ul>
            </div>
            <div className="exp-deep">
              <p className="exp-name">Frontend Developer (Contract)</p>
              <p className="exp-duration">Sep. 2022 - Dec. 2022</p>
              <p className="exp-location">
                Deep Technologies Ltd, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
                <li>Developed a robust FinTech loan and ecommerce application, leveraging frontend technologies to create a seamless user experience and efficient functionality.</li>
                <li>Delivered engaging presentations to clients, effectively showcasing project features, benefits, and value proposition, resulting in successful project acquisitions.</li>
                <li>Skillfully refactored a complex code-base developed by another programmer, improving code quality, readability, and maintainability while optimizing performance.</li>
                <li>Actively participated in code reviews and provided constructive feedback to fellow developers, improving overall code quality and fostering a culture of continuous learning and improvement within the development team.</li>
                <li>Stayed abreast of the latest frontend technologies and industry trends, proactively recommending and implementing innovative solutions to enhance the company's web development processes and maintain a competitive edge.</li>
            </ul>
            </div>
            <div className="exp-iykemedia">
              <p className="exp-name">Freelance Frontend Developer || Content Writer</p>
              <p className="exp-duration">March 2020 - Aug. 2022</p>
              <p className="exp-location">
              Iykemedia Branding Concepts, Anambra - Nigeria
              </p>
              <ul className="exp-activities">
                <li>Evaluated the client's needs and recommended the most suitable CMS platform based on factors such as scalability, flexibility, ease of use, and specific project requirements.</li>
                <li>Assisted clients in organizing and managing their website content within the CMS. This includes creating pages, adding images and videos, and optimizing content for search engines.</li>
                <li>Tracked and analyzed social media metrics, such as post engagement, click-through rates, and follower growth, providing insights to optimize future content strategies and improve performance.</li>
                <li>Extended the functionality of the website by integrating and customizing plugins or widgets available within the CMS. This may include contact forms, galleries, social media feeds, e-commerce functionality, and more.</li>
                <li>Wrote engaging and compelling social media posts that align with the brand's voice and tone, ensuring they resonate with the target audience.</li>
            </ul>
            </div>
            <div className="exp-nts">
              <p className="exp-name">IT Support || Content Writer (Contract)</p>
              <p className="exp-duration">Nov. 2019 - March. 2020</p>
              <p className="exp-location">
              Naija Talent Search, Abuja - Nigeria
              </p>
              <ul className="exp-activities">
                <li>Implemented proactive measures and preventive maintenance strategies to minimize system downtime and user disruptions. This included regularly monitoring and addressing potential issues before they escalated, resulting in improved system stability and reduced downtime.</li>
                <li>Developed and delivered user training programs and documentation to enhance end-user knowledge and self-sufficiency.</li>
                <li>Create or source visually appealing graphics, images, or videos to accompany social media posts, enhancing their impact and engagement potential</li>
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
