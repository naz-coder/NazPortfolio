import styled from "styled-components";

export const AboutMeStyle = styled.div`
    margin: 20vh 12vw;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #ece1e1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    a{
        text-decoration: inherit;
    }
    .about-title{
        font-size: 2rem;
        margin-top: 0rem;
        border-left: 3px solid #8B3611;
        padding-left: 0.5rem;
    }

    .skills{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3%;
    }

    .skills label{
        display: block;
        font-weight: 600;
        color: #333333;
    }

    .about-subtitle{
        margin-top: 0rem;
        font-size: 2rem;
        border-left: 3px solid #8B3611;
        padding-left: 0.5rem;
    }

    .about-description-a, .about-description-b, .about-description-c{
        font-weight: 900;
        font-size: 1.2rem;
        color: #333333;
    }

    progress{
        padding: 0.9rem;
        width: 35rem;
        accent-color: #023b02;
        margin-bottom: 0.5rem;
    }

    .hire-me{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2%;
    }

    .action-text{
        font-weight: 900;
        font-size: 1rem;
        color: #000000;
        text-transform: uppercase;
    }

    button.hire-me a{
        color: #ffffff;
    }
    
    button.hire-me{
    background-color: #521d06;
    border: 1px solid #521d06;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.8rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}

button.hire-me:hover{
    background-color: #8B3611;
    border: 1px solid #8B3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}


/* MEDIA QUERY */
@media (max-width: 1024px) {
    margin: 12vh 6vw;

    .about-title{
        font-size: 1.5rem;
    }

    .skills{
        grid-gap: 5%;
    }

    .about-subtitle{
        font-size: 1.5rem;
    }

    .about-description-a, .about-description-b, .about-description-c{
        font-size: 1.1rem;
    }

    progress{
        width: 20rem;
        margin-bottom: 1rem;
    }

}




@media (max-width: 960px){
    margin: 7rem 2rem;
    padding-top: 3rem;

    .about-title{
        font-size: 1.5rem;
    }

    .skills{
        grid-template-columns: 1fr; 
        grid-gap: 5%;
    }

   .about-subtitle{
        font-size: 1.5rem;
    }

    .about-description-a, .about-description-b, .about-description-c{
        font-size: 1.2rem;
    }

    .about-description-c{
        padding-bottom: 0rem;
    }

    progress{
        width: 60vw;
        margin-bottom: 1rem;
    }

    .hire-me{
        padding-bottom: 6rem;
    }

}

@media (max-width: 740px){
    margin: 5rem 1rem;
    padding: 3rem 1rem;

    .skills{
        grid-gap: 3%;
    }

    .hire-me{
        grid-template-columns: 1fr;
    }
    }
`