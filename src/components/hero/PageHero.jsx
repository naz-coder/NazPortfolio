import React from 'react'
import {PageHeroStyle} from "./PageHeroStyle"
import nazaa from "../../assets/nazaa.png"
import heroImage from "../../assets/heroImage.png"
import FavourChinazaAnajembaResume from "../../assets/FavourChinazaAnajembaResume.pdf";

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
                {/* <p>Passionate Frontend Web Developer dedicated to creating impactful solutions for companies and 
                    individuals through problem-solving products. Committed to delivering seamless user experiences, 
                    I leverage the latest technologies and best practices to craft intuitive interfaces. Let's 
                    collaborate to bring your ideas to life and make a positive impact.</p> */}
                <div className='hero-btn'>
                    <button className='contact-btn'>Contact me</button>
                    <a href={FavourChinazaAnajembaResume} download className='download-btn'> Download CV</a>
                </div>
            </div>
            <div className="hero-img">
                <img src={nazaa} alt='naz-coder image'/>
            </div>
        </div>
    </PageHeroStyle>
  )
}

export default PageHero