import { useState } from 'react';
import ChartSettings from './ChartSettings';
import { useSelector } from 'react-redux';
import {
  selectRadialChartState,
  selectLineChartState,
  selectBarChartState,
  selectPieChartState,
} from '../store/selectors/charts.selectors';

const ChartAccordion = () => {
  
  const radialSettings = useSelector(selectRadialChartState);
  const lineSettings = useSelector(selectLineChartState);
  const barSettings = useSelector(selectBarChartState);
  const pieSettings = useSelector(selectPieChartState);
  console.log("radial",radialSettings)

  const [selectedChart, setSelectedChart] = useState('Bar Chart'); 

  
  const handleSelectChange = (e) => {
    setSelectedChart(e.target.value);
  };

  
  const getCurrentChartSettings = () => {
    switch (selectedChart) {
      case 'Bar Chart':
        return barSettings;
      case 'Line Chart':
        return lineSettings;
      case 'Pie Chart':
        return pieSettings;
      case 'Radial Chart':
        return radialSettings;
      default:
        return barSettings; 
    }
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h3 className="text-lg font-semibold mb-4">Chart Settings</h3>
      
      
      <select
        value={selectedChart}
        onChange={handleSelectChange}
        className="mb-4 border rounded p-2 w-full"
      >
        <option value="Bar Chart">Bar Chart</option>
        <option value="Line Chart">Line Chart</option>
        <option value="Pie Chart">Pie Chart</option>
        <option value="Radial Chart">Radial Chart</option>
      </select>

     
      <ChartSettings selectedChart={selectedChart} chartSettings={getCurrentChartSettings()} />
    </div>
  );
};

export default ChartAccordion;

