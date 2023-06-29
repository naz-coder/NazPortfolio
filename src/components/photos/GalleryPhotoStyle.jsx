import styled from "styled-components";

export const GalleryStyle = styled.div`
  padding: 4rem 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  .img-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);    
    padding: 2px;
    transition: 0.3s;
    grid-gap: 2.5rem;
  }

  .gallery-photo {
    display: block;
    width: 100%;
    max-width: 900px;
    height: auto;
    /* height: 400px; */
    filter: grayscale(1);
    /* animation: photoAnimation 1s ease-in;
      animation-iteration-count: 1; */
    background-position: right bottom;
    transition: all 0.3s ease-in-out;
    border: 1px solid #333;
    border-radius: 4px;
    padding: 10px;
    background-color: whitesmoke; 
  }

  @keyframes photoAnimation {
    0% {
      transform: scale(0, 0.25);
    }
    50% {
      transform: scale(1, 0.25);
    }
  }

  .gallery-photo:hover {
    transform: scale(1.05);
    filter: grayscale(0);
    cursor: pointer;
  }


  @media (max-width: 1550px) {
    padding: 0rem 5rem;
    margin: 6vh 6vw;


  .img-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    padding: 2px;
    transition: 0.3s;
    grid-gap: 2.5rem;
  }

  .gallery-photo {
    display: block;
    width: 100%;
    /* max-width: 500px;
    height: auto; */
    filter: grayscale(1);
  }

  .gallery-photo:hover {
    transform: scale(1.05);
    filter: grayscale(0);
  }
  }

  @media (max-width: 960px) {
    padding: 0rem 3rem 0rem 2rem;
    margin: 2rem;

  .gallery-photo {
    display: block;
    width: 100%;
    /* max-width: 500px;
    height: auto; */
    filter: grayscale(0);
  }

  .gallery-photo:hover {
    transform: scale(1.05);
    /* filter: grayscale(0); */
  }
  }

  @media (max-width: 740px) {
    padding: 0rem 3rem 0rem 1.5rem;
    margin: 2rem 0rem;

  .img-content {
    grid-template-columns: repeat(1, 1fr);    
    grid-gap: 1.5rem;
  }

  .gallery-photo {
    display: block;
    width: 100%;
    /* max-width: 500px;
    height: auto; */
  }
  }
`;
