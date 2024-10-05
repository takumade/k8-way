"use client";
import { configureStore } from '@reduxjs/toolkit'

import { useStore } from 'react-redux';
import { clusterReducer } from './reducers/clusterReducer';
import { namespaceReducer } from './reducers/namespaceReducer';


export const store = configureStore({
  reducer: {
    cluster: clusterReducer,
    namespace: namespaceReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});


export const useAppStore: () => typeof store = useStore
