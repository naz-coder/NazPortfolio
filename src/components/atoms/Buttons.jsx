import React from 'react'
import styled from 'styled-components';
import FavourChinazaAnajembaResume from "../../assets/FavourChinazaAnajembaResume.pdf";
import { Link } from 'react-router-dom';

const Buttons = ({buttonText}) => {
  return (
    <ButtonStyle>
        <div className='btn-outter'>
            <button className='primary-btn'><Link to='/contact' className='menu-link'>{buttonText}</Link></button>
            <a href={FavourChinazaAnajembaResume} download className='download-btn'> Get My CV</a>
        </div>
    </ButtonStyle>
  )
}

export default Buttons;

export const ButtonStyle = styled.div`
    a{
        text-decoration: none;
    }

    button.primary-btn{
    background-color: #521d06;
    border: 1px solid #521d06;
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
    background-color: #8B3611;
    border: 1px solid #8B3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}

    a.download-btn{
    background-color: transparent;
    border: 3px double #2B0000;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.6rem 2.5rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #521d06;
    font-size: 1.2rem;
    font-weight: 900;
}

    a.download-btn:hover{
    background-color: #8B3611;
    border: 3px double #8B3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}

.primary-btn a{
    color: #ffffff;
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
.btn-outter{
    display: grid;
    grid-template-columns: 1fr;
    margin-right: 25%;
}
button.primary-btn{
margin-right: 0rem;
margin-bottom: 1rem;
}

a.download-btn{
margin-bottom: 2rem;
}

}

@media (max-width: 425px){
.btn-outter{
    margin-right: 5%;
}
}

`