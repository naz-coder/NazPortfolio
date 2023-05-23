import React from 'react'
import {PageHeroStyle} from "./PageHeroStyle"
import hero from "../../assets/hero.png"

const PageHero = () => {
  return (
    <PageHeroStyle>
        <div className='hero-container'>
            <div className="description">
                <p>Frontend Web Developer</p>
                <h1>Favour Chinaza Anajemba-Agada</h1>
                <p>I am a Frontend Web Developer who is highly passionate
                    about building problem solving products for companies and 
                    individuals.
                </p>
                <button className='contact-btn'>Contact me</button>
                <button className='download-btn'>Download CV</button>
            </div>
            <div className="hero_img">
                <img src={hero} alt='naz-coder image'/>
            </div>
        </div>
    </PageHeroStyle>
  )
}

export default PageHero