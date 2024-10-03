
import React from 'react';
import { useSelector } from 'react-redux';
import RadialChart from './RadialChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { selectChartSettings } from '../store/selectors/charts.selectors';

const ChartDisplay = () => {
  const chartSettings=useSelector(selectChartSettings)
  
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
    <div className="flex-grow p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RadialChart chartSettings={chartSettings} value={radialValue} />
      <BarChart chartSettings={chartSettings} data={barData} />
      <LineChart chartSettings={chartSettings} data={lineData} />
      <PieChart chartSettings={chartSettings} data={pieData} />
    </div>
  );
};

export default ChartDisplay;
