import whiteLogoo from '../images/whiteLogoo.jpg'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Header = () => {
  return (
    <div className='header'>
      <img src={whiteLogoo} alt='img'></img>
      <nav className='nav-sections'>
          <ul>
          <li>About</li>
          <li>Works</li>
          <li>Resume</li>
          <li>Programs</li>
          <li>Contact</li>
        </ul>
      </nav>
      <nav className='nav-socials'>
        <ul>
          <li><FaTwitter/></li>
          <li><FaWhatsapp /></li>
          <li><FaLinkedinIn /></li>
          <li><FaFacebookF /></li>
          <li><FaInstagram /></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
