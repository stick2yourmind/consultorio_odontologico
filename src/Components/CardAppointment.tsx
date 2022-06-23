import React from 'react'
import { CardAppointmentContainer } from '../Styles/ComponentStyle'
import { getDayName, getDate, getMonth, getHour, getMinute } from '../utils/date'
import { PartialData, AppointmentsData } from '../../types'
import { useDispatch } from 'react-redux'
import { forward } from '../app/features/appointment/appointmentSlice'

interface CardAppointmentProps{
  dates:AppointmentsData[]
}

const CardAppointment:React.FC<CardAppointmentProps> = ({ dates }) => {
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))
  return (
    <CardAppointmentContainer>
      <h6 className='card-appointment-days-item-title'>
        {`${getDayName(dates[0].date)} ${getDate(dates[0].date)}/${1 + (getMonth(dates[0].date) || 0)}`}
      </h6>
      {
        dates.map((data) =>
            <h6 key={data._id} className='card-appointment-days-item-date'
            onClick={() => nextHandler({ appointment: data.date })}>
              {`${getHour(data.date)}:${getMinute(data.date)}`}
            </h6>
        )
      }
    </CardAppointmentContainer>
  )
}

export default CardAppointment
