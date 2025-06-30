import React from 'react'
import {PageHeroStyle} from "./PageHeroStyle"
import Buttons from "../atoms/Buttons"
import favsHero from "../../assets/favsHero.png"
// import hero from "../../assets/hero.webp"


const PageHero = () => {
  return (
    <PageHeroStyle>
        <div className='hero-container' id='heroSection'>
            <div className="description">
                <p className='section-title'>Software Developer | Content Writer</p>
                <h1 className='section-name'>Favour Anajemba</h1>
                <p className='section-description'>Crafting seamless digital experiences, one line of code at a time.
                </p>
                <p className='section-description-main'>Shaping the web, one pixel and line of code at a time since 2021, I turn ideas into smooth, user-friendly solutions using the latest tech and clean code. Let’s build something amazing together. Drop me a line and let’s get started!
                </p>
                <div className='hero-btn'>
                    <Buttons buttonText={"Let's talk"}/>
                </div>
            </div>
            <div className="hero-img">
                <img src={favsHero} alt='hero image'/>
            </div>
        </div>
    </PageHeroStyle>
  )
}

export default PageHero