import { configureStore } from '@reduxjs/toolkit';
import employeeInfosReducer from '../slices/employeeInfos';

export const store = configureStore({
  reducer: {
    employeeInfos: employeeInfosReducer,
  },
  devTools: true,
});
