import React from 'react';
import Header from '../components/header/Header';
import PageHero from '../components/hero/PageHero';
import AboutMe from '../components/about/AboutMe';
import Services from '../components/services/Services';
import Portfolio from "../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div>
        <Header/>
        <PageHero/>
        <AboutMe/>
        <Services/>
        <Portfolio/>
    </div>
  )
}

export default Home