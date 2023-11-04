import styled from "styled-components";

export const ResumeStyle = styled.div`
  margin: 10vh 2vw;
  padding: 2rem;
  border: 1px solid #ece1e1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  a {
    text-decoration: inherit;
  }

  .resume-title {
    font-size: 2rem;
    margin-top: 0rem;
    border-left: 3px solid #8b3611;
    padding-left: 0.5rem;
  }

  .resume-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3%;
  }

  .resume-subtitle,
  .exp-subtitle {
    margin-top: 0rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .summary{
    border-left: 3px;
	border-right: 0;
	border-style: groove;
    padding-left: 0.5rem;
    border-image: linear-gradient(to bottom, #8b3611, #d69b81, #8b3611) 1 100%;

  }

  .summary-name{
    font-weight: 900;
    font-size: 1.2rem;
    color: #333333;
    margin-bottom: -0.7rem;
    text-transform: uppercase;
    margin-top: -0.3rem;
  }

  .summary ul li {
    font-size: 1.2rem;

  }

  .summary ul{
    margin-bottom: -0.3rem;
  }

  .summary-desc {
    font-style: italic;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .exp-location {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: -0.7rem;
    margin-top: -0.5rem;
  }

  .edu-desc{
    line-height: 1.8rem;
    margin-bottom: -0.3rem;
  }

  .edu-unn,
  .edu-femcode,
  .edu-qwasar {
    margin-bottom: 2rem;
    /* width: 30vw;
	font-size: 1em;
	line-height: 1.5em;
	font-weight: 200;
	padding: 0 4vw 4vw; */
	border-left: 3px;
	border-right: 0;
	border-style: groove;
    padding-left: 0.5rem;
    border-image: linear-gradient(to bottom, #8b3611, #d69b81, #8b3611) 1 100%;
  }

  .exp-ogtl,
  .exp-milantiawebs,
  .exp-deep,
  .exp-iykemedia,
  .exp-nts,
  .exp-dfc {
    margin-bottom: 1.5rem;
    border-left: 3px;
	border-right: 0;
	border-style: groove;
    padding-left: 0.5rem;
    border-image: linear-gradient(to bottom, #8b3611, #d69b81, #8b3611) 1 100%;
  }

  .edu-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    
  }

  .edu-name, .exp-name {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: -0.5rem;
    margin-top: -0.3rem;
  }

  .edu-duration{
    background-color: #d69b81;
    background-position: right bottom;
    transition: all 0.3s ease-out;
    padding: 0.4rem 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.7rem;
    height: 1.5rem;
    font-weight: 900;
  }

  .exp-duration {
    background-color: #d69b81;
    background-position: right bottom;
    transition: all 0.3s ease-out;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 1.5rem;
    font-weight: 900;
  }

  .edu-location {
    font-style: italic;
    font-size: 1.1rem;
    margin-top: -0.5rem;
  }

  .unn-location{
    margin-bottom: -0.3rem;
  }

  .edu-desc {
    font-size: 1.1rem;
    margin-top: -0.5rem;
  }

  .exp-activities {
    font-size: 1.1rem;
    margin-bottom: -0.3rem;
  }

  .hire-me-btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding-bottom: 3rem;
  }

  .hire-me {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    column-gap: 2rem;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2%; */
  }

  .action-text {
    font-weight: 900;
    font-size: 1rem;
    color: #000000;
    text-transform: uppercase;
    
  }

  button.hire-me a {
    color: #ffffff;
  }

  button.hire-me {
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    font-weight: 900;
  }

  button.hire-me:hover {
    background-color: #8b3611;
    border: 1px solid #8b3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
  }

  /* MEDIA QUERY */
  @media (max-width: 1024px) {
    margin: 7vh 2vw;

    .resume-title {
      font-size: 1.5rem;
    }

  }

  @media (max-width: 960px) {
    margin: 4rem 2rem;
    padding-top: 3rem;

    .resume-title {
      font-size: 1.5rem;
    }

    .resume-content-container {
      grid-template-columns: 1fr;
      grid-gap: 0.5rem;
    }

    .resume-subtitle {
      font-size: 1.25rem;
    }

    .hire-me-btn-container{
    margin-top: 3.5rem;
    padding-bottom: 5rem;
  }
  }

  @media (max-width: 740px) {
    margin: 3rem 1rem;
    padding: 2.5rem 1rem;

    .summary-desc {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  .edu-desc{
    line-height: 1.7rem;
  }

  .hire-me-btn-container{
    display: block;
    margin-top: 1rem;
    padding-bottom: 3rem;
  }

  .hire-me {
    display: block;
  }

    .hire-me {
      grid-template-columns: 1fr;
    }
  }
`;
