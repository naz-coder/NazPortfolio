import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";

const MobileMenu = ({closeModal, aboutScrollHandler, serviceScrollHandler, porfolioScrollHandler, contactScrollHandler}) => {
  const menuControl = () => {
    aboutScrollHandler();
    closeModal();
  }

  const serviceMenuControl = () => {
    serviceScrollHandler();
    closeModal();
  }

  const portfolioMenuControl = () => {
    porfolioScrollHandler();
    closeModal();
  }
 const contactMenuControl = () => {
    contactScrollHandler();
    closeModal();
  }

  return (
    <MobileMenuStyle>
      <div className='mobile_menu_outter'>
      <nav className='mobile_menu_item'>
          <ul>
          <li onClick={menuControl}><Link to='/' className='menu-link'>About me</Link></li>
          <li onClick={serviceMenuControl}><Link to='/' className='menu-link'>Services</Link></li>
          <li onClick={portfolioMenuControl}><Link to='/' className='menu-link'>Portfolio</Link></li>
          {/* <li><a href="https://dev.to/techsiz" target='blank' className='menu-link'>Blog</a></li>
          <li><Link to="/podcast" className='menu-link'>Podcast</Link></li> */}
          <li onClick={contactMenuControl}><Link to="/" className='menu-link'>Contact</Link></li>
        </ul>
      </nav>
      <nav className='mobile_menu_socials'>
        <ul>
          <li><a target="_blank" href="mailto:nazanajemba@gmail.com" ><HiOutlineMail/></a></li>
          <li><a href="https://www.twitter.com/TechSiz" target='blank'><FaTwitter/></a></li>
          <li><a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196" target='blank'><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/naz-coder" target='blank'><FaGithub/></a></li>
        </ul>
      </nav>
    </div>
    </MobileMenuStyle>
  )
}

export default MobileMenu


export const MobileMenuStyle = styled.div`
@media (min-width: 769px) {
    display: none;
}
@media (max-width: 768px){
    position: absolute;

    a{
        text-decoration: none;
    }

    .mobile_menu_outter{
    background: #f2f2f2;
    width: 50vw;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    transform: translate(-50%, -50%);
    position: fixed;
    text-align: left;
    font-size: 1.2rem;
    color: #000000;
    border-right: #ccc 1px solid;
    opacity: 0.9;
    padding-top: 1rem;
    padding-left: 7rem;
    padding-right: 5rem;
    transform: translate(-500px);
    transition: transform 0.5s ease-in-out;
    z-index: 1;
    top: 0;
    left: 23rem;
    color: #000000;
  } 

  .mobile_menu_item{
    padding-top: 50px;

  }

  .menu-link{
  text-decoration: none;
  color: inherit;
}

    .mobile_menu_item ul li{
      padding: 17px;
      border-bottom: #ccc solid 1px;
      font-size: 20px;
      width: 100vw;
    }

    .mobile_menu_socials ul{
      display: flex;
      flex-direction: row;
      column-gap: 5%;
      margin-left: 1.3rem;
    }

    .mobile_menu_socials  li a{
      font-size: 1.5rem;
      color: #000000;
    }

    .mobile_menu_socials a:hover, .mobile-menu:hover{
      cursor: pointer;
      color:#666666;
    } 
  }


`