import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  padding:               1% 8%;
  /* background: linear-gradient(rgba(46, 49, 54, 0.6), rgba(40, 41, 46, 0.6)); */
  /* background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));   */

background-color: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(0px);
  color:               #ffffff;
  font-weight:           900;
  font-size: 1rem;
  z-index: 88;
a{
    text-decoration: none;
}

.menu-link{
  text-decoration: none;
  color: inherit;
}

li{
  list-style:            none;
}

li:hover{
  cursor:                pointer;
  color:               #FF6B6B;
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header img{
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
}

.header img:hover{
  cursor:                pointer;
  opacity:               0.5;
  translate:             3s;
}

.nav_menu{
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav_menu ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  gap: 1.5vw;
  flex-wrap: wrap;
}

.nav_socials ul{
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  flex-wrap: wrap;
  gap: 0.5vw;
}

.nav_socials li a{
  font-size: 1.5rem;
  color: #ffffff;
}

.nav_socials a:hover, .mobile-menu{
  cursor:                pointer;
  color:               #888888;
}

.mobile-menu{
  display: none;
}

/* MEDIA QUERY */
@media (max-width: 1024px) {
  padding: 1rem 1.5rem;


}

@media (max-width: 960px) {
  padding: 1rem 3rem;
  font-size: 0.8rem;

.nav_socials{
  display: none;
}
}




@media (max-width: 768px){
padding: 1rem 3.5rem 0rem 3.5rem;
border-radius: 0rem;

/* Latest */
.nav_menu{
  display: none;
}

.github_menu{
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #ffffff;
  margin-bottom: 1.4rem;
}

.mobile-menu{
  display: flex;
  /* justify-content: center;
  align-items: center; */
  font-size: 4rem;
  color: #ffffff;
}

.mobile-menu a{
  height: 5rem;
}
}

@media (max-width: 425px){
  padding: 1rem 2rem 0rem 2rem;

.header img{
  border-radius:         2rem;
}

}
`