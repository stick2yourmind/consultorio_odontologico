import { useDispatch } from 'react-redux'
import { forward } from '../../app/features/appointment/appointmentSlice'
import { getDayName, getDate, getMonth, getHour, getMinute } from '../../utils/date'
import appointments from '../../assets/mocks/appointmentMock'
import { PartialData } from '../../../types'

const ThirdStep = () => {
  const dispatch = useDispatch()
  const nextHandler = (data:PartialData = null) => dispatch(forward(data))
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
        <div className='card-appointment-days-item'>
          <h6 className='card-appointment-days-item-title'>{`${getDayName(appointments[0][0])} ${getDate(appointments[0][0])}/${1 + (getMonth(appointments[0][0]) || 0)}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][0] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][0])}:${getMinute(appointments[0][0])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][1] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][1])}:${getMinute(appointments[0][1])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][2] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][2])}:${getMinute(appointments[0][2])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][3] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][3])}:${getMinute(appointments[0][3])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][4] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][4])}:${getMinute(appointments[0][4])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][5] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][5])}:${getMinute(appointments[0][5])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][6] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][6])}:${getMinute(appointments[0][6])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][7] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][7])}:${getMinute(appointments[0][7])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[0][8] })} className='card-appointment-days-item-date'>{`${getHour(appointments[0][8])}:${getMinute(appointments[0][8])}`}</h6>
        </div>
        <div className='card-appointment-days-item'>
          <h6 className='card-appointment-days-item-title'>{`${getDayName(appointments[1][0])} ${getDate(appointments[1][0])}/${1 + (getMonth(appointments[0][0]) || 0)}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][0] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][0])}:${getMinute(appointments[1][0])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][1] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][1])}:${getMinute(appointments[1][1])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][2] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][2])}:${getMinute(appointments[1][2])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][3] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][3])}:${getMinute(appointments[1][3])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][4] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][4])}:${getMinute(appointments[1][4])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][5] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][5])}:${getMinute(appointments[1][5])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][6] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][6])}:${getMinute(appointments[1][6])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][7] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][7])}:${getMinute(appointments[1][7])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[1][8] })} className='card-appointment-days-item-date'>{`${getHour(appointments[1][8])}:${getMinute(appointments[1][8])}`}</h6>
        </div>
        <div className='card-appointment-days-item'>
          <h6 className='card-appointment-days-item-title'>{`${getDayName(appointments[2][0])} ${getDate(appointments[2][0])}/${1 + (getMonth(appointments[0][0]) || 0)}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][0] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][0])}:${getMinute(appointments[2][0])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][1] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][1])}:${getMinute(appointments[2][1])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][2] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][2])}:${getMinute(appointments[2][2])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][3] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][3])}:${getMinute(appointments[2][3])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][4] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][4])}:${getMinute(appointments[2][4])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][5] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][5])}:${getMinute(appointments[2][5])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][6] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][6])}:${getMinute(appointments[2][6])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][7] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][7])}:${getMinute(appointments[2][7])}`}</h6>
          <h6 onClick={() => nextHandler({ appointment: appointments[2][8] })} className='card-appointment-days-item-date'>{`${getHour(appointments[2][8])}:${getMinute(appointments[2][8])}`}</h6>
        </div>
      </div>
      <div className='card-appointment-move'>
        <button className="card-appointment-move-button">Turnos anteriores</button>
        <button className="card-appointment-move-button">Turnos siguientes</button>
      </div>
    </div>
  )
}

export default ThirdStep
