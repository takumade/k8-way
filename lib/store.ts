
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const initialStateCluster = { 
  selectedCluster: null,
  clusters: []
}

const initialStateNamespace = { 
  selectedNamespace: null,
  namespaces: []
}

enum ClusterActionType {
  SELECT_CLUSTER = 'SELECT_CLUSTER',
  ADD_CLUSTERS = 'ADD_CLUSTERS'
}

enum NamespaceActionType {
  SELECT_NAMESPACE = 'SELECT_NAMESPACE',
  ADD_NAMESPACES = 'ADD_NAMESPACES'
}



const selectNamespaceAction = (namespace:any) => {
  return {
    type: NamespaceActionType.SELECT_NAMESPACE,
    payload: namespace
  }
}

const addNamespacesAction = (namespaces:any) => {
  return {
    type: NamespaceActionType.ADD_NAMESPACES,
    payload: namespaces
  }
}

const selectClusterAction = (cluster:any) => {
  return {
    type: ClusterActionType.SELECT_CLUSTER,
    payload: cluster
  }
}

const addClustersAction = (clusters:any) => {
  return {
    type: ClusterActionType.ADD_CLUSTERS,
    payload: clusters
  }
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


const rootReducer = combineReducers({
  cluster: clusterReducer,
  namespace: namespaceReducer
})



const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});


export default store