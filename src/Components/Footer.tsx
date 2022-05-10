import { FooterStyle } from '../Styles/ComponentStyle'
import instagram from '../assets/svg/instagram.svg'
import email from '../assets/svg/email.svg'
import phone from '../assets/svg/phone.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-link-container'>
        <Link className='footer-link' target='_blank' to='#'>
        <img
              alt='https://www.instagram.com/dental.mini/'
              className='footer-link-img'
              src={instagram}
              onClick={(e) => {
                window.location.href = 'https://www.instagram.com/dental.mini/'
                e.preventDefault()
              }}
            />
        </Link>
        <Link className='footer-link' to='#'>
        <img
              alt='phone: 4999-9999-9999'
              className='footer-link-img'
              src={phone}
              onClick={(e) => {
                window.location.href = 'tel:+5449999999999'
                e.preventDefault()
              }}
            />
        </Link>
        <Link className='footer-link' to='#'>
        <img
              alt='phone: 4999-9999-9999'
              className='footer-link-img'
              src={email}
              onClick={(e) => {
                window.location.href = 'mailto:atencion.chevrolet@gm.com'
                e.preventDefault()
              }}
            />
        </Link>
      </div>

    </FooterStyle>
  )
}

export default Footer
