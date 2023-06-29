import React from 'react';
import { GalleryStyle } from './GalleryPhotoStyle';
import projectsData from "../../projects.json";

const GalleryPhoto = () => {
  return (
    <GalleryStyle>
        <div className='img-container'>
        <div className='img-content'>
          {projectsData.photos.map((photo) => {
            return(
            <div className='Image' key={photo.id}>
            <img src={photo.image} alt={photo.altName} className='gallery-photo'/>
          </div>
            )
          })}
        </div>
        </div>
    </GalleryStyle>
  )
}

export default GalleryPhoto;