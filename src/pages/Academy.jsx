import React from 'react';
import Header from '../components/header/Header';
import AcademyHero from '../components/academyHero/AcademyHero';
import Testimony from "../components/testimonial/Testimony";
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';

const Academy = () => {
  return (
    <div>
        <Header/>
        <AcademyHero/>
        <Testimony/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Academy