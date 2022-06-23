import { AppointmentsData } from '../../types'
const dayName = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]

export const getDayName = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    return dayName[day.getDay()]
  }
}
export const getDate = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    return day.getDate()
  }
}
export const getYear = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    return day.getFullYear()
  }
}
export const getMonth = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    return 1 + day.getMonth()
  }
}
export const getHour = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    return day.getHours()
  }
}
export const getMinute = (date: Date | null) => {
  if (date) {
    const day = new Date(date)
    const minutes = day.getMinutes()
    if (!minutes) return '00'
    else return minutes
  }
}

export const groupByDay = (data: AppointmentsData[]) => {
  let iGroup = 0
  const groupedDates:Array<Array<AppointmentsData>> = []

  data.forEach((currData, index) => {
    if (index === 0) {
      groupedDates[0] = []
      groupedDates[0].push(currData)
    } else {
      const prevData = data[index - 1]
      const currDate = new Date(currData.date).toISOString().split('T')[0]
      const prevDate = new Date(prevData.date).toISOString().split('T')[0]
      if (currDate.localeCompare(prevDate) === 0) {
        groupedDates[iGroup].push(currData)
      } else {
        iGroup += 1
        groupedDates[iGroup] = []
        groupedDates[iGroup].push(currData)
      }
    }
  })
  return groupedDates
}
