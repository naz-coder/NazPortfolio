import React from 'react';
import Header from '../components/header/Header';
import PageHero from '../components/hero/PageHero';
import AboutMe from '../components/about/AboutMe';
import Services from '../components/services/Services';
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Loading from "../components/atoms/Loading";
import Footer from '../components/footer/Footer';
import BackToTop from "../components/atoms/BackToTop";
import { Link, Element, animateScroll as scroll } from 'react-scroll';


const Home = () => {
  return (
    <div>
        <Header/>
        <PageHero/>
        <AboutMe/>
        <Services/>
        <Portfolio/>
        <Contact/>       
        <Footer/>
        <Loading/>
        <BackToTop/>
        
        {/* <Element name='pageHero'><PageHero/></Element>
        <Element name='aboutSection'><AboutMe/></Element>
        <Element name='serviceSection'><Services/></Element>
        <Element name='portfolioSection'><Portfolio/></Element>
        <Element name='contactSection'><Contact/></Element>
         */}
    </div>
  )
}

export default Home