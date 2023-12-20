import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/atoms/BackToTop';
import BlogPost from '../components/blog/BlogPost';

const Blog = () => {
  return (
    <div>
        <Header/>
        <BlogPost/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Blog