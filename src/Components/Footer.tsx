import { FooterStyle } from '../Styles/ComponentStyle'
import email from '../assets/svg/email.svg'
import instagram from '../assets/svg/instagram.svg'
import phone from '../assets/svg/phone.svg'
import whatsapp from '../assets/svg/whatsapp.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-link-container'>
        <a className='footer-link' target='_blank' href='https://www.instagram.com/dental.mini/' rel="noreferrer"
        >
        <img
              alt='Instagram consultorio dental mini'
              className='footer-link-img'
              src={instagram}
            />
        </a>
        <a className='footer-link' target='_blank' href='https://api.whatsapp.com/send?phone=15688888888888' rel="noreferrer"
        >
        <img
              alt='Whatsapp consultorio dental mini'
              className='footer-link-img'
              src={whatsapp}
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
