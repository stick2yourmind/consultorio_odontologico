import { groupByDay } from '../../utils/date'
import { FetchedAppointmentsStep } from '../../../types'
import useAxios from '../../hooks/useAxios'
import axiosDB from '../../app/api/axiosDB'
import CardAppointment from '../CardAppointment'

const ThirdStep = () => {
  const [appointments2, error, loading]:FetchedAppointmentsStep = useAxios({
    axiosInstance: axiosDB,
    method: 'get',
    url: '/appointments'
  })
  const groupedAppointments = groupByDay(appointments2)
  console.log('groupedAppointments')
  console.log(groupedAppointments)
  console.log('groupedAppointments.length')
  console.log(groupedAppointments.length)
  return (
    <div id="card-appointment-container">
      <div className='card-appointment-filter'>
        <button className='card-appointment-filter-button'>Lunes</button>
        <button className='card-appointment-filter-button'>Martes</button>
        <button className='card-appointment-filter-button'>Miercoles</button>
        <button className='card-appointment-filter-button'>Jueves</button>
        <button className='card-appointment-filter-button'>Viernes</button>
      </div>
      <div className='card-appointment-days'>
        {loading && <p>Loading...</p>}
        {!loading && error && <p className="errMsg">{error}</p>}
        {!loading && !error && groupedAppointments.map((gapp) =>
          <CardAppointment dates={gapp} key={gapp?.at(-1)?._id}/>)
        }
      </div>
      <div className='card-appointment-move'>
        <button className="card-appointment-move-button">Turnos anteriores</button>
        <button className="card-appointment-move-button">Turnos siguientes</button>
      </div>
    </div>
  )
}

export default ThirdStep
