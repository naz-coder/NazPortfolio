import React from 'react'
import Header from '../components/header/Header'
import PageHero from '../components/hero/PageHero'
import AboutMe from '../components/about/AboutMe'

const Home = () => {
  return (
    <div>
        <Header/>
        <PageHero/>
        <AboutMe/>
    </div>
  )
}

export default Home