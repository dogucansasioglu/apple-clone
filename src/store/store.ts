import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import basketSlice from './basketSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const reducer = combineReducers({
  basket: basketSlice,
});

// const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
