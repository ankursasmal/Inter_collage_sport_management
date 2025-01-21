import { configureStore } from '@reduxjs/toolkit'
import { increment } from '../Redux/ResduSlice'

export const store = configureStore({
  reducer: {
    increment
  },
})