import React from 'react';
import Header from '../components/header/Header';
import PageHero from '../components/hero/PageHero';
import AboutMe from '../components/about/AboutMe';
import Services from '../components/services/Services';
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Loading from "../components/atoms/Loading";

const Home = () => {
  return (
    <div>
        <Header/>
        <PageHero/>
        <AboutMe/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Loading/>
    </div>
  )
}

export default Home