import React from 'react'
import { CarouselContainer, textFirstMCardVariant, imgFirstMCardVariant } from '../Styles/ComponentStyle'
import stepSliderBackward from '../assets/svg/step-slider-backward.svg'
import MinimalistCard from '../Components/MinimalistCard'
import specialities from '../assets/mocks/specialties'
import appointments from '../assets/mocks/appointmentMock'
import { whiteningProfessionals, occlusalPlateProfessionals, dentalPlaqueProfessionals, cariesPlaqueProfessionals } from '../assets/mocks/professionals'
// import dateSlider from '../assets/svg/date-slider-forward.svg'
// import blanqueamiento from '../assets/svg/appointment-specialties/blanqueamiento.svg'

type AppointmentStepProp = {
  currentStep: 'specialty' | 'professional' | 'appointment' | 'formContact' | 'confirmationMsg'
}

type movementTypeProps = {
  back: boolean;
  next: boolean;
}

const SpecialtyComponent:React.FC<movementTypeProps> = ({ back, next }) => {
  return (
    <>
      <h3 className='step-title'>Seleccione su especialidad</h3>
      {back && <img className='step-slider' id='step-slider-backward' src={stepSliderBackward} alt="Volver un paso anterior" />}
      <div id="card-specialty-container">
        {specialities
          .map(speciality =>
            <MinimalistCard
              img={speciality.img}
              title={speciality.title}
              variant={textFirstMCardVariant}
              key={speciality._id}
            />)
        }
      </div>
      {next && <img className='step-slider' id='step-slider-forward' src={stepSliderBackward} alt="Volver un paso anterior" />}
    </>
  )
}

const ProfessionalComponent:React.FC<movementTypeProps> = ({ back, next }) => {
  return (
    <>
      <h3 className='step-title'>Seleccione un profesional</h3>
      {back && <img className='step-slider' id='step-slider-backward' src={stepSliderBackward} alt="Volver un paso anterior" />}
      <div id="card-professional-container">
        {cariesPlaqueProfessionals
          .map(professional =>
            <MinimalistCard
              img={professional.img}
              title={professional.title}
              variant={imgFirstMCardVariant}
              key={professional._id}
            />)
        }
      </div>
      {next && <img className='step-slider' id='step-slider-forward' src={stepSliderBackward} alt="Volver un paso anterior" />}
    </>
  )
}

const dayName = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]

const getDayName = (date: string) => {
  const day = new Date(date)
  return dayName[day.getDay()]
}
const getDate = (date: string) => {
  const day = new Date(date)
  return day.getDate()
}
const getMonth = (date: string) => {
  const day = new Date(date)
  return day.getMonth()
}
const getHour = (date: string) => {
  const day = new Date(date)
  return day.getHours()
}
const getMinute = (date: string) => {
  const day = new Date(date)
  const minutes = day.getMinutes()
  if (!minutes) return '00'
  else return minutes
}

const AppointmentComponent:React.FC<movementTypeProps> = ({ back, next }) => {
  return (
    <>
      <h3 className='step-title'>Seleccione un horario</h3>
      {back && <img className='step-slider' id='step-slider-backward' src={stepSliderBackward} alt="Volver un paso anterior" />}
      <div id="card-appointment-container">
        <div className='card-appointment-filter'>
          <button className='card-appointment-filter-button'>Lunes</button>
          <button className='card-appointment-filter-button'>Martes</button>
          <button className='card-appointment-filter-button'>Miercoles</button>
          <button className='card-appointment-filter-button'>Jueves</button>
          <button className='card-appointment-filter-button'>Viernes</button>
        </div>
        <div className='card-appointment-days'>
          <div className='card-appointment-days-item'>
            <h6 className='card-appointment-days-item-title'>{ `${getDayName(appointments[0][0])} ${getDate(appointments[0][0])}/${1 + getMonth(appointments[0][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][0])}:${getMinute(appointments[0][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][1])}:${getMinute(appointments[0][1])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][2])}:${getMinute(appointments[0][2])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][3])}:${getMinute(appointments[0][3])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][4])}:${getMinute(appointments[0][4])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][5])}:${getMinute(appointments[0][5])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][6])}:${getMinute(appointments[0][6])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][7])}:${getMinute(appointments[0][7])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[0][8])}:${getMinute(appointments[0][8])}` }</h6>
          </div>
          <div className='card-appointment-days-item'>
            <h6 className='card-appointment-days-item-title'>{ `${getDayName(appointments[1][0])} ${getDate(appointments[1][0])}/${1 + getMonth(appointments[0][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][0])}:${getMinute(appointments[1][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][1])}:${getMinute(appointments[1][1])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][2])}:${getMinute(appointments[1][2])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][3])}:${getMinute(appointments[1][3])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][4])}:${getMinute(appointments[1][4])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][5])}:${getMinute(appointments[1][5])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][6])}:${getMinute(appointments[1][6])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][7])}:${getMinute(appointments[1][7])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[1][8])}:${getMinute(appointments[1][8])}` }</h6>
          </div>
          <div className='card-appointment-days-item'>
            <h6 className='card-appointment-days-item-title'>{ `${getDayName(appointments[2][0])} ${getDate(appointments[2][0])}/${1 + getMonth(appointments[0][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][0])}:${getMinute(appointments[2][0])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][1])}:${getMinute(appointments[2][1])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][2])}:${getMinute(appointments[2][2])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][3])}:${getMinute(appointments[2][3])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][4])}:${getMinute(appointments[2][4])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][5])}:${getMinute(appointments[2][5])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][6])}:${getMinute(appointments[2][6])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][7])}:${getMinute(appointments[2][7])}` }</h6>
            <h6 className='card-appointment-days-item-date'>{ `${getHour(appointments[2][8])}:${getMinute(appointments[2][8])}` }</h6>
          </div>
        </div>
        <div className='card-appointment-move'>
          <button className="card-appointment-move-button">Turnos anteriores</button>
          <button className="card-appointment-move-button">Turnos siguientes</button>
        </div>
      </div>
      {next && <img className='step-slider' id='step-slider-forward' src={stepSliderBackward} alt="Volver un paso anterior" />}
    </>
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
  specialty: SpecialtyComponent({ back: false, next: false }),
  professional: ProfessionalComponent({ back: true, next: false }),
  appointment: AppointmentComponent({ back: true, next: false }),
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
