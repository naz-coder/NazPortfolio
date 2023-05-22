import React, {useState} from 'react'
import {HeaderStyle} from "../header/HeaderStyle"
import MobileMenu from '../atoms/MobileMenu'
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTwitter, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import {CgMenuHotdog} from "react-icons/cg"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  // const mobilMenuHandler = () => {
  //   setMobileMenu(true);
  // }

  // const handleCloseMenu = () => {
  //   setMobileMenu(false);
  // }

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <HeaderStyle>
      <div className='header'>
      <img src={whiteLogoo} alt='Naz-coder logo'></img>
      <nav className='nav_menu'>
          <ul>
          <li>About me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>CodeSpac</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
      <nav className='nav_socials'>
        <ul>
          <li><a href="https://www.twitter.com/TechSiz"><FaTwitter/></a></li>
          <li><a href="https://wa.me/2348167265619"><FaWhatsapp/></a></li>
          <li><a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/naz-coder"><FaGithub/></a></li>
          <li><a href="https://wa.me/2348167265619"><FaInstagram/></a></li>
        </ul>
      </nav>
      <div className='mobile-menu'>
        <a href="https://github.com/naz-coder"><FaGithub className='github_menu'/></a>
        <CgMenuHotdog onClick={toggleMenu}/>
      </div>

      {mobileMenu && <MobileMenu/>}
    </div>
    </HeaderStyle>
  )
}

export default Header
