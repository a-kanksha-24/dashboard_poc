import { configureStore } from '@reduxjs/toolkit';



import  { radialChartReducer,barChartReducer,lineChartReducer,pieChartReducer} from './reducers/charts.reducers'
export const store = configureStore({
  reducer: {
    radialChart: radialChartReducer,
    barChart: barChartReducer,
    lineChart: lineChartReducer,
    pieChart: pieChartReducer,
  },
});
