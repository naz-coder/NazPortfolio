import styled from "styled-components";
import servicesBg from "../../assets/servicesBg.jpg";
import patternBg from "../../assets/serviceBg.jpg";

export const ServiceStyle = styled.div`
    background-color: whitesmoke;
    padding: 1rem 0;
    background-image: url(${servicesBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .service-outter {
    margin: 8vh 12vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4%;
}

.service-content{
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-content h3{
    font-size: 1.4rem;
    border-left: 3px solid #8B3611;
    padding-left: 0.5rem;
}

.service-content h1{
    color: #521d06;
    font-size: 1.8rem;
    margin-top: -1rem;
}

.service-content p{
    font-weight: 900;
    font-size: 1.2rem;
    color: #333333;
    margin-top: -1rem;
}

.service-group-1, .service-group-2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6%;
    margin-bottom: 5rem;
}

.cards-1, .cards-2, .cards-3, .cards-4{
    background-color: #ece1e1;
    border: 1px solid #ece1e1;
    background-position: right bottom;
    transition: all 0.5s ease-in-out;
    padding: 0.8rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.2rem;
    font-weight: 900;
    height: 100%;
    animation: growCards 1s ease-in;
    animation-iteration-count: 1;
}

@keyframes growCards {
      0%{transform: scale(0, 0.25);}
      50%{transform: scale(1, 0.25)}
    }

.cards-1:hover, .cards-2:hover, .cards-3:hover, .cards-4:hover{
    background-position: left bottom;
    transition: all 0.5s ease-out;
    padding: 0.8rem 2.5rem;
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.05);
}

.card-title-outter{
    display: flex;
    flex-direction: row;
    column-gap: 5%;
    padding-top: 1rem;
}

.card-title-outter img{
    width: 40px;
    height: 40px;
}

.service-title{
    color: #521d06;
    font-size: 1.4rem;
    margin-bottom: -0.5rem;
    font-weight: 900;
    margin-top: 0;
}

.service-description{
    font-weight: 900;
    font-size: 1.1rem;
    color: #333333;
}


@media (max-width: 1550px){
    .service-outter {
    margin: 6vh 6vw;
    grid-template-columns: 1fr;
}


}

@media (max-width: 960px){
    .service-outter {
    margin: 2rem;
}

}

@media (max-width: 740px){
    padding-bottom: 3rem;
    .service-outter {
    margin: 2rem;
    grid-template-columns: 1fr;
}

.service-group-1, .service-group-2{
    grid-template-columns: 1fr;
    grid-gap: 4.5rem;
    margin-bottom: 4.5rem;
}

.cards-1, .cards-2, .cards-3, .cards-4{
    padding: 1rem 1rem;
    height: 100%;
}

.service-title{
    font-size: 1.2rem;
}

.service-content p{
    font-size: 1rem;
}

}


`
