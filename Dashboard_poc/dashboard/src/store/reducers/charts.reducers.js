import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   chartSettings: {
        colors: ['#e15e9d', '#5fbaff', '#e15e9d'],
        titleFontSize: 10,
        titleFontWeight: 400,
        titleColor: '#4b5462',
      }
};

const ChartReducer = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartSettings: (state, action) => {
      state.chartSettings = action.payload;
    }
  },
});

export const { setChartSettings} = ChartReducer.actions;

export default ChartReducer.reducer;
