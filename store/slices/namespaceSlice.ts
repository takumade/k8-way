import { createSlice } from "@reduxjs/toolkit";

const initialStateNamespace = {
    selectedNamespace: null,
    namespaces: []
};

const namespaceSlice = createSlice({
    name: 'namespace',
    initialState: initialStateNamespace,
    reducers: {
        selectNamespace(state, action) {
            state.selectedNamespace = action.payload;
        },
        addNamespaces(state, action) {
            state.namespaces = action.payload;
        }
    }
});

export const { selectNamespace, addNamespaces } = namespaceSlice.actions;
export default namespaceSlice.reducer;
