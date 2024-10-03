
import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'



const initialState = { 
  selectedCluster: null,
  clusters: []
}

const selectCluster = createAction('counter/increment')
const addClusters = createAction('counter/incrementByAmount')

const clusterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCluster, (state, action) => {
      state.selectedCluster = action.payload as any
    })
    .addCase(addClusters, (state, action) => {
      state.clusters = action.payload as any
    })
})

const store = configureStore({
  reducer: {
    cluster: clusterReducer
  },
})



export default store