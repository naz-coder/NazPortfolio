import styled from "styled-components";

export const FooterStyle = styled.div`
  .foot {
  text-align: left;
  background-color: #000000;
  color: #bdc2ca;
  padding: 25px 10px 10px 10px;
  margin-top: 10rem;
  font-size: 12px;
}
.foot_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.foot_flex img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}

.foot_flex img:hover {
  cursor: pointer;
  opacity: 0.7;
  translate: 5s;
}

a{
    text-decoration: none;
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

.copy {
  padding-top: 10px;
  text-align: center;
  font-weight: 900;
  font-size: 10px;
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

.pipe-txt{
  display: none;
}
}

@media (max-width: 320px) {
  .foot{
    padding-left: 5px;
    padding-right: 5px;
  }

  .foot_item p {
  padding: 0 1vw 0 1vw;
}
}
`