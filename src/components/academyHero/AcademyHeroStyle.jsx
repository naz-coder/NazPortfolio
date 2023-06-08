import styled from "styled-components";

export const AcademyHeroStyle = styled.div`
  margin: 5vh 10vw;

  .academy-hero {
    /* display: flex;
        flex-direction: row;
        justify-content: space-between; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
  }

  .academy-hero-img img {
    padding: 2rem;
    /* animation: wiggle 5s linear infinite; */
    /* align-items: center;
    justify-content: center; */
    width: 100%;
    max-width: 800px;
    height: auto;
  }
  /* 
.academy-hero-img img{
    width: 100%;
    max-width: 800px;
    height: auto;
} */

  .academy-hero-img img:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }

  .section-title {
    font-weight: 900;
    text-transform: capitalize;
    font-size: 2rem;
    margin-bottom: 0rem;
  }

  .section-name {
    font-weight: 900;
    text-transform: capitalize;
    font-size: 4.5rem;
    line-height: 5.5rem;
    margin-bottom: 0rem;
    color: #521d06;
  }

  .section-name-span {
    color: #f09942;
  }

  .section-description {
    font-weight: 900;
    font-size: 1.5rem;
    color: #333333;
    text-align: justify;
  }

  .section-description:last-of-type {
    margin-bottom: 2rem;
  }

  a.enroll-here {
    background-color: #521d06;
    border: 1px solid #521d06;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.7rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    font-weight: 900;
  }

  a.enroll-here:hover {
    background-color: #8b3611;
    border: 1px solid #8b3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin: 6vh 6vw;

    .academy-hero {
      grid-template-columns: 1fr 1fr;
      grid-gap: 5%;
    }

    .academy-hero-img img {
      padding: 0rem;
    }

    .section-title {
      font-size: 1.6rem;
      margin-bottom: -1rem;
    }

    .section-name {
      font-size: 3.5rem;
      line-height: 4.5rem;
    }

    .section-description {
      font-size: 1.4rem;
      text-align: justify;
    }
  }

  @media (max-width: 960px) {
    margin: 2rem;

    .section-name {
      font-size: 3.5rem;
    }

    .section-description {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    .academy-hero {
      grid-template-columns: 1fr;
      grid-gap: 0%;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: -0.5rem;
    }

    .section-name {
      font-size: 2.5rem;
      line-height: 3.5rem;
      margin-bottom: -0.5rem;
    }

    .section-description {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 425px) {
    margin: 1rem 1rem 2rem 1rem;

    .section-description {
      font-size: 1.2rem;
    }
  }
`;
