import styled from "styled-components";

export const EnrollStyle = styled.div`
  padding-top: 10vh;

  .section-title h3 {
    font-size: 2rem;
    margin-top: 0rem;
    border-left: 3px solid #8b3611;
    padding-left: 0.5rem;
  }

  .section-title-codespac p {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
    margin-top: -1rem;
  }

  .contact-outter {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5%;
  }

  .contact-details {
    /* padding: 0.8rem 2.5rem; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
  }

  .contact-details h3 {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
  }

  .contact-details p {
    font-weight: 500;
    font-size: 1.3rem;
    color: #521d06;
    margin-top: -1.2rem;
  }

  .join-us-img {
    /* width: 100%; */
    height: auto;
    width: 850px;
  }

  .join-us-img:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .contact-form {
    background-color: #ece1e1;
    border: 1px solid #ece1e1;
    background-position: right bottom;
    transition: all 0.5s ease-in-out;
    padding: 0.8rem 2.5rem; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.2rem;
    font-weight: 900;
    height: 100%;
  }

  .client-contact-detail label,
  .message-detail label {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
    display: block;
    margin-bottom: 0.3rem;
  }

  .client-contact-detail input {
    font-size: 1.2rem;
    color: #000000;
    padding-left: 0.7rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 97.8%;
    height: 3rem;
    border: 1px solid #aeb1b3;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  }

  .client-contact-detail input:focus,
  .message-detail textarea:focus {
    outline: none;
  }

  .client-contact-detail input::placeholder,
  .message-detail textarea::placeholder {
    color: #333333;
  }

  .message-detail textarea {
    font-size: 1.2rem;
    color: #000000;
    padding-left: 0.7rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 97.8%;
    height: 10rem;
    border: 1px solid #aeb1b3;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    resize: none;
  }

  .message-detail textarea::-webkit-scrollbar {
    display: none;
  }

  button.submit-btn {
    background-color: #521d06;
    border: 1px solid #521d06;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 1rem 2.5rem;
    margin-top: 1rem;
    margin-right: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    font-weight: 900;
  }

  button.submit-btn:hover {
    background-color: #8b3611;
    border: 1px solid #8b3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
    translate: 0.5s;
  }

  @media (max-width: 1750px) {
    .join-us-img {
      height: auto;
    width: 350px;   
  } 
  }

  @media (max-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 5rem;


    .contact-form{
      padding-bottom: 2rem;
    }
    .contact-outter {
      grid-template-columns: 1fr;
      grid-gap: 5%;
    }

    .contact-details p {
      font-weight: 500;
      font-size: 1.3rem;
      color: #521d06;
      margin-top: -1rem;
    }
    .join-us-img {
      margin-top: -2rem;
      height: auto;
    width: 100%;   
    }
    .contact-form {
      padding: 1.5rem 2.5rem;
      height: 100%;
    }

    .client-contact-detail label,
    .message-detail label {
      margin-bottom: 0.3rem;
    }

    .client-contact-detail input {
      margin-bottom: 1.5rem;
    }

    .message-detail textarea {
      margin-bottom: 1.5rem;
    }

    button.submit-btn {
      margin-top: 0rem;
    }
  }

  @media (max-width: 960px) {
    padding-top: 4rem;
  }

  @media (max-width: 768px) {
    padding-top: 0rem;

    .section-title-codespac p {
      font-size: 1.3rem;
      margin-top: -1rem;
    }

    .contact-details {
      padding: 0.8rem 1.2rem;
      font-size: 1.2rem;
      height: 100%;
    }

    .contact-details h3 {
      font-size: 1.3rem;
    }

    .contact-details p {
      font-size: 1.3rem;
      margin-top: -1rem;
    }

    .join-us-img {
      width: 100%;
      max-width: 912px;
      height: auto;
    }

    .contact-form {
      padding: 1.5rem 1.2rem;
      height: 100%;
    }

    .client-contact-detail label,
    .message-detail label {
      margin-bottom: 0.3rem;
    }

    .client-contact-detail input {
      font-size: 1rem;
      padding-left: 0.5rem;
      height: 3rem;
      width: 89%;
    }

    .message-detail textarea {
      font-size: 1rem;
      padding-left: 0.5rem;
      height: 13rem;
      margin-bottom: 1.5rem;
      width: 89%;
    }

    button.submit-btn {
      margin-top: 0rem;
    }
  }

  @media (max-width: 425px) {
    .details {
      flex-direction: column;
    }

    li.location-icon,
    li.email-icon,
    li.phone-icon {
      margin-bottom: -1rem;
    }

    .section-title-codespac p {
      font-size: 1.2rem;
    }
    .contact-details p {
      margin-top: -1.2rem;
      margin-bottom: 0.2rem;
      font-size: 1.2rem;
    }
  }
`;
