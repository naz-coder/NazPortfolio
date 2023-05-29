import React from 'react'
import {PageHeroStyle} from "./PageHeroStyle"
import Buttons from "../atoms/Buttons"
import favsHero from "../../assets/favsHero.png"

const PageHero = () => {
  return (
    <PageHeroStyle>
        <div className='hero-container'>
            <div className="description">
                <p className='section-title'>Frontend Web Developer | Content Writer</p>
                <h1 className='section-name'>Favour Chinaza Anajemba-Agada</h1>
                <p className='section-description'>I am a passionate Frontend Web Developer dedicated to creating impactful solutions for 
                    companies and individuals by delovering seamless user experiences using latest technologies and best practices.
                </p>
                <div className='hero-btn'>
                    <Buttons buttonText={"Contact me"}/>
                </div>
            </div>
            <div className="hero-img">
                <img src={favsHero} alt='naz-coder image'/>
            </div>
        </div>
    </PageHeroStyle>
  )
}

export default PageHero