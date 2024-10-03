
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'
import { createAction, createReducer } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    cluster: clusterReducer
  },
})


const initialState = { 
  selectedCluster: 0,
  clusters: []
}



const clusterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})



export default store