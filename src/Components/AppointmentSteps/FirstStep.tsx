import { textFirstMCardVariant } from '../../Styles/ComponentStyle'
import specialities from '../../assets/mocks/specialties'
import MinimalistCard from '../../Components/MinimalistCard'
import { useDispatch } from 'react-redux'
import { forward } from '../../app/features/appointment/appointmentSlice'
import { PartialData } from '../../../types'

const FirstStep = () => {
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))
  return (
  <div id="card-specialty-container">
  {specialities
    .map(speciality =>
      <MinimalistCard
        img={speciality.img}
        title={speciality.title}
        variant={textFirstMCardVariant}
        key={speciality._id}
        onClick={() => nextHandler({ specialty: speciality.title })}
      />)
  }
</div>
  )
}

export default FirstStep
