import styled from "styled-components";

export const ContactStyle = styled.div`
  background-color: whitesmoke;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10vh 12vw 17vh 12vw;

  .contact_wrapper{
    background-color: #ece1e1;
    border: 1px solid #ece1e1;
    background-position: right bottom;
    transition: all 0.5s ease-in-out;
    padding: 5rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.2rem;
    font-weight: 900;
    height: 100%;
  }
  
  
  .contact_section_intro {
    font-size: 3.5rem;
    margin-top: 0rem;
    margin-bottom: 1rem;

  }

  .img_container, .contact-details{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* or any specific height */
  }

  .img_container img {
  width: 25rem;
  height: 25rem;
  
}

  .section-title p {
    font-weight: 900;
    font-size: 1.3rem;
    color: #333333;
    margin-top: -1rem;
  }

  .span_item{
    color: #FF6B6B;
 }

  .contact-outter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
  }

  .contact-details {
    padding: 0.8rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 900;
    height: 100%;
  }

  .details{
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
  }

  button{
    background-color: #33A37C;
    border: 1px solid #33A37C;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.7rem 2.5rem;
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

  button:hover{
    background-color: #c7ecdf;
    border: 1px solid #c7ecdf;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #000000;
    cursor: pointer;
  }

  .socials{
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    margin-top: 1.5rem;
  }


  div.location-icon, div.email-icon, div.phone-icon{
    margin-top: 1.9rem;
    background-color: #114231;
    background-position: right bottom;
    transition: all 0.3s ease-out;
    padding:  0.8rem 0.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    color: #ffffff;
  }

  div.location-icon:hover, div.email-icon:hover, div.phone-icon:hover{
    opacity: 0.9;
    cursor: pointer;
    background-position: left bottom;
    transition: all 0.3s ease-in-out;
    translate: 0.5s;
    background-color: #c7ecdf;
    color: #000000; 
  }

  .contact_msg {
    font-weight: 900;
    font-size: 1.5rem;
    color: #114231;
    margin-top: -1.2rem;
  }

 

  @media (max-width: 1024px) {
  padding: 8vh 6vw;

   .contact_section_intro {
    font-size: 2.2rem;

  }

  .contact-form {
    padding: 1.5rem 2.5rem;
    height: 100%;
  }

  }

  @media (max-width: 960px) {
    padding: 4rem 2rem 10rem 2rem; 
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem 10rem 1rem; 

   .contact_section_intro {
    font-size: 2.5rem;
  }

.contact-outter {
  grid-template-columns: 1fr;
  grid-gap: 5%;
}

.contact-details{
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;

  }

.contact-details p {
  font-size: 1.3rem;
  margin-top: -1rem;
}

.contact-form {
  padding: 1.5rem 1.2rem;
  height: 100%;
}

}

@media (max-width: 425px) {
    .details{
    flex-direction: column;
  }

  .img_container img {
  width: 15rem;
  height: 15rem;
  
}

   .contact_section_intro {
    font-size: 2rem;
  }

  div.location-icon, div.email-icon, div.phone-icon{
    margin-bottom: 1rem;
  }

 .contact_wrapper{
    padding: 5rem 0.1rem;
  }
}
`;
