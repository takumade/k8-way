import { createSlice } from "@reduxjs/toolkit";

const initialStateCluster = {
    selectedCluster: null,
    clusters: []
}

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: initialStateCluster,
    reducers: {
        selectCluster: (state, action) => {
            console.log("Payload: ", action)
            state.selectedCluster = action.payload;
        },
        addClusters: (state, action) => {
            state.clusters = action.payload;
        }
    }
});

export const { selectCluster, addClusters } = clusterSlice.actions;
export default clusterSlice.reducer;