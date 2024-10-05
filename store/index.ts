"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { clusterReducer, namespaceReducer } from './reducers';
import { useStore } from 'react-redux';



const rootReducer = combineReducers({
  cluster: clusterReducer,
  namespace: namespaceReducer
})



export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});


export const useAppStore: () => typeof store = useStore
