import React from 'react'
import Header from '../components/header/Header'
import AcademyHero from '../components/academyHero/AcademyHero'
import Footer from '../components/footer/Footer'

const Academy = () => {
  // const academyHeroScrollHandler = () => {
  //   const sectionElement = document.getElementById("academyHeroSection");
  //   sectionElement.scrollIntoView({behavior: "smooth"});
  // };

  return (
    <div>
        <Header/>
        <AcademyHero/>
        <Footer/>
    </div>
  )
}

export default Academy