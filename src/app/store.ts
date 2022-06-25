import { configureStore } from '@reduxjs/toolkit'
import appointmentReducer from './features/appointment/appointmentSlice'
import thirdStepReducer from './features/appointment/thirdStepSlice'

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    thirdStep: thirdStepReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
