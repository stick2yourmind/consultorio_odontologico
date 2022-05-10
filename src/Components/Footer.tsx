import { FooterStyle } from '../Styles/ComponentStyle'
import instagram from '../assets/svg/instagram.svg'
import email from '../assets/svg/email.svg'
import phone from '../assets/svg/phone.svg'
const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-link-container'>
        <a className='footer-link' target='_blank' href='https://www.instagram.com/dental.mini/' rel="noreferrer"
        >
        <img
              alt='https://www.instagram.com/dental.mini/'
              className='footer-link-img'
              src={instagram}
            />
        </a>
        <a className='footer-link' href='tel:+5449999999999'
        >
        <img
              alt='phone: 4999-9999-9999'
              className='footer-link-img'
              src={phone}
            />
        </a>
        <a className='footer-link' href='mailto:consultorio.dental.mini@gmail.com'
        >
        <img
              alt='phone: 4999-9999-9999'
              className='footer-link-img'
              src={email}
            />
        </a>
      </div>

    </FooterStyle>
  )
}

export default Footer
