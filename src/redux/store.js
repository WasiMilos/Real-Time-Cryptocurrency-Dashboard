
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import { cryptoApi } from './cryptoApi';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;
