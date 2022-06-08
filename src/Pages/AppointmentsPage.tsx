import { useParams } from 'react-router-dom'
import { AppointmentContainer } from '../Styles/PageStyle'
import CarouselStep from '../Components/CarouselStep'

const AppointmentsPage = () => {
  const { esp: speciality } = useParams()
  return (
    <AppointmentContainer>
        <CarouselStep currentStep='confirmationMsg' />
        {speciality}
    </AppointmentContainer>
  )
}

export default AppointmentsPage
