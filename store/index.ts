
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { clusterReducer, namespaceReducer } from './reducers';



const rootReducer = combineReducers({
  cluster: clusterReducer,
  namespace: namespaceReducer
})



const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});


export default store