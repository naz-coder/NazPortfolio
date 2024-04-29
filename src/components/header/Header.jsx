import React, {useState} from 'react'
import {HeaderStyle} from "../header/HeaderStyle"
import {Link} from "react-router-dom"
import MobileMenu from '../atoms/MobileMenu'
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTwitter, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {CgMenuHotdog} from "react-icons/cg"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(true)
  }

  const closeModal = () => {
    setMobileMenu(false);
  }

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

  return (
    <HeaderStyle>
      <div className='header' id='header'>
      <Link to={"/"}><img src={whiteLogoo} alt='Naz-coder logo'></img></Link>
      <nav className='nav_menu'>
        <ul>
          <li onClick={aboutScrollHandler}><Link to="/" className='menu-link'>About me</Link></li>
          <li onClick={serviceScrollHandler}><Link to="/" className='menu-link'>Services</Link></li>
          <li onClick={porfolioScrollHandler}><Link to="/" className='menu-link'>Portfolio</Link></li>
          <li><Link to="/academy" className='menu-link'>CodeSpac</Link></li>
          <li><Link to="/gallery" className='menu-link'>Gallery</Link></li>
          <li><Link to="/resume" className='menu-link'>Resume</Link></li>
          <li><Link to="/podcast" className='menu-link'>Podcast</Link></li>
          <li><Link to="/blog" className='menu-link'>Blog</Link></li>
          <li><Link to="/contact" className='menu-link'>Contact</Link></li>
        </ul>
      </nav>
      <nav className='nav_socials'>
        <ul>
          <li><a href="https://www.twitter.com/TechSiz" target='blank'><FaTwitter/></a></li>
          <li><a href="https://wa.me/2348167265619" target='blank'><FaWhatsapp/></a></li>
          <li><a href="https://www.linkedin.com/in/favour-naza-anajemba" target='blank'><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/naz-coder" target='blank'><FaGithub/></a></li>
          <li><a href="https://www.instagram.com/naz.codes/" target='blank'><FaInstagram/></a></li>
        </ul>
      </nav>
      <div className='mobile-menu'>
        <a href="https://github.com/naz-coder" target='blank'><FaGithub className='github_menu'/></a>
        <CgMenuHotdog onClick={toggleMenu}/>
      </div>

      {mobileMenu && <MobileMenu 
        closeModal={closeModal} 
        aboutScrollHandler={aboutScrollHandler}
        serviceScrollHandler={serviceScrollHandler}
        porfolioScrollHandler={porfolioScrollHandler} 
        />
      }
    </div>
    </HeaderStyle>
  )
}

export default Header


