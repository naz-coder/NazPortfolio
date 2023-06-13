import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';
import ResumeComponent from '../components/resume/ResumeComponent';

const Resume = () => {
  return (
    <div>
        <Header/>
        <ResumeComponent/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Resume