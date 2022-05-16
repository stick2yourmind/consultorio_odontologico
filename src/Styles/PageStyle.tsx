
import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: aliceblue;
  padding-bottom: 4rem;

  .main-img-container{
    display:flex;
  }
  .main-img{
    object-fit: cover;
    width: 100%;
  }
  #services-title{
    font-size: 2rem;
    padding:2rem;
    color: #00695C;
  }
`

export const Contact = styled.main`
  padding-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px 100px;
  padding-bottom: 5.5rem;
  background-size: cover;

  .map-container{
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-container{
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-info-container{
    grid-column: 1/3;
    grid-row: 2/3;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .contact-info{
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    padding: 2rem;
    color: #00695C;
    font-size: 1.4rem;
    font-weight: 600;
  }
  #map-canvas{
    width:80%;
    height: 80%;
    border-radius: 1rem;
  }
  #form-success{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    padding: 2rem;
  }
  #form-success-img{
    width: 10rem;
    height: 10rem;
    filter: invert(74%) sepia(49%) saturate(653%) hue-rotate(104deg) brightness(95%) contrast(91%);
  }
  #form-success-msg{  
    color: rgb(40, 230, 173);
    font-size: 2rem;
    padding: 1rem;
    font-weight: 600;
  }
`
