
import { useSelector, useDispatch } from 'react-redux';
import { selectChartSettings } from '../store/selectors/charts.selectors';
import { setChartSettings } from '../store/reducers/charts.reducers';
const ChartSettings = () => {
const chartSettings=useSelector(selectChartSettings)
const dispatch=useDispatch()
const handleDownloadSettings = () => {
  const convertToJsFormat = (data, indentLevel = 0) => {
    const indent = '  '.repeat(indentLevel);
    const entries = Object.entries(data).map(([key, value]) => {

      if (Array.isArray(value)) {
        return `${indent}${key}: ${JSON.stringify(value, null, 2)}`;
      } else if (typeof value === 'object' && value !== null) {
        return `${indent}${key}: ${convertToJsFormat(value, indentLevel + 1)}`;
      } else {
        return `${indent}${key}: "${value}"`;
      }
    });
    return `{\n${entries.join(',\n')}\n${indent}}`;
  };

 
  const jsContent = `const chartSettings = ${convertToJsFormat(chartSettings)};`;
  const settingsBlob = new Blob([jsContent], {
    type: 'application/javascript',
  });
  const url = URL.createObjectURL(settingsBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'chartSettings.js';
  a.click();
  URL.revokeObjectURL(url);
};

  const handleColorChange = (index, color) => {
    const newColors = [...chartSettings.colors];
    newColors[index] = color;
    dispatch(
      setChartSettings({
        ...chartSettings,
        colors: newColors,
      })
    );
  };

  const handleFontSizeChange = (e) => {
    dispatch(
      setChartSettings({
        ...chartSettings,
        titleFontSize: parseInt(e.target.value, 10),
      })
    );
  };


  return (
    <div className="w-64 bg-gray-100 p-4">
      <h3 className="text-lg font-semibold mb-4">Customize Chart</h3>

    
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Colors</h4>
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
        <h4 className="text-sm font-medium mb-2">Font Size</h4>
        <input
          type="number"
          value={chartSettings.titleFontSize}
          onChange={handleFontSizeChange}
          min="10"
          max="30"
          className="border p-1 rounded w-20"
        />
      </div>

      
      <button
        onClick={handleDownloadSettings}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
      >
        Download JS Settings
      </button>
    </div>
  );
};

export default ChartSettings;
