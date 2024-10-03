
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



enum ClusterActionType {
  SELECT_CLUSTER = 'SELECT_CLUSTER',
  ADD_CLUSTERS = 'ADD_CLUSTERS'
}

enum NamespaceActionType {
  SELECT_NAMESPACE = 'SELECT_NAMESPACE',
  ADD_NAMESPACES = 'ADD_NAMESPACES'
}

const clusterReducer = (state = initialStateCluster, action:any) => {
  switch (action.type) {
    case ClusterActionType.SELECT_CLUSTER:
      return {
        ...state,
        selectedCluster: action.payload
      }
    case ClusterActionType.ADD_CLUSTERS:
      return {
        ...state,
        clusters: action.payload
      }
    default:
      return state
  }
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