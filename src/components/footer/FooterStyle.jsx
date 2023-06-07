import styled from "styled-components";

export const FooterStyle = styled.div`

  .foot {
  text-align: left;
  background-color: #000000;
  color: #bdc2ca;
  padding: 40px 10px 10px 10px;
  margin-top: 10rem;
  font-size: 16px;
  font-weight: 900;
}

.foot p:hover, .copy:hover{
  cursor: pointer;
  color: #ece1e1;
  transition: all ease-in-out;
  translate: 0.3s;

}

.foot_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_flex img {
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
}

.foot_flex img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

.logo-hire{
  display: block;
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
    padding: 0.5rem 2.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    font-weight: 900;
    margin-bottom: 1rem;
}

button.hire-me:hover{
    background-color: #8B3611;
    border: 1px solid #8B3611;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
}

a{
    text-decoration: none;
}

.menu-link{
  text-decoration: none;
  color: inherit;
}

.nav_socials a{
  margin-right: 0.8rem;
  margin-top:         -0.5rem;
  margin-bottom:      -1rem;
  font-size:          1.5rem;
  color: #ffffff;
}

.nav_socials a:hover{
  cursor:                pointer;
  color:               #888888;

}
.foot_item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_item:hover{
  cursor: pointer;
  /* font-weight: 900; */
}

.foot_item p {
  padding: 0 7px 0 7px;
  margin-bottom: 15px;
  padding-top: 1px;
}

.social_icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
}

.top-icon{
  font-size: 2.5rem;
}

.up-icon-link{
  text-decoration: none;
  color: #bdc2ca;
}

.top-icon:hover{
  /* color: #8B3611; */
  cursor: pointer;
  color: #ece1e1;
  transition: all ease-in-out;
  translate: 0.3s;
}

.copy {
  padding-top: 10px;
  text-align: center;
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  border-top: #bdc2ca;
}

/* MEDIA QUERY */
@media (max-width: 960px) {
}

@media (max-width: 768px) {
  .foot_flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .footer-menu-items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.5rem;
    margin-top: -1rem;
  }
  .footer-item-p{
    margin-top: -0.8%;
  }
  .footer-menu-subtitle-socials{
    display: none;
  }
  .footer-menu-items-1, .footer-menu-items-2, .footer-menu-items-3, .footer-menu-items-4{
  margin-top: 0.5rem;
}
}

@media (max-width: 425px) {
  .foot_item p {
  padding: 0 1vw 0 1vw;
}

.sm_contact{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


}

@media (max-width: 340px) {
  .foot{
    padding-left: 5px;
    padding-right: 5px;
  }

  .foot_item p {
  padding: 0 1vw 0 1vw;
}

.footer-menu-subtitle{
  margin-bottom: 0rem;
}
.footer-menu-items{
    display: block;
    margin-top: 0rem;
}

.footer-menu-items-2, .footer-menu-items-3, .footer-menu-items-4{
  margin-top: -0.5rem;
}
}
`