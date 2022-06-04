import React from 'react'
import { CarouselContainer, textFirstMCardVariant } from '../Styles/ComponentStyle'
import stepSliderBackward from '../assets/svg/step-slider-backward.svg'
import MinimalistCard from '../Components/MinimalistCard'
import specialities from '../assets/mocks/specialties'
// import dateSlider from '../assets/svg/date-slider-forward.svg'
// import blanqueamiento from '../assets/svg/appointment-specialties/blanqueamiento.svg'

type SPECIALTY = 'specialty'
type PROFESSIONAL = 'professional'
type APPOINTMENT = 'appointment'
type FORM_CONTACT = 'formContact'
type CONFIRMATION_MSG = 'confirmationMsg'

// type Step = {
//   Specialty: SPECIALTY,
//   Professional: PROFESSIONAL,
//   Appointment: APPOINTMENT,
//   FormContact: FORM_CONTACT,
//   ConfirmationMsg: CONFIRMATION_MSG
// }

type AppointmentStepProp = {
  currentStep: SPECIALTY | PROFESSIONAL | APPOINTMENT | FORM_CONTACT | CONFIRMATION_MSG
}

const SpecialtyComponent = () => {
  return (
    <>
      <h3 className='step-title'>Seleccione su especialidad</h3>
      <img className='step-slider' id='step-slider-backward' src={stepSliderBackward} alt="Volver un paso anterior" />
      <div id="card-specialty-container">
        <MinimalistCard img={specialities[0].img} title={specialities[0].title} variant={textFirstMCardVariant}/>
        <MinimalistCard img={specialities[1].img} title={specialities[1].title} variant={textFirstMCardVariant}/>
        <MinimalistCard img={specialities[2].img} title={specialities[2].title} variant={textFirstMCardVariant}/>
        <MinimalistCard img={specialities[3].img} title={specialities[3].title} variant={textFirstMCardVariant}/>
        <MinimalistCard img={specialities[4].img} title={specialities[4].title} variant={textFirstMCardVariant}/>
        <MinimalistCard img={specialities[5].img} title={specialities[5].title} variant={textFirstMCardVariant}/>
      </div>
      <img className='step-slider' id='step-slider-forward' src={stepSliderBackward} alt="Volver un paso anterior" />
    </>
  )
}
const ProfessionalComponent = () => {
  return (
    <>
      <h3 className='step-title'>Seleccione su profesional</h3>
      <img className='step-slider' id='step-slider-backward' src={stepSliderBackward} alt="Volver un paso anterior" />
      <div id="card-professional-container"></div>
      <img className='step-slider' id='step-slider-forward' src={stepSliderBackward} alt="Volver un paso anterior" />
    </>
  )
}
const AppointmentComponent = () => {
  return (
    <h3 className='step-title'>Seleccione horario</h3>
  )
}
const FormContactComponent = () => {
  return (
    <h3 className='step-title'>Ingrese datos de contacto</h3>
  )
}
const ConfirmationMsgComponent = () => {
  return (
    <h3 className='step-title'>Muchas gracias por confirmar el turno!</h3>
  )
}

const stepSelector = {
  specialty: SpecialtyComponent(),
  professional: ProfessionalComponent(),
  appointment: AppointmentComponent(),
  formContact: FormContactComponent(),
  confirmationMsg: ConfirmationMsgComponent()
}

const CarouselStep : React.FC<AppointmentStepProp> = ({ currentStep }) => {
  return (
    <CarouselContainer>
      {stepSelector[currentStep]}

    </CarouselContainer>
  )
}

export default CarouselStep
