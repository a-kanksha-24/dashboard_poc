
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const PieChart = ({ chartSettings, data }) => {

  const getResponsiveOptions = () => {
    const screenWidth = window.innerWidth;

    let titleFontSize = `${chartSettings.titleFontSize}px`;

    
    if (screenWidth < 640) { 
      titleFontSize = '14px'; 
    } else if (screenWidth < 1024) { 
      titleFontSize = `${chartSettings.titleFontSize - 2}px`;
    }

    return {
      chart: {
        type: 'pie',
        height: '100%', 
      },
      labels: data.labels,
      colors: chartSettings.colors,
      title: {
        text: 'Employment Status',
        style: {
          fontSize: titleFontSize,
          fontWeight: chartSettings.titleFontWeight,
          color: chartSettings.titleColor,
        },
      },
      legend: {
        position: 'bottom', 
        horizontalAlign: 'center', 
      },
    };
  };

  
  const [options, setOptions] = useState(getResponsiveOptions());

  useEffect(() => {
    const handleResize = () => {
      setOptions(getResponsiveOptions());
    };

    
    setOptions(getResponsiveOptions());
    window.addEventListener('resize', handleResize);
    return () => {
    
      window.removeEventListener('resize', handleResize);
    };
  }, [chartSettings]); 

  return (
    <ChartCard title="Employment Status">
      <Chart options={options} series={data.series} type="pie" width="100%" />
    </ChartCard>
  );
};

export default PieChart;
