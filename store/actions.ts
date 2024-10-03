import { ClusterActionType, NamespaceActionType } from "./enums"

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
  