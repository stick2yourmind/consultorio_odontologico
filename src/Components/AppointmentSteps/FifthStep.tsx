import { useSelector } from 'react-redux'
import okSvg from '../../assets/svg/checked.svg'
import { getDayName, getDate, getYear, getMonth, getHour, getMinute } from '../../utils/date'
import { RootState } from '../../app/store'

const FifthStep = () => {
  const data = useSelector((state: RootState) => state.appointment.data)
  return (
    <div id="card-confirmationMsg-container">
      <div className="card-confirmationMsg-msg-container">
        <p className='card-confirmationMsg-msg'>
          Muchas gracias por confirmar el turno para el dia
          {` 
          ${getDayName(data.appointment)} 
          ${getDate(data.appointment)}/
          ${getMonth(data.appointment)}/
          ${getYear(data.appointment)} a las 
          ${getHour(data.appointment)}:
          ${getMinute(data.appointment)} hs`}</p>
        <img className='card-confirmationMsg-img' src={okSvg} alt="confirmation image" />
      </div>
    </div>
  )
}

export default FifthStep
