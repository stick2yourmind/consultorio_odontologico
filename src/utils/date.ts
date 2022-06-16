const dayName = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]

export const getDayName = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    return dayName[day.getDay()]
  }
}
export const getDate = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    return day.getDate()
  }
}
export const getYear = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    return day.getFullYear()
  }
}
export const getMonth = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    return 1 + day.getMonth()
  }
}
export const getHour = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    return day.getHours()
  }
}
export const getMinute = (date: string | null) => {
  if (date) {
    const day = new Date(date)
    const minutes = day.getMinutes()
    if (!minutes) return '00'
    else return minutes
  }
}
