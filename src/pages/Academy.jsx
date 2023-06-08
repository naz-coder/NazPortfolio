import React from 'react'
import Header from '../components/header/Header'
import AcademyHero from '../components/academyHero/AcademyHero'
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';

const Academy = () => {
  return (
    <div>
        <Header/>
        <AcademyHero/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Academy