import React from "react";
import {FooterStyle} from "../footer/FooterStyle";
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaTwitter, FaGithub, FaWhatsapp, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
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

  return (
    <FooterStyle>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <div className="logo-hire">
          <div onClick={headerScrollHandler}><p><img src={whiteLogoo} alt="Logo"></img></p></div>
          <div className='hire-me'>
            <p className='action-text'>Let's work together.</p>
            <button className='hire-me'><Link to='/contact' className='menu-link'>Hire me</Link></button>
          </div>
          </div>
        </div>
        <div className="foot_ite">
          <p className="footer-menu-subtitle">MENU</p>
          <div className="footer-menu-items">
          <p onClick={aboutScrollHandler} className="footer-menu-items-1"><Link to="/" className='menu-link'>About me</Link></p>
          <p onClick={serviceScrollHandler} className="footer-menu-items-2"><Link to="/" className='menu-link'>Services</Link></p>
          <p onClick={porfolioScrollHandler} className="footer-menu-items-3"><Link to="/" className='menu-link'>Portfolio</Link></p>
          <p className="footer-menu-items-4"><Link to="/gallery" className='menu-link'>Gallery</Link></p>
          <p className="footer-menu-items-4"><Link to="/resume" className='menu-link'>Resume</Link></p>
          <p className="footer-menu-items-4"><Link to="/contact" className='menu-link'>Contact</Link></p>
        </div>

        </div>
        <div className="foot_ite">
          <p className="footer-menu-subtitle">LEARN SOFTWARE DEVELOPMENT</p>
          <p className="footer-item-p"><Link to="/academy" className='menu-link'>CodeSpac Tutors</Link></p>
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
          <a target="_blank" href="https://www.instagram.com/naz.codes/"><FaInstagram/></a>
          </div>
          
        </div>
      </div>
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;