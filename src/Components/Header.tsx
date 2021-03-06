import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from '../Styles/ComponentStyle'
import logo from '../../src/logo.svg'

function Header () {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const HEADER_HEIGHT_PX = 59
    const scrollFn = () => {
      ((window.scrollY > HEADER_HEIGHT_PX) && !scrolled)
        ? setScrolled(true)
        : ((window.scrollY < HEADER_HEIGHT_PX) && scrolled) &&
          setScrolled(false)
    }
    window.addEventListener('scroll', scrollFn, { passive: true })
    return () => window.removeEventListener('scroll', scrollFn)
  }
  , [scrolled])
  return (
        <header>
        <Nav scrolled={scrolled}>
            <h1 className='navbar-brand'>
                <Link
                    className='navbar-link'
                    to="/">
                  Dental Mini
                  <img
                    alt='logo'
                    className='navbar-logo'
                    src={logo}
                  />
                </Link>
            </h1>
            <div className='navbar-ux'>
              <ul className='navbar-sections'>
                <li
                    className='navbar-item'>
                    <NavLink
                        className='navbar-link'
                        to="/"
                    >
                      Inicio
                    </NavLink>
                </li>
                <li
                    className='navbar-item'>
                    <NavLink
                        className='navbar-link'
                        to="/turnos"
                    >
                      Turnos
                    </NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink
                        className='navbar-link'
                        to="contacto"
                    >
                      Contacto
                    </NavLink>
                </li>
            </ul>
            </div>
        </Nav>
        </header>
  )
}

export default Header
