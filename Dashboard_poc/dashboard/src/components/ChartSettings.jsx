// // src/components/ChartSettings.jsx
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { selectChartSettings } from '../store/selectors/charts.selectors';
// // import { setChartSettings } from '../store/reducers/charts.reducers';

// const ChartSettings = ({ chartType,chartSettings }) => {
//   console.log("hello",chartSettings)
//   // const chartSettings = useSelector(selectChartSettings);
//   const dispatch = useDispatch();
//   const currentSettings = chartSettings[chartType] || { colors: ['#000000'], titleFontSize: 16 };

//   const handleColorChange = (index, color) => {
//     const newColors = [...currentSettings.colors];
//     newColors[index] = color;
//     dispatch(
//       setChartSettings({
//         chartType: chartType,
//         settings: {
//           ...currentSettings,
//           colors: newColors,
//         },
//       })
//     );
//   };

//   const handleFontSizeChange = (e) => {
//     dispatch(
//       setChartSettings({
//         chartType: chartType,
//         settings: {
//           ...currentSettings,
//           titleFontSize: parseInt(e.target.value, 10),
//         },
//       })
//     );
//   };

//   return (
//     <div className="p-4">
//       <h4 className="text-lg font-semibold">{chartType} Settings</h4>
//       <div className="mb-6">
//         <h5 className="text-sm font-medium mb-2">Colors</h5>
//         {currentSettings.colors.map((color, index) => (
//           <div key={index} className="mb-2">
//             <input
//               type="color"
//               value={color}
//               onChange={(e) => handleColorChange(index, e.target.value)}
//               className="w-12 h-12 cursor-pointer border rounded"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="mb-6">
//         <h5 className="text-sm font-medium mb-2">Font Size</h5>
//         <input
//           type="number"
//           value={currentSettings.titleFontSize}
//           onChange={handleFontSizeChange}
//           min="10"
//           max="30"
//           className="border p-1 rounded w-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default ChartSettings;
// src/components/ChartSettings.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectRadialChartState,
  selectBarChartState,
  selectLineChartState,
  selectPieChartState,
} from '../store/selectors/charts.selectors';
import {
  setRadialChartSettings,
  setBarChartSettings,
  setLineChartSettings,
  setPieChartSettings,
} from '../store/reducers/charts.reducers';



const ChartSettings = ({ selectedChart ,chartSettings}) => {
  console.log("chartSettings",chartSettings)
  
 
  const dispatch = useDispatch();
  

  const handleColorChange = (index, color) => {
    const newColors = [...chartSettings.colors];
    newColors[index] = color;

    switch (selectedChart) {
      case 'Radial Chart':
        dispatch(setRadialChartSettings({ ...chartSettings, colors: newColors }));
        break;
      case 'Bar Chart':
        dispatch(setBarChartSettings({ ...chartSettings, colors: newColors }));
        break;
      case 'Line Chart':
        dispatch(setLineChartSettings({ ...chartSettings, colors: newColors }));
        break;
      case 'Pie Chart':
        dispatch(setPieChartSettings({ ...chartSettings, colors: newColors }));
        break;
      default:
        break;
    }
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = parseInt(e.target.value, 10);

    switch (selectedChart) {
      case 'Radial Chart':
        dispatch(setRadialChartSettings({ ...chartSettings, titleFontSize: newFontSize }));
        break;
      case 'Bar Chart':
        dispatch(setBarChartSettings({ ...chartSettings, titleFontSize: newFontSize }));
        break;
      case 'Line Chart':
        dispatch(setLineChartSettings({ ...chartSettings, titleFontSize: newFontSize }));
        break;
      case 'Pie Chart':
        dispatch(setPieChartSettings({ ...chartSettings, titleFontSize: newFontSize }));
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold">{selectedChart} Settings</h4>
      <div className="mb-6">
        <h5 className="text-sm font-medium mb-2">Colors</h5>
        {chartSettings.colors.map((color, index) => (
          <div key={index} className="mb-2">
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(index, e.target.value)}
              className="w-12 h-12 cursor-pointer border rounded"
            />
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h5 className="text-sm font-medium mb-2">Font Size</h5>
        <input
          type="number"
          value={chartSettings.titleFontSize}
          onChange={handleFontSizeChange}
          min="10"
          max="30"
          className="border p-1 rounded w-20"
        />
      </div>
    </div>
  );
};

export default ChartSettings;

