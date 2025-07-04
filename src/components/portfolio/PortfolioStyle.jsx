import styled from "styled-components";

export const PortfolioStyle = styled.div`
    margin: 8vh 8vw;

    .section-title{
        font-size: 2rem;
        margin-top: 0rem;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .section-title h3{
        color: #ffffff;
        font-size: 4rem;
        margin-bottom: 1rem;

    }

    .span_item{
     color: #33A37C;
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
        height: 350px;
        border-radius: 1rem;
    }

    .info-1, .info-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .project-title, .project-stack, .project_description{
        margin-bottom: -1rem;
        font-weight: 900;
        color: #ffffff;
        text-align: justify;
    }

    .project-link a{
        border-bottom: 2px solid #FF6B6B;
        border-radius: 0.2rem;
        text-decoration: none;
        color: #FF6B6B;
    }

    .span-item{
        color: #FF6B6B;
        font-size: 1.2rem;
    }

    /* Project Thumbnail Hover */
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
      background-color: #FF6B6B;
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

      .section-title h3{
        font-size: 3rem;
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
    margin: 2vh 6vw;

      .section-title h3{
        font-size: 2.5rem;
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
    .section-title h3{
    font-size: 2.2rem;
}

    .project-item img{
        max-width: 650px;
        height: 300px;
    }

    
}

@media (max-width: 425px){
margin: 2rem 1rem;
.project-item img{
        max-width: 650px;
        height: 200px;
    }
}


`
