import styled from "styled-components";
import contact from "../../assets/contact.jpg";

export const ContactStyle = styled.div`
  background-color: whitesmoke;
  /* padding: 1rem 0; */
  /* background-image: url(${contact}); */
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${contact}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* padding: 8rem 10rem; */
  padding: 10vh 12vw;
  
  .section-title h3 {
    font-size: 2rem;
    margin-top: 0rem;
    border-left: 3px solid #8b3611;
    padding-left: 0.5rem;
  }

  .section-title p {
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

  .contact-details h3 {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
  }

  .contact-details p {
    font-weight: 500;
    font-size: 1.3rem;
    color: #521d06;
    margin-top: -1rem;
  }

  iframe{
    width: 25vw;
    height: 35vh;
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
    /* border-radius: 0 8px 0 8px; */
    border: 1px solid #aeb1b3;
    /* padding-bottom: 2px; */
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
  }

  .client-contact-detail input:focus, .message-detail textarea:focus {
    outline: none;
  }

  .client-contact-detail input::placeholder, .message-detail textarea::placeholder {
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
    /* border-radius: 0 8px 0 8px; */
    border: 1px solid #aeb1b3;
    /* padding-bottom: 2px; */
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    resize: none;
  }

  .message-detail textarea::-webkit-scrollbar{
    display: none;
  }

  button.submit-btn {
    background-color: #521d06;
    border: 1px solid #521d06;
    /* border-radius: 0.5rem; */
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 1rem 2.5rem;
    margin-top: 0rem;
    margin-right: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
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

  @media (max-width: 1024px) {
  padding: 6vh 6vw 20vh 6vw;

  .section-title h3 {
    font-size: 2rem;
    margin-top: 0rem;
    border-left: 3px solid #8b3611;
    padding-left: 0.5rem;
  }

  .section-title p {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
    margin-top: -1rem;
  }

  .contact-outter {
    grid-template-columns: 1fr;
    grid-gap: 5%;
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
    margin-top: -1rem;
  }

  iframe{
    width: 80vw;
    height: 35vh;
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
    padding: 4rem 2rem 10rem 2rem; 
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem 10rem 1rem; 

.section-title h3 {
  font-size: 2rem;
  margin-top: 0rem;
  border-left: 3px solid #8b3611;
  padding-left: 0.5rem;
}

.section-title p {
  font-weight: 900;
  font-size: 1.3rem;
  color: #333333;
  margin-top: -1rem;
}

.contact-outter {
  grid-template-columns: 1fr;
  grid-gap: 5%;
}

.contact-details{
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;
    height: 100%;

  }

  /* .contact-form {
    padding: 0.8rem 0.5rem;
    font-size: 1.2rem;
    height: 100%;
  } */

.contact-details h3 {
  font-weight: 900;
  font-size: 1.3rem;
  color: #333333;
}

.contact-details p {
  font-weight: 500;
  font-size: 1.3rem;
  color: #521d06;
  margin-top: -1rem;
}

iframe{
  width: 80vw;
  height: 35vh;
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
`;
