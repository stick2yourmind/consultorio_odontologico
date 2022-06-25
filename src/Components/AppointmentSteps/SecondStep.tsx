import { imgFirstMCardVariant } from '../../Styles/ComponentStyle'
// import { dentalPlaqueProfessionals } from '../../assets/mocks/professionals'
import MinimalistCard from '../../Components/MinimalistCard'
import { useDispatch, useSelector } from 'react-redux'
import { forward } from '../../app/features/appointment/appointmentSlice'
import { PartialData, FetchedProfessionalStep } from '../../../types'
import useAxios from '../../hooks/useAxios'
import axiosDB from '../../app/api/axiosDB'
import { RootState } from '../../app/store'

const SecondStep = () => {
  const specialty = useSelector((state:RootState) => state.appointment.data.specialty)
  const [professionals, error, loading]:FetchedProfessionalStep = useAxios({
    axiosInstance: axiosDB,
    method: 'get',
    url: `/professionals/${specialty}`
  })
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))
  return (
  <>
    <h3 className='step-title'>Seleccione su profesional</h3>
    <div id="card-professional-container">

      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && professionals
        ?.map(professional =>
          <MinimalistCard
            img={professional.img}
            title={professional.name}
            variant={imgFirstMCardVariant}
            key={professional._id}
            onClick={() => nextHandler({ professional: professional._id })}
          />)}

    </div>
  </>
  )
}

export default SecondStep
