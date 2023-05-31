import React from 'react';
import {PortfolioStyle} from "./PortfolioStyle";
import {FiExternalLink} from "react-icons/fi";
import projectsData from "../../projects.json"

const Portfolio = () => {

  return (
    <PortfolioStyle>
        <div>
            <div className='section-title' id='portfolio'><h3>My Portfolio</h3></div>
            <div className='project-container'>
                {projectsData.projects.map((data) => {
                    return(
                        <div className='project-item' key={data.id}>
                    <div className="img-container">
                        <img src={data.image} alt={data.altName} className='image-item'/>
                        <div className='thumbnail-link'>
                            <div className="link-icon">
                                <a target='blank' href={data.link}><FiExternalLink/></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-content'>
                        <div className='info-1'>
                            <p className='project-title'><span className='span-item'>Title: </span>{data.name}</p>
                            <p className='project-link'><a target='blank' href={data.link}>View more</a></p>
                        </div>
                        <div className='info-2'>
                            <p className='project-credit'><span className='span-item'>Credit: </span>{data.credit}</p>
                            <p className='project-stack'><span className='span-item'>Tech Stack: </span>{data.stack}</p>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    </PortfolioStyle>
  )
}

export default Portfolio