import styled from "styled-components";

export const TestimonyStyle = styled.div`
  margin: 5% 10vw;

  .testimony-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8rem;
    padding-bottom: 5rem;
  }

  .testifier {
    background-position: left bottom;
    transition: 0.3s all ease-out;
    border-radius: 0 1rem;
    height: 100%;
    padding: 2rem;
    border: 1px solid #ffffff;
    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

  .testifier:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s all ease-in;
    background-position: right bottom;
  }

  .testifier img{
    /* width: 100%; */
    width: 110px;
    height: 105px;
    border-radius: 50%;
  }

  .testimony-content{
    padding: 0 1rem;
    margin: 5vh 0;
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }

  .testimony-content:hover {
    cursor: pointer;
    transition: 0ms.3s all ease-in;
    background-position: right bottom;
  }

  .testifier-comment{
    height: 50%;
    color: #333333;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .testifier-name{
    margin-bottom: -1rem;
    color: #521d06;
    font-size: 1.5rem;
    font-weight: 900;
  }

  .testifier-role{
    color: #333333;
    font-weight: 600;
  }

  .section-title {
    font-weight: 900;
    text-transform: capitalize;
    font-size: 2.5rem;
    line-height: 5.5rem;
    margin-bottom: 2rem;
    color: #521d06;
    text-align: center;
  }

  .section-title-span {
    color: #f09942;
  }

  .quote-left{
    padding-right: 1rem;
    font-size: 1.6rem;
  }

  .quote-right{
    padding-left: 1rem;
    font-size: 1.6rem;
  }

  @media (max-width: 1024px) {
    margin: 6vh 6vw;

    .section-title {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }
    .testimony-container{
    grid-gap: 2.5rem;
    padding-bottom: 5rem;
  }

  .testifier img{
    /* width: 100%; */
    width: 100px;
    height: 96px;
    border-radius: 50%;
  }


  }

  @media (max-width: 960px) {
    margin: 2rem;

    .section-title {
    font-size: 1.6rem;
  }

    .testimony-container{
    grid-template-columns: 1fr;
    grid-gap: 8rem;
  }
  .testifier img{
    width: 110px;
    height: 105px;
  }

  .testifier-comment{
    font-size: 1.1rem;
  }

  .testifier-name{
    font-size: 1.5rem;
  }

  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 1.5rem;
      margin-bottom: -0.5rem;
    }

    .section-name {
      font-size: 2.5rem;
      margin-bottom: -0.5rem;
      /* line-height: 3.5rem; */

    }
  }

  @media (max-width: 425px) {
    margin: 1rem 1rem 2rem 1rem;
  }
`;
