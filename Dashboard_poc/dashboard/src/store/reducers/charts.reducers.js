
import { createSlice} from "@reduxjs/toolkit";


const initialRadialChartState = {
  radialChartSetting: {
  colors: ['#FFC0CB'],
  titleFontSize: 16,
  titleFontWeight: 400,
  titleColor: '#4b5462',
  activeAccordion: false,
}
};

const initialBarChartState = {
  barChartSetting:{
  colors: ['#FF0000', '#00FF00', '#0000FF'],
  titleFontSize: 16,
  titleFontWeight: 400,
  titleColor: '#4b5462',
  activeAccordion: false,
}};

const initialLineChartState = {
  lineChartSetting:{
  colors: ['#FFA500', '#008000'],
  titleFontSize: 16,
  titleFontWeight: 400,
  titleColor: '#4b5462',
  activeAccordion: false,
}}

const initialPieChartState = {
  pieChartSetting:{
  colors: ['#000080', '#FF00FF', '#FFFF00'],
  titleFontSize: 16,
  titleFontWeight: 400,
  titleColor: '#4b5462',
  activeAccordion: false,
}};


const radialChartSlice = createSlice({
  name: "radialChart",
  initialState: initialRadialChartState,
  reducers: {
    setRadialChartSettings: (state, action) => {
      state.radialChartSetting = { ...state.radialChartSetting, ...action.payload };
    },
    setRadialActiveAccordion: (state, action) => {
      state.activeAccordion = action.payload;
    },
  },
});


const barChartSlice = createSlice({
  name: "barChart",
  initialState: initialBarChartState,
  reducers: {
    setBarChartSettings: (state, action) => {
      state.barChartSetting=action.payload;
    },
    setBarActiveAccordion: (state, action) => {
      state.activeAccordion = action.payload;
    },
  },
});


const lineChartSlice = createSlice({
  name: "lineChart",
  initialState: initialLineChartState,
  reducers: {
    setLineChartSettings: (state, action) => {
       state.lineChartSetting=action.payload
    },
    setLineActiveAccordion: (state, action) => {
      state.activeAccordion = action.payload;
    },
  },
});


const pieChartSlice = createSlice({
  name: "pieChart",
  initialState: initialPieChartState,
  reducers: {
    setPieChartSettings: (state, action) => {
       state.pieChartSetting=action.payload;
    },
    setPieActiveAccordion: (state, action) => {
      state.activeAccordion = action.payload;
    },
  },
});


export const {
  setRadialChartSettings,
  setRadialActiveAccordion,
} = radialChartSlice.actions;

export const {
  setBarChartSettings,
  setBarActiveAccordion,
} = barChartSlice.actions;

export const {
  setLineChartSettings,
  setLineActiveAccordion,
} = lineChartSlice.actions;

export const {
  setPieChartSettings,
  setPieActiveAccordion,
} = pieChartSlice.actions;




// export default {
//   radialChartSlice: radialChartSlice.reducer,
//   barChartSlice: barChartSlice.reducer,
//   lineChartSlice: lineChartSlice.reducer,
//   pieChartSlice: pieChartSlice.reducer,
// };

export const radialChartReducer = radialChartSlice.reducer;
export const barChartReducer = barChartSlice.reducer;
export const lineChartReducer = lineChartSlice.reducer;
export const pieChartReducer = pieChartSlice.reducer;
