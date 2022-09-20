import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import basket from './basketSlice';

const reducer = combineReducers({
  basket,
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
