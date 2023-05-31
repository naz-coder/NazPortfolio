import styled from "styled-components";

export const PortfolioStyle = styled.div`
    margin: 10vh 12vw;

    .section-title{
        font-size: 2rem;
        margin-top: 0rem;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .section-title h3{
        border-left: 3px solid #8B3611;
        padding-left: 0.5rem;
    }

    .project-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .project-item{
        margin: 2rem;
    }

    .project-item img{
        width: 100%;
        /* max-width: 650px; */
        height: 350px;
        border-radius: 1rem;
    }

    .info-1, .info-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .project-title, .project-credit, .project-stack, .project-link{
        margin-bottom: -1rem;
        font-weight: 900;
        color: #333333;
    }

    .project-link a{
        border-bottom: 2px solid #521d06;
        border-radius: 0.2rem;
        text-decoration: none;
        color: #8B3611;
    }

    .span-item{
        color: #521d06;
        font-size: 1.2rem;
    }

    /* Proect Thumbnail Hover */
    .img-container {
      position: relative;
    }
    
    .image-item {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: .5s ease;
      backface-visibility: hidden;
    }

    .image-item:hover{
        cursor: pointer;
    }
    
    .thumbnail-link {
      transition: .5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }
    
    .img-container:hover .image-item {
      opacity: 0.3;
    }
    
    .img-container:hover .thumbnail-link {
      opacity: 1;
    }
    
    .link-icon a{
      background-color: #521d06;
      font-size: 16px;
      padding: 11px 15px;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      border-radius: 50%;
      text-decoration: none;
      color: white;
    }

    .project-content{
        margin-bottom: 4rem;
    }




@media (max-width: 1024px){
    margin: 6vh 6vw;

    .section-title{
        font-size: 1.7rem;
    }

    .project-item{
        margin: 0 0.6rem;
    }

    .info-1, .info-2{
        display: flex;
        flex-direction: column;
    }

    .span-item{
        font-size: 1.2rem;
    }
}

@media (max-width: 960px){
    margin: 2rem;

    .section-title{
        font-size: 1.7rem;
    }

   .project-container {
        grid-template-columns: 1fr;
    }

    .project-item{
        margin: 0rem 0.6rem;
    }

    .info-1, .info-2{
        display: flex;
        flex-direction: column;
    }

    .span-item{
        font-size: 1.2rem;
    }

    .project-content{
        margin-bottom: 5rem;
    }

}

@media (max-width: 740px){
    .project-item img{
        max-width: 650px;
        height: 300px;
    }
}

@media (max-width: 425px){
margin: 2rem 1rem;
.project-item img{
        max-width: 650px;
        height: 250px;
    }
}


`
