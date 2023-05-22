import React from 'react'
import styled from 'styled-components'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTwitter, FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const MobileMenu = () => {
  return (
    <MobileMenuStyle>
      <div className='mobile_menu_outter'>
      <nav className='mobile_menu_item'>
          <ul>
          <li>About me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>CodeSpac</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
      <nav className='mobile_menu_socials'>
        <ul>
          <li><a href="https://www.twitter.com/TechSiz"><FaTwitter/></a></li>
          <li><a href="https://wa.me/2348167265619"><FaWhatsapp/></a></li>
          <li><a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><FaLinkedinIn/></a></li>
          <li><a href="https://github.com/naz-coder"><FaGithub/></a></li>
          <li><a href="https://wa.me/2348167265619"><FaInstagram/></a></li>
        </ul>
      </nav>
    </div>
    </MobileMenuStyle>
  )
}

export default MobileMenu


export const MobileMenuStyle = styled.div`
        /* position: absolute;
        top: 0;
        left: 0;
        background: #f2f2f2;
        width: 100%;
        height: 100%;
        border-right: #ccc 1px solid;
        opacity: 0.9;
        padding: 30px;
        transform: translateX(-500px);
        transition: transform 0.9s ease-in-out;
        color: #000000; */

        /* background-color: rgba(0, 0, 0, 0.6); */
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    margin: -0.01rem;
    top: 0;
    left: 0;
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
    padding-left: 10rem;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;

    a{
        text-decoration: none;
    }
     .mobile_menu_outter{
        position: fixed;
        z-index: 1;
        top: 40%;
        left: 63%;
        transform: translate(-50%, -50%);
        color: #000000;
    } 

    .mobile_menu_item ul li{
        padding: 20px;
        border-bottom: #ccc solid 1px;
        font-size: 20px;
        width: 250%;
    }

    .mobile_menu_socials ul{
        display: flex;
        flex-direction: row;
        column-gap: 15%;
        /* margin-left: 4rem; */

    }

    .mobile_menu_socials  li a{
        font-size: 1.5rem;
         color: #000000;

    }

    .mobile_menu_socials a:hover, .mobile-menu:hover{
        cursor: pointer;
        color:#666666;
    }
`