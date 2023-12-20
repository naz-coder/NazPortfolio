import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';
import PodcastComponent from '../components/podcastComponent/PodcastComponent';

const Podcast = () => {
  return (
    <div>
        <Header/>
        <PodcastComponent/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Podcast