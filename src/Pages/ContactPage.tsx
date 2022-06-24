import { useState } from 'react'
import { Contact } from '../Styles/PageStyle'
import checked from '../assets/svg/checked.svg'
import { Form } from '../Components/Form'

const ContactPage = () => {
  const [isFormSubmitted, setFormSubmitted] = useState< boolean >(false)
  const handleSubmit = () => {
    console.log('Enviado')
    setFormSubmitted(true)
  }
  return (
      <Contact style={{ background: `url(${new URL('../assets/img/contact-background.jpg', import.meta.url)})`, backgroundSize: 'cover' }}>
        <div className='map-container'>
          <iframe
          id="map-canvas"
          scrolling="no"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Caseros%203000%20piso%2080%20Ciudad%20Autonoma%20de%20Buenos%20Aires+(Consultorio%20dental%20mini)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          />
        </div>
        <div className="form-container">
          {
          !isFormSubmitted
            ? <Form handleSubmit={handleSubmit} confirmSubmit={setFormSubmitted}/>
            : <div id="form-success">
                <img id='form-success-img' src={checked} alt=""/>
                <p id='form-success-msg'> Mensaje enviado </p>
              </div>
          }
        </div>
        <div className="contact-info-container">
          <h4 className="contact-info">Telefono: 4999-9999-9999</h4>
          <h4 className="contact-info">Direccion: Av. Caseros 3000 Piso 80</h4>
          <h4 className="contact-info">Email: consultorio.dental.mini@gmail.com</h4>
          <h4 className="contact-info">Whatsapp: 15688888888888</h4>
        </div>
        {/*
        <Form/>
        <div onClick={() => { setModal(Boolean(isModal === false)) }}>Abrir Modal</div>
        {isModal && (
          <Modal.Background >
            <Modal.Content>
              <p> Contenido de modal </p>
            </Modal.Content>
          </Modal.Background>
        )} */}
      </Contact>
  )
}

export default ContactPage
