
import styled from 'styled-components'

export const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* background: #393c83; */
  /* background: #161429; */
  /* background: hsl(162deg 79% 53% / 81%); */
  // background: #e6448d,
  background:  ${({ scrolled }) => (scrolled ? 'rgba(40, 230, 173, 0.6)' : 'rgba(40, 230, 173, 1)')};
  padding: 1.5rem 4rem;
  
  .navbar-brand{
    font-size: 2.4rem;
  }
  .navbar-ux{
    display: flex
  }
  
  .navbar-sections{
    display: flex;
    gap: 1rem;
  }

  .navbar-item{
    font-size: 1.6rem;
  }
  .navbar-link {
    color: #00695C;
    font-weight: bold;
    font-size:inherit;
    padding: 0.5rem;
    border: 0;
    &.active{
      color: #e6448d;
      background: #004147;
      color:aliceblue;
      padding: 1rem;
      border-radius: 1.1rem;  
    }
  }
`

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 100%;
  background-color: aliceblue;
  border-radius: 0.8rem;  
  flex-wrap: wrap;
  height: 24rem;
  
  :nth-child(8n-1) {
    width:40rem;
    transform: translate(40rem, 0);
    /* grid-column: 1/-1; */
    /* transform: translate(50%, 0); */
  }
  :nth-child(8n-1) > h6{
    width:40rem;
    /* transform: translate(50%, 0); */
  /* min-width: 40rem;
  transform: translate(-80rem, 0); */
  }
  
  :hover > h6{
  visibility: visible;
  background: #ffffffe6;
  color: #00695C;
  font-size: 1.5rem;
  min-height: 10rem;
  }
  .img-card-container{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  }
  .img-card{
    
  height:24rem;
  object-fit: cover; 
  width: 100%;
  max-width: 40rem;
  }
  .title-card{
    /* transform: translate(0, -12rem); */
    user-select: none;
    transform: translate(-100%,0rem);
    /* background: blue; */
    min-height: 24rem;
    display:flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    color: white;
    visibility: hidden;
    transition: min-height ease 0.2s, color cubic-bezier(.95,.05,.8,.04) 0.3s;
    /* transition: color linear 5s; */
    /* transition: min-height linear 0.2s; */
    /* transition: color linear 0.8s; */
  }
  /* .title-card:hover{
    transform: translate(0, -12rem);
  } */
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38.4rem, 40rem));
  width: 100%;
  max-width: 120rem;
  justify-content:center;
`
