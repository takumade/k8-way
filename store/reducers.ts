import { ClusterActionType, NamespaceActionType } from "./enums"

const initialStateCluster = {
    selectedCluster: null,
    clusters: []
}

const initialStateNamespace = {
    selectedNamespace: null,
    namespaces: []
}

export const clusterReducer = (state = initialStateCluster, action: any) => {
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



export const namespaceReducer = (state = initialStateNamespace, action: any) => {
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
