import React from 'react'
import stepSliderBackward from '../assets/svg/step-slider-backward.svg'
import { CarouselContainer } from '../Styles/ComponentStyle'

interface contactInfoIF{
  fullName: string | null,
  dni: string | null,
  email: string | null,
  phone: string | null
}
interface dataInterfaceIF{
  specialty: string | null,
  professional: string | null,
  appointment: string | null,
  contactInfo: contactInfoIF
}

interface movementTypeProps {
  back: boolean;
  next: boolean;
  backHandler: (Args: string | void) => void;
  nextHandler: (arg: dataInterfaceIF | void) => void;
  children: React.ReactNode
}

const Slider:React.FunctionComponent<movementTypeProps> =
  ({ back, next, backHandler, nextHandler, children }) => {
    return (
      <CarouselContainer>
        {back &&
          <img className='step-slider' id='step-slider-backward' src={stepSliderBackward}
            alt="Volver un paso anterior" onClick={() => backHandler()}
          />}
        {children}
        {next &&
          <img className='step-slider' id='step-slider-forward' src={stepSliderBackward}
            alt="Volver un paso anterior" onClick={() => nextHandler()}
          />}
      </CarouselContainer>
    )
  }

export default Slider
