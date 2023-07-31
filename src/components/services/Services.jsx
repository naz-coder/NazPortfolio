import React from 'react';
import {ServiceStyle} from "./ServicesStyle";
import frontendDevIcon from "../../assets/frontendDevIcon.png";
import cmsIcon from "../../assets/cmsIcon.png";
import seoIcon from "../../assets/seoIcon.png";
import uiuxIcon from "../../assets/uiuxIcon.png";
import Buttons from '../atoms/Buttons';


const Services = () => {
  return (
    <ServiceStyle>
        <div className='service-outter' id='service'>
          <div className="service-content">
            <div className='service-content-info'>
              <h3>Benefits</h3>
              <h1>Why should you hire me?</h1>
              <p>I can assist in bringing your product to life by providing 
            comprehensive user research, design support, and testing expertise.</p>
            <Buttons buttonText={"Hire me"}/>
            </div>
          </div>
          <div className="service-cards">
            <div className="service-group-1">
            <div className='cards-1'>
                <div className='card-title-outter'>
                  <img src={frontendDevIcon} alt='Frontend Dev Icon'/>
                  <h2 className='service-title'>Software Development</h2>
                </div>
                <p className='service-description'>I specialize in developing responsive websites for various purposes, including 
                  Ecommerce, Financial Platforms, Landing Pages, ELearning Platforms, Portfolios, Blogs, 
                  Corporate Websites, Sales Funnels, Health Platforms, and Information Platforms.</p>
            </div>
            <div className='cards-2'>
                <div className='card-title-outter'>
                  <img src={cmsIcon} alt='CMS Icon'/>
                  <h2 className='service-title'>Low-Code Development</h2>
                </div>
                <p className='service-description'>Using these tools; Wix, Shopify, WooCommerce and WordPress, I develop responsive 
                  websites for various purposes, including Ecommerce, Landing Pages, Portfolios, Blogs, 
                  Corporate Websites, and Information Platforms for my clients. These websites are also 
                  made easily customizable for clients with little or zero knowledge on programming.</p>
            </div>
            </div>
            <div className="service-group-2">
            <div className='cards-3'>
              <div className='card-title-outter'>
                <img src={seoIcon} alt='SEO Icon'/>
                <h2 className='service-title'>Search Engine Optimization (SEO)</h2>
              </div>
                <p className='service-description'>To enhance site visibility and rankings on Google, I incorporate best SEO practices, such as 
                  utilizing Semantic HTML, Meta, Sitemaps, Google Search Console and implementing other effective strategies across the platforms.</p>
            </div>
            <div className='cards-4'>
              <div className='card-title-outter'>
                <img src={uiuxIcon} alt='UI/UX Icon'/>
                <h2 className='service-title'>Excellent User Experience</h2>  
              </div>
                <p className='service-description'>I understand how important the experience of each of your users is, I have developed a strong eye
                  for designs, which allows me to transform design templates from Figma and other design tools 
                  into pixel-perfect codes while making it easily accessible to all users, hence giving them the 
                  best experience with your platform.</p>
            </div>
            </div>
          </div>
        </div>
    </ServiceStyle>
  )
}

export default Services