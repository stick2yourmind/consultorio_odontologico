import { getDay } from './../../../utils/date'
import { createSlice, current } from '@reduxjs/toolkit'
import { AppointmentsData } from '../../../../types'

export enum Days{
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

interface ThirdState {
  groupedAppointments: Array<AppointmentsData[]>,
  lengthGroupedAppointments: number,
  iteration: number,
  enablePrevious: boolean,
  enableNext: boolean,
  manipulatedGroupedAppointments: Array<AppointmentsData[]>,
  disabledDays: Days[]
}

const initialState: ThirdState = {
  groupedAppointments: [],
  lengthGroupedAppointments: 0,
  iteration: 0,
  enablePrevious: false,
  enableNext: false,
  manipulatedGroupedAppointments: [],
  disabledDays: []
}

const rot = (arr:Array<AppointmentsData[]>) => {
  if (arr.length > 3) {
    const first = arr.shift()
    const second = arr.shift()
    const third = arr.shift()
    first && second && third && arr.push(first, second, third)
  }
  return arr
}
const rotLeft = (arr:Array<AppointmentsData[]>) => {
  if (arr.length > 3) {
    const first = arr.splice(-1)
    const second = arr.splice(-1)
    const third = arr.splice(-1)
    arr.unshift(third[0], second[0], first[0])
  }
  return arr
}

export const thirdStepSlice = createSlice({
  name: 'thirdStep',
  initialState,
  reducers: {
    setGroupedAppointments: (state, action) => {
      state.groupedAppointments = state.manipulatedGroupedAppointments = action.payload
      state.lengthGroupedAppointments = state.groupedAppointments.length
      state.iteration = 0
      state.disabledDays = []
      state.enablePrevious = false
      if ((3 + state.iteration * 3) >= state.lengthGroupedAppointments) state.enableNext = false
      else state.enableNext = true
    },
    // actions for looking previous appointments
    previousAppointments: (state) => {
      if (!state.iteration) state.enablePrevious = false
      else {
        state.manipulatedGroupedAppointments = rotLeft([...state.manipulatedGroupedAppointments])
        state.iteration -= 1;
        (!state.iteration) ? (state.enablePrevious = false) : (state.enablePrevious = true)
      }
      ((3 + state.iteration * 3) >= state.lengthGroupedAppointments)
        ? (state.enableNext = false)
        : (state.enableNext = true)
      console.log('previousAppointments')
      console.log(current(state))
    },
    nextAppointments: (state) => {
      if ((3 + state.iteration * 3) >= state.lengthGroupedAppointments) state.enableNext = false
      else {
        state.manipulatedGroupedAppointments = rot([...state.manipulatedGroupedAppointments])
        state.iteration += 1;
        ((3 + state.iteration * 3) >= state.lengthGroupedAppointments)
          ? (state.enableNext = false)
          : (state.enableNext = true)
      }
      (!state.iteration) ? (state.enablePrevious = false) : (state.enablePrevious = true)
      console.log('nextAppointments')
      console.log(current(state))
    },
    daySelector: (state, action) => {
      const exists = state.disabledDays.indexOf(action.payload)
      if (exists === -1) state.disabledDays.push(action.payload)
      else { state.disabledDays.splice(exists, exists + 1) }
      state.manipulatedGroupedAppointments = state.groupedAppointments
        .filter(appointmentsDataArr => {
          return (!state.disabledDays.some(day => day === getDay(appointmentsDataArr[0].date)))
        })

      state.lengthGroupedAppointments = state.manipulatedGroupedAppointments.length
      state.iteration = 0
      state.enablePrevious = false
      if ((3 + state.iteration * 3) >= state.lengthGroupedAppointments) state.enableNext = false
      else state.enableNext = true
    }
  }
})

export const { previousAppointments, nextAppointments, setGroupedAppointments, daySelector } = thirdStepSlice.actions
export default thirdStepSlice.reducer
