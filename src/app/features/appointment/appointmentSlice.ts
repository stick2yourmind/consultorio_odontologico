import { createSlice, current } from '@reduxjs/toolkit'

export enum appointmentSteps {
  specialty,
  professional,
  appointment,
  formContact,
  confirmationMsg
}
interface contactInfoIF{
  fullName: string | null,
  dni: string | null,
  email: string | null,
  phone: string | null
}
interface dataInterfaceIF{
  specialty: string | null,
  professional: string | null,
  appointment: Date | null,
  appointmentId: string | null,
  contactInfo: contactInfoIF
}
interface appointmentStateIF {
  step: appointmentSteps,
  data: dataInterfaceIF
}

const initialState: appointmentStateIF = {
  step: appointmentSteps.specialty,
  data: {
    specialty: null,
    professional: null,
    appointment: null,
    appointmentId: null,
    contactInfo: {
      fullName: null,
      dni: null,
      email: null,
      phone: null
    }
  }
}

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    // actions for appointment's reservation
    forward: (state, action) => {
      (state.step < appointmentSteps.confirmationMsg) && (state.step += 1)
      if (action.payload) {
        state.data = { ...state.data, ...action.payload }
      }
      console.log('current state')
      console.log(current(state))
    },
    backward: (state, action) => {
      (state.step > appointmentSteps.specialty) && (state.step -= 1)
      if (action.payload) {
        state.data = { ...state.data, ...action.payload }
      }
      console.log('current state')
      console.log(current(state))
    },
    setStep: (state, action) => {
      state.step = action.payload
      console.log('current state')
      console.log(current(state))
    },
    reset: (state) => {
      state.step = initialState.step
      state.data = initialState.data
      console.log('current state')
      console.log(current(state))
    },
    update: (state, action) => {
      state.data = { ...state.data, ...action.payload }
    }
  }
})

export const { forward, backward, setStep, update } = appointmentSlice.actions
export default appointmentSlice.reducer
