import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Raleway;
  font-size: 10px;
  }

  body {
    /* height: 100vh; */
    background: aliceblue;
  }
  main{
    padding-top: 6.8rem;
  }
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  ::selection {
  color: aliceblue;
  background: #147356;
}
.errMsg{
  font-size: 1rem;
  font-weight: 800;
  background-color: #7B1E2C;
  color: aliceblue;
  padding: 0.2rem;
}
`
