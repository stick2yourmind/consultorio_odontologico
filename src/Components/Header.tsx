import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from '../Styles/ComponentStyle'

function Header () {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const HEADER_HEIGHT_PX = 59
    const scrollFn = () => {
      ((window.scrollY > HEADER_HEIGHT_PX) && !scrolled)
        ? setScrolled(true)
        : ((window.scrollY < HEADER_HEIGHT_PX) && scrolled) &&
          setScrolled(false)

      // if ((window.scrollY > HEADER_HEIGHT_PX) && !scrolled) {
      //   console.log('scrolled actual: ', scrolled)
      //   setScrolled(true)
      // } else if ((window.scrollY < HEADER_HEIGHT_PX) && scrolled) {
      //   console.log('scrolled actual: ', scrolled)
      //   setScrolled(false)
      // }
    }
    window.addEventListener('scroll', scrollFn, { passive: true })
    return () => window.removeEventListener('scroll', scrollFn)
  }
  , [scrolled])
  return (
        <Nav scrolled={scrolled}>
            <h1 className='navbar-brand'>
                <Link
                    className='navbar-link'
                    to="/">
                  Dental Mini
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
  )
}

export default Header
