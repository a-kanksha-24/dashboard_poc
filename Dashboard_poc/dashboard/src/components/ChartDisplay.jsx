
import React from 'react';
import { useSelector } from 'react-redux';
import RadialChart from './RadialChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { selectActiveAccordion, selectChartSettings } from '../store/selectors/charts.selectors';


const ChartDisplay = () => {
  const chartSettings=useSelector(selectChartSettings)
  const activeAccordion=useSelector(selectActiveAccordion)
  
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
    <div className="flex-grow p-6 flex items-center justify-center">
      {activeAccordion === 'Radial Chart' && (
        <RadialChart chartSettings={chartSettings} value={radialValue} />
      )}
      {activeAccordion === 'Bar Graph' && (
        <BarChart chartSettings={chartSettings} data={barData} />
      )}
      {activeAccordion === 'Line Graph' && (
        <LineChart chartSettings={chartSettings} data={lineData} />
      )}
      {activeAccordion === 'Pie Chart' && (
        <PieChart chartSettings={chartSettings} data={pieData} />
      )}
    </div>
  );
  
};

export default ChartDisplay;
