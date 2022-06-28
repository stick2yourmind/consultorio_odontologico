import { groupByDay } from '../../utils/date'
import { FetchedAppointmentsStep } from '../../../types'
import useAxios from '../../hooks/useAxios'
import axiosDB from '../../app/api/axiosDB'
import CardAppointment from '../CardAppointment'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { previousAppointments, nextAppointments, setGroupedAppointments, daySelector } from '../../app/features/appointment/thirdStepSlice'
import { useEffect } from 'react'

export enum Days{
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const ThirdStep = () => {
  const dispatch = useDispatch()
  const manipulatedGroupedAppointments = useSelector((state:RootState) => state.thirdStep.manipulatedGroupedAppointments)
  const enableNext = useSelector((state:RootState) => state.thirdStep.enableNext)
  const enablePrevious = useSelector((state:RootState) => state.thirdStep.enablePrevious)
  const disabledDays = useSelector((state:RootState) => state.thirdStep.disabledDays)
  const [appointments, error, loading]:FetchedAppointmentsStep = useAxios({
    axiosInstance: axiosDB,
    method: 'get',
    url: '/appointments'
  })
  const groupedAppointments = groupByDay(appointments)
  useEffect(() => {
    dispatch(setGroupedAppointments([...groupedAppointments]))
  }
  , [appointments])
  return (
    <>
      <h3 className='step-title'>Ingrese un turno disponible</h3>
      <div id="card-appointment-container">
        <div className='card-appointment-filter'>
          <button className={`card-appointment-filter-button ${(disabledDays.some(disabledDay => disabledDay === Days.Monday)) ? 'disabled' : ''}` }
            onClick={() => dispatch(daySelector(Days.Monday))} ><p>Lunes</p></button>
          <button className={`card-appointment-filter-button ${(disabledDays.some(disabledDay => disabledDay === Days.Tuesday)) ? 'disabled' : ''}` }
            onClick={() => dispatch(daySelector(Days.Tuesday))} ><p>Martes</p></button>
          <button className={`card-appointment-filter-button ${(disabledDays.some(disabledDay => disabledDay === Days.Wednesday)) ? 'disabled' : ''}` }
            onClick={() => dispatch(daySelector(Days.Wednesday))} ><p>Miercoles</p></button>
          <button className={`card-appointment-filter-button ${(disabledDays.some(disabledDay => disabledDay === Days.Thursday)) ? 'disabled' : ''}` }
            onClick={() => dispatch(daySelector(Days.Thursday))} ><p>Jueves</p></button>
          <button className={`card-appointment-filter-button ${(disabledDays.some(disabledDay => disabledDay === Days.Friday)) ? 'disabled' : ''}` }
            onClick={() => dispatch(daySelector(Days.Friday))} ><p>Viernes</p></button>
        </div>
        <div className='card-appointment-days'>
          {loading && <p>Loading...</p>}
          {!loading && error && <p className="errMsg">{error}</p>}
          {!loading && !error && !manipulatedGroupedAppointments.length && <p className='errMsg'>No hay turnos para mostrar</p>}
          {!loading && !error && manipulatedGroupedAppointments.map((gapp) =>
            <CardAppointment dates={gapp} key={gapp?.at(-1)?._id}/>)
          }
        </div>
        <div className='card-appointment-move'>
          <button className="card-appointment-move-button" disabled={!enablePrevious} onClick={() => dispatch(previousAppointments())}>Turnos anteriores</button>
          <button className="card-appointment-move-button" disabled={!enableNext} onClick={() => dispatch(nextAppointments())}>Turnos siguientes</button>
        </div>
      </div>
    </>
  )
}

export default ThirdStep
