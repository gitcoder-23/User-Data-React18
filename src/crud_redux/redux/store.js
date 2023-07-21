import { createReducer, configureStore } from '@reduxjs/toolkit';
import empSlice from './reducers/empSlice';
import loginSlice from './reducers/loginSlice';

export const store = configureStore({
  reducer: {
    employee: empSlice,
    loginUser: loginSlice,
  },
});
