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
`
