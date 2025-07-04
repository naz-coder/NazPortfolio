import React from 'react'
import {PageHeroStyle} from "./PageHeroStyle"
import Buttons from "../atoms/Buttons"
import favsHero from "../../assets/favsHero.png"
import heroImage from "../../assets/heroImage.png"
// import { Link } from 'react-router-dom'


const PageHero = () => {
  return (
    <PageHeroStyle>
        <div className='hero-container' id='heroSection'>
            <div className="description">
                <h1 className='section-name'>Hello, 
                    <br></br>I am <span className='span_item'>Favour Anajemba</span>,
                    <br></br>Front End Developer
                </h1>
                <p className='section-description'>Crafting seamless digital experiences, one line of code at a time.

                </p>
                <p className='section-description-main'>I turn ideas into smooth, user-friendly solutions using the latest tech and clean code. Shaping the web, one pixel and line of code at a time since 2021. Let’s build something amazing together. Drop me a line and let’s get started!
                </p>
                <div className='hero-btn'>
                    <Buttons buttonText={"Let's talk"}/>
                </div>
            </div>
            <div className="hero-img">
                <img src={heroImage} alt='hero image'/>
            </div>
        </div>
    </PageHeroStyle>
  )
}

export default PageHero