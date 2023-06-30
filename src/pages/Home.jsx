import React from 'react';
import Header from '../components/header/Header';
import PageHero from '../components/hero/PageHero';
import AboutMe from '../components/about/AboutMe';
import Services from '../components/services/Services';
import Portfolio from "../components/portfolio/Portfolio";
// import Loading from "../components/atoms/Loading";
import Footer from '../components/footer/Footer';
import BackToTop from "../components/atoms/BackToTop";

const Home = () => {
  return (
    <div>
        <Header/>
        <PageHero/>
        <AboutMe/>
        <Services/>
        <Portfolio/>      
        <Footer/>
        {/* <Loading/> */}
        <BackToTop/>
    </div>
  )
}

export default Home