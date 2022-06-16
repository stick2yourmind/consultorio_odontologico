import { imgFirstMCardVariant } from '../../Styles/ComponentStyle'
import { dentalPlaqueProfessionals } from '../../assets/mocks/professionals'
import MinimalistCard from '../../Components/MinimalistCard'
import { useDispatch } from 'react-redux'
import { forward } from '../../app/features/appointment/appointmentSlice'
import { PartialData } from '../../../types'

const SecondStep = () => {
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))
  return (
  <div id="card-professional-container">
    {dentalPlaqueProfessionals
      .map(professional =>
        <MinimalistCard
          img={professional.img}
          title={professional.title}
          variant={imgFirstMCardVariant}
          key={professional._id}
          onClick={() => nextHandler({ professional: professional.title })}
        />)
    }
  </div>
  )
}

export default SecondStep
