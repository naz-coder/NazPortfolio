import React from "react";
import {FooterStyle} from "../footer/FooterStyle";
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaTwitter, FaGithub, FaWhatsapp, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {BiUpArrowCircle} from "react-icons/bi";
import {Link} from "react-router-dom";

const Footer = () => {
  const aboutScrollHandler = () => {
    const sectionElement = document.getElementById("aboutMe");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const serviceScrollHandler = () => {
    const sectionElement = document.getElementById("service");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const porfolioScrollHandler = () => {
    const sectionElement = document.getElementById("portfolio");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const headerScrollHandler = () => {
    const sectionElement = document.getElementById("header");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const contactScrollHandler = () => {
    const sectionElement = document.getElementById("contact");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  return (
    <FooterStyle>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <div className="logo-hire">
          <div><p><img src={whiteLogoo} alt="Logo"></img></p></div>
          <div className='hire-me'>
                  <p className='action-text'>Let's work together.</p>
                  <button onClick={contactScrollHandler} className='hire-me'><Link to='/' className='menu-link'>Hire me</Link></button>
          </div>
          </div>
        </div>
        <div className="foot_ite">
          <p className="footer-menu-subtitle">MENU</p>
          <div className="footer-menu-items">
          <p onClick={aboutScrollHandler} className="footer-menu-items-1"><Link to="/" className='menu-link'>About me</Link></p>
          <p onClick={serviceScrollHandler} className="footer-menu-items-2"><Link to="/" className='menu-link'>Services</Link></p>
          <p onClick={porfolioScrollHandler} className="footer-menu-items-3"><Link to="/" className='menu-link'>Portfolio</Link></p>
          <p className="footer-menu-items-4">Resume</p>
          </div>

        </div>
        <div className="foot_ite">
          <p className="footer-menu-subtitle">LEARN FRONTEND DEVELOPMENT</p>
          <p className="footer-item-p">CodeSpac Tutors</p>
        </div>
        <div className="foot_ite">
          <p className="footer-menu-subtitle">KEEP IN TOUCH</p>
          <p className="footer-item-p">FCT - Abuja, Nigeria</p>
          <p className="footer-item-p">Naza: (+234) 8167265619</p>
        </div>
        <div className="">
          <p className="footer-menu-subtitle-socials">CONNECT</p>
          <div className="nav_socials">
          <a target="_blank" href="https://www.twitter.com/TechSiz"><FaTwitter/></a>
          <a target="_blank" href="https://wa.me/2348167265619"><FaWhatsapp/></a>
          <a target="_blank" href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><FaLinkedinIn/></a>
          <a target="_blank" href="https://github.com/naz-coder"><FaGithub/></a>
          <a target="_blank" href="https://wa.me/2348167265619"><FaInstagram/></a>
          </div>
          
        </div>
        <div className="foot_ite">
          <p className="up-icon" onClick={headerScrollHandler}><Link to="/" className="up-icon-link"><BiUpArrowCircle className="top-icon"/></Link></p>
        </div>
      </div>
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;