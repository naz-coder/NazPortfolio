import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';
import ContactMe from '../components/contactMe/ContactMe';

const Gallery = () => {
  return (
    <div>
        <Header/>
        <ContactMe/> 
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Gallery;