import styled from "styled-components";

export const AboutMeStyle = styled.div`
    margin: 20vh 8vw 15vh 8vw;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 0.2px solid rgba(245, 199, 199, 0.3);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    a{
        text-decoration: inherit;
    }
    .about-subtitle, .about-title{
        font-size: 4rem;
        margin-top: 0rem;
        color: #ffffff;
    }

    .span_item{
    color: #33A37C;
}
    .skills{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3%;
    }

    .category_title{
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 900;
    text-transform: uppercase;
}
   .individual_tools{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    grid-gap: 3%;
}

   .individual_tools_small{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
}

.tool_icon_outter img{
    width: 60px;
    height: 60px;
}

.tool_title{
    color: #ffffff;
    font-size: 1rem;
    margin-top: -0.2rem;
}

    .about-description-a{
        font-weight: 900;
        font-size: 1.5rem;
        color: #ffffff;
        text-align: justify;
    }

    .hire-me{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2%;
    }

    .action-text{
        font-weight: 900;
        font-size: 1rem;
        color: #ffffff;
        text-transform: uppercase;
    }

    button.hire-me a{
        color: #ffffff;
    }
    
    button.hire-me{
    background-color: #FF6B6B;
    border: 1px solid #FF6B6B;
    border-radius: 0.5rem;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.7rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    font-weight: 900;

}

button.hire-me:hover{
    background-color: #d85e5e;
    border: 1px solid #d85e5e;
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

        .category_title{
    font-size: 1rem;
}

.tool_title{
    font-size: 1rem;
}

    .skill-level-code{
    padding-bottom: 4rem;
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

    .skill-level-code{
    padding-bottom: 6rem;
    }

    .category_title_style{
    margin-top: 2rem;
}


    .individual_tools_small{
    grid-template-columns: repeat(3, 1fr);
}

.tool_title{
    font-size: 0.9rem;
}
    }
`