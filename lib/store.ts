
import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'



const initialStateCluster = { 
  selectedCluster: null,
  clusters: []
}

const initialStateNamespace = { 
  selectedNamespace: null,
  namespaces: []
}

const selectCluster = createAction('counter/increment')
const addClusters = createAction('counter/incrementByAmount')
const selectNamespace = createAction('counter/increment')
const addNamespaces = createAction('counter/incrementByAmount')

const clusterReducer = createReducer(initialStateCluster, (builder) => {
  builder
    .addCase(selectCluster, (state, action) => {
      state.selectedCluster = action.payload as any
    })
    .addCase(addClusters, (state, action) => {
      state.clusters = action.payload as any
    })
})

const namespaceReducer = createReducer(initialStateNamespace, (builder) => {
  builder
    .addCase(selectNamespace, (state, action) => {
      state.selectedNamespace = action.payload as any
    })
    .addCase(addNamespaces, (state, action) => {
      state.namespaces = action.payload as any
    })
})

const store = configureStore({
  reducer: {
    cluster: clusterReducer,
    namespace: namespaceReducer
  },
})



export default store