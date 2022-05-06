
import styled from 'styled-components'

export const Home = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: aliceblue;
  
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
