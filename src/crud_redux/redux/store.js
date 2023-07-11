import { createReducer, configureStore } from '@reduxjs/toolkit';
import empSlice from './reducers/empSlice';

export const store = configureStore({
  reducer: {
    employee: empSlice,
  },
});
