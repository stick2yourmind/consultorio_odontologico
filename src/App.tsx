import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/GlobalStyle'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/HomePage'
import Header from './Components/Header'
import Footer from './Components/Footer'

const theme = { background: '#44d9e6' }

function App () {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        {/* <Route path="/productos/:categoryId" element={<ItemListContainer />}  />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/contact" element={<Contact />}  />
             */}
                        <Route path='*' element={ <Navigate to='/'/> } />
                    </Routes>
                <Footer/>
            </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
