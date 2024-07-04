import {configureStore} from '@reduxjs/toolkit';
import giphyAPIReducer from './actions/giphyApiSlice/SearchApiSlice';

export const store = configureStore({
  reducer: {
    giphyAPI: giphyAPIReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
