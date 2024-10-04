// // src/components/ChartDisplay.jsx
// import React from 'react';
// import { useSelector } from 'react-redux';
// import RadialChart from './RadialChart';
// import BarChart from './BarChart';
// import LineChart from './LineChart';
// import PieChart from './PieChart';
// import { selectChartSettings } from '../store/selectors/charts.selectors';

// const ChartDisplay = () => {
//   const chartSettings = useSelector(selectChartSettings);
//   const radialSettings = chartSettings['Radial Chart'] || { colors: ['#FFC0CB'], titleFontSize: 16 };
//   const barSettings = chartSettings['Bar Chart'] || { colors: ['#FF0000', '#00FF00', '#0000FF'], titleFontSize: 16 };
//   const lineSettings = chartSettings['Line Chart'] || { colors: ['#FFA500', '#008000'], titleFontSize: 16 };
//   const pieSettings = chartSettings['Pie Chart'] || { colors: ['#000080', '#FF00FF', '#FFFF00'], titleFontSize: 16 };

//   const radialValue = 68812.5;
//   const barData = {
//     categories: ['HR', 'Engineering', 'Operations'],
//     series: [
//       {
//         name: 'Salary',
//         data: [70000, 150000, 80000],
//       },
//     ],
//   };
//   const lineData = {
//     categories: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2023'],
//     series: [
//       {
//         name: 'Employee Count',
//         data: [10, 15, 20, 25, 30],
//       },
//     ],
//   };
//   const pieData = {
//     labels: ['Full-Time', 'Part-Time', 'Contract'],
//     series: [60, 30, 10],
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       <RadialChart chartSettings={radialSettings} value={radialValue} />
//       <BarChart chartSettings={barSettings} data={barData} />
//       <LineChart chartSettings={lineSettings} data={lineData} />
//       <PieChart chartSettings={pieSettings} data={pieData} />
//     </div>
//   );
// };

// export default ChartDisplay;
// src/components/ChartDisplay.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import RadialChart from './RadialChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import {
  selectRadialChartState,
  selectBarChartState,
  selectLineChartState,
  selectPieChartState,
} from '../store/selectors/charts.selectors';

const ChartDisplay = () => {
  
  const radialSettings = useSelector(selectRadialChartState);
  const barSettings = useSelector(selectBarChartState);
  const lineSettings = useSelector(selectLineChartState);
  const pieSettings = useSelector(selectPieChartState);
  console.log("setting",lineSettings)

  const radialValue = 68812.5;
  const barData = {
    categories: ['HR', 'Engineering', 'Operations'],
    series: [
      {
        name: 'Salary',
        data: [70000, 150000, 80000],
      },
    ],
  };
  const lineData = {
    categories: ['Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2023'],
    series: [
      {
        name: 'Employee Count',
        data: [10, 15, 20, 25, 30],
      },
    ],
  };
  const pieData = {
    labels: ['Full-Time', 'Part-Time', 'Contract'],
    series: [60, 30, 10],
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RadialChart chartSettings={radialSettings} value={radialValue} />
      <BarChart chartSettings={barSettings} data={barData} />
      <LineChart chartSettings={lineSettings} data={lineData} />
      <PieChart chartSettings={pieSettings} data={pieData} />
    </div>
  );
};

export default ChartDisplay;

