import styled from "styled-components";

export const PageHeroStyle = styled.div`
    margin: 15vh 12vw;

    .hero-container{
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
    .section-title{
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-bottom: -3rem;
        border-left: 3px solid #8B3611;
        padding-left: 0.5rem;
    }

    .section-name{
        font-weight: 900;
        text-transform: capitalize;
        font-size: 6rem;
        line-height: 6rem;
        margin-bottom: 2rem;
        color: #521d06;
    }

    .section-description{
        font-weight: 900;
        font-size: 2rem;
        color: #333333;
    }

    .section-description-main{
        font-weight: 900;
        font-size: 1.50rem;
        color: #000000;
        text-transform: uppercase;
    }

.hero-img{
    padding: 2rem;
    animation: wiggle 5s linear infinite;
    align-items: center;
    justify-content: center;
}

.hero-img img{
    width: 100%;
    max-width: 800px;
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
    margin: 6vh 6vw;

    .description{
        margin-right: 5.5vw;
    }

    .section-title{
    margin-bottom: -1.3rem;
    
}
    .section-name{
        font-size: 4rem;
        line-height: 4rem;
        margin-bottom: 1rem;
    }

}

@media (max-width: 960px){
    margin: 2rem;

.description{
    margin-right: 0vw;
}

.hero-container{
    flex-direction: column;
}

.description{
    padding-right: 0rem;
}
.section-title{
    font-size: 1.2rem;
    margin-bottom: -1.5rem;
}

.section-name{
    font-size: 3rem;
    margin-bottom: -1.5rem;
    line-height: 4rem;
}

.section-description{
    font-size: 1.2rem;
}


.hero-img{
padding: 2rem;
display: flex;
margin-top: -2rem;
}

.hero-img img{
    width: 100%;
    max-width: 550px;
    height: auto;
}
}

@media (max-width: 740px){
.section-title{
    font-size: 1.1rem;
    margin-bottom: -1.7rem;
}

.section-name{
    font-size: 2.5rem;
    margin-bottom: 0rem;
    line-height: 3rem;
}

.section-description{
    font-size: 1.2rem;
}

}

@media (max-width: 425px){
margin: 2rem 1rem;

.section-title{
    font-size: 1rem;
    margin-bottom: -1rem;
}

.section-name{
    font-size: 2rem;
    margin-bottom: -0.5rem;
    line-height: 2.5rem;
}

.section-description{
    font-size: 1.2rem;
}

}


`
