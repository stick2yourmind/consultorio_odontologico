import { AppointmentContainer } from '../Styles/PageStyle'
import Slider from '../Components/Slider'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store'
import { forward, backward, appointmentSteps } from '../app/features/appointment/appointmentSlice'
import FirstStep from '../Components/AppointmentSteps/FirstStep'
import SecondStep from '../Components/AppointmentSteps/SecondStep'
import ThirdStep from '../Components/AppointmentSteps/ThirdStep'
import FourthStep from '../Components/AppointmentSteps/FourthStep'
import FifthStep from '../Components/AppointmentSteps/FifthStep'

const steps = [
  { component: <FirstStep key={appointmentSteps.specialty}/>, back: false, next: false },
  { component: <SecondStep key={appointmentSteps.professional}/>, back: true, next: false },
  { component: <ThirdStep key={appointmentSteps.appointment}/>, back: true, next: false },
  { component: <FourthStep key={appointmentSteps.formContact}/>, back: true, next: false },
  { component: <FifthStep key={appointmentSteps.confirmationMsg}/>, back: false, next: false }
]

const AppointmentsPage = () => {
  const step = useSelector((state:RootState) => state.appointment.step)
  const dispatch = useDispatch()
  return (
    <AppointmentContainer>
        {/* <CarouselStep currentStep='confirmationMsg'/> */}
        <Slider back={steps[step].back} next={steps[step].next}
          backHandler={() => dispatch(backward(null))}
          nextHandler={() => dispatch(forward(null))}>
          {steps[step].component}
        </Slider>
    </AppointmentContainer>
  )
}

export default AppointmentsPage
