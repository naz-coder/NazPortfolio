import React from 'react';
import Header from '../components/header/Header';
import GalleryPhoto from '../components/photos/GalleryPhoto';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';

const Gallery = () => {
  return (
    <div>
        <Header/>
        <GalleryPhoto/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Gallery;