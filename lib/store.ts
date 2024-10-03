
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import { createAction, createReducer } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    cluster: clusterReducer
  },
})

export default store