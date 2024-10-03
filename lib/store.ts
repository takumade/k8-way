
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


enum NamespaceActionType {
  SELECT_NAMESPACE = 'SELECT_NAMESPACE',
  ADD_NAMESPACES = 'ADD_NAMESPACES'
}

const namespaceReducer = (state = initialStateNamespace, action:any) => {
  switch (action.type) {
    case NamespaceActionType.SELECT_NAMESPACE:
      return {
        ...state,
        selectedNamespace: action.payload
      }
    case NamespaceActionType.ADD_NAMESPACES:
      return {
        ...state,
        namespaces: action.payload
      }
    default:
      return state
  }
}




const store = configureStore({
  reducer: {
    cluster: clusterReducer,
    namespace: namespaceReducer
  },
})



export default store