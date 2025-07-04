import styled from "styled-components";

export const PageHeroStyle = styled.div`
    .hero-container{
        margin: 15vh 8vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    .description{
        margin-right: 5.5vw;
        animation: 2s anim-lineUp ease-out 1;
    }
    @keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

.span_item{
    color: #33A37C;
}
    .section-title{
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.5rem;
        padding-left: 0.5rem;
    }

    .section-name{
        font-weight: 900;
        font-size: 5.5rem;
        line-height: 6rem;
        margin-bottom: 2rem;
        color: #ffffff;
    }

    .section-description{
        font-weight: 900;
        font-size: 1.7rem;
        color: #FF6B6B;
        margin-top: -1rem;
    }

    .section-description-main{
        font-weight: 900;
        font-size: 2rem;
        color: #ffffff;
        margin-top: -1rem;
    }

.hero-img{
    padding: 2rem;
    animation: wiggle 5s linear infinite;
    align-items: center;
    display: flex;
    justify-content: center;
}

.hero-img img{
    width: 100%;
    height: auto;
}



@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

@media (max-width: 1024px){
    margin: 6vh 0vw;

    .description{
        margin-right: 5.5vw;
    }
    

    .section-name{
        font-size: 4rem;
        line-height: 4rem;
        margin-bottom: 1.5rem;
    }

    .section-description-main{
        font-size: 1.4rem;

    }

}

@media (max-width: 960px){
    margin: 0.1rem;

.description{
    margin-right: 0vw;
}

.hero-container{
    flex-direction: column;
}

.description{
    padding-right: 0rem;
}

.section-name{
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 4rem;
}

.section-description{
    font-size: 1.5rem;
}

.section-description-main{
        font-size: 1.2rem;
}


.hero-img{
padding: 2rem;
display: flex;
margin-top: -2rem;
}

.hero-img img{
    width: 100%;
    height: auto;
}
}

@media (max-width: 740px){
.section-name{
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 3rem;
}

.section-description{
    font-size: 1.2rem;
    margin-bottom: 1.5rem;

}

}

@media (max-width: 425px){
margin: 0.1rem 0.1rem;


    .hero-container{
        margin: 10vh 8vw;
    }

.section-name{
    font-size: 2rem;
    line-height: 2.5rem;
}

.section-description{
    font-size: 1.2rem;
}

.section-description-main{
    font-size: 1rem;
}

.hero-img img{
    width: 25rem;
    height: auto;
}
}

@media (max-width: 340px) {
    .hero-img img{
    width: 21rem;
    height: auto;
}

}


`
