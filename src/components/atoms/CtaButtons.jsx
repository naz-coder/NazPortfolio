import React from 'react'
import styled from 'styled-components';
import FavourChinazaAnajembaResume from "../../assets/FavourChinazaAnajembaResume.pdf";
import { Link } from 'react-router-dom';

const CtaButtons = ({buttonText}) => {
    const contactScrollHandler = () => {
    const sectionElement = document.getElementById("contact");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  return (
    <ButtonStyle>
        <div className='btn-outter'>
            <Link onClick={contactScrollHandler} to='/' className='menu-link'><button className='primary-btn'>{buttonText}</button></Link>
            <a href={FavourChinazaAnajembaResume} download className='download-btn'> Get My CV</a>
        </div>
    </ButtonStyle>
  )
}

export default CtaButtons;

export const ButtonStyle = styled.div`
    a{
        text-decoration: none;
    }

    .menu-link{
        margin-right: 1rem;
    }

    button.primary-btn{
    background-color: #33A37C;
    border: 1px solid #33A37C;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.7rem 2.5rem;
    margin-top: 2rem;
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

    button.primary-btn:hover{
    background-color: #c7ecdf;
    border: 1px solid #c7ecdf;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #000000;
    cursor: pointer;
}

    a.download-btn{
    background-color: transparent;
    border: 3px double #333333;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.6rem 2.5rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #333333;
    font-size: 1.2rem;
    font-weight: 900;
}

    a.download-btn:hover{
    background-color: #c7ecdf;
    border: 3px double #000000;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #000000;
    cursor: pointer;
}


@media (max-width: 1024px){
    button.primary-btn{
    margin-top: 1.7rem;
    }

}

@media (max-width: 960px){
button.primary-btn{
padding: 1rem 2.5rem;
margin-top: 1rem;
margin-right: 2rem;
margin-bottom: 3rem;
font-size: 1.2rem;
}

a.download-btn{
padding: 0.6rem 2.5rem;
margin-top: 1rem;
font-size: 1.2rem;
}

}

@media (max-width: 740px){
button.primary-btn{
margin-right: 0rem;
margin-bottom: 1rem;
padding: 0.5rem 1.5rem;
}

a.download-btn{
margin-bottom: 2rem;
padding: 0.4rem 1.5rem;

}

}

@media (max-width: 425px){
.btn-outter{
    margin-bottom: -2rem;

}

button.primary-btn{
padding: 0.5rem 1rem;
}

a.download-btn{
margin-bottom: 2rem;
padding: 0.4rem 1rem;

}
}

`