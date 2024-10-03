import { configureStore } from '@reduxjs/toolkit';
import ChartReducer from './reducers/charts.reducers'

export const store = configureStore({
  reducer: {
    chart: ChartReducer, 
  },
});
