import { textFirstMCardVariant } from '../../Styles/ComponentStyle'
import MinimalistCard from '../../Components/MinimalistCard'
import { useDispatch } from 'react-redux'
import { forward } from '../../app/features/appointment/appointmentSlice'
import { PartialData, FetchedSpecialtyStep } from '../../../types'
import useAxios from '../../hooks/useAxios'
import axiosDB from '../../app/api/axiosDB'

const FirstStep = () => {
  const [specialties, error, loading]:FetchedSpecialtyStep = useAxios({
    axiosInstance: axiosDB,
    method: 'get',
    url: '/specialties'
  })
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))

  return (
  <>
    <h3 className='step-title'>Seleccione su especialidad</h3>
    <div id="card-specialty-container">

      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && specialties && specialties?.map(speciality =>
      <MinimalistCard
        img={speciality.imgSvg}
        title={speciality.summary}
        variant={textFirstMCardVariant}
        key={speciality._id}
        onClick={() => nextHandler({ specialty: speciality._id })}
      />)}
    </div>
  </>
  )
}

export default FirstStep
