import React, {useState} from 'react'
import {HeaderStyle} from "../header/HeaderStyle"
import {Link} from "react-router-dom"
import MobileMenu from '../atoms/MobileMenu'
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { MdMenu } from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(true)
  }

  const closeModal = () => {
    setMobileMenu(false);
  }

  const homeScrollHandler = () => {
    const sectionElement = document.getElementById("heroSection");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

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

  const contactScrollHandler = () => {
    const sectionElement = document.getElementById("contact");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  return (
    <HeaderStyle>
      <div className='header' id='header'>
      <Link onClick={homeScrollHandler} to={"/"}><img src={whiteLogoo} alt='Naz-coder logo'></img></Link>
      <nav className='nav_menu'>
        <ul>
          <li onClick={aboutScrollHandler}><Link to="/" className='menu-link'>About me</Link></li>
          <li onClick={serviceScrollHandler}><Link to="/" className='menu-link'>Services</Link></li>
          <li onClick={porfolioScrollHandler}><Link to="/" className='menu-link'>Portfolio</Link></li>
          {/* <li><Link to="/podcast" className='menu-link'>Podcast</Link></li>
          <li><a href="https://dev.to/techsiz" target='blank' className='menu-link'>Blog</a></li> */}
          <li onClick={contactScrollHandler}><Link to="/" className='menu-link'>Contact</Link></li>
        </ul>
      </nav>
      <nav className='nav_socials'>
        <ul>
          <ul>
            <li><a target="_blank" href="mailto:nazanajemba@gmail.com" ><HiOutlineMail/></a></li>
            <li><a href="https://www.twitter.com/TechSiz" target='blank'><FaTwitter/></a></li>
            <li><a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196" target='blank'><FaLinkedinIn/></a></li>
            <li><a href="https://github.com/naz-coder" target='blank'><FaGithub/></a></li>
          </ul>
        </ul>
      </nav>
      <div className='mobile-menu'>
        <a href="https://github.com/naz-coder" target='blank'><FaGithub className='github_menu'/></a>
        <MdMenu onClick={toggleMenu}/>
      </div>

      {mobileMenu && <MobileMenu 
        closeModal={closeModal} 
        aboutScrollHandler={aboutScrollHandler}
        serviceScrollHandler={serviceScrollHandler}
        porfolioScrollHandler={porfolioScrollHandler} 
        contactScrollHandler={contactScrollHandler}
        />
      }
    </div>
    </HeaderStyle>
  )
}

export default Header