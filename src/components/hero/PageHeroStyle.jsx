import styled from "styled-components";

export const PageHeroStyle = styled.div`
    margin: 4rem 8rem;

    .hero-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button.contact-btn{
    background-color: peru;
    border: 1px solid peru;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.5rem 2.5rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #2B0000;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Varela Round', sans-serif;
}

    button.contact-btn:hover{
    background-color: #2B0000;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}

    button.download-btn{
    background-color: transparent;
    border: 1px solid #2B0000;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.5rem 2.5rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #2B0000;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Varela Round', sans-serif;
    
}

    button.download-btn:hover{
    background-color: #2B0000;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}
`
