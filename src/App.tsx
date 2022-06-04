import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/GlobalStyle'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ContactPage from './Pages/ContactPage'
import AppointmentsPage from './Pages/AppointmentsPage'
const theme = { background: '#44d9e6' }

function App () {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
                <Header />
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/contacto" element={<ContactPage/>} />
                        <Route path="/turnos" element={<AppointmentsPage/>} />
                        <Route path="/turnos/:esp" element={<AppointmentsPage/>} />
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
