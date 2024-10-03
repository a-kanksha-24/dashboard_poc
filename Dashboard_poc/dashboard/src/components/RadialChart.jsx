// src/components/RadialChart.js
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const RadialChart = ({ chartSettings, value }) => {
 

  const getResponsiveOptions = () => {
    const screenWidth = window.innerWidth;

    let hollowSize = '80%';
    let titleFontSize = `${chartSettings.titleFontSize}px`;

    
    if (screenWidth < 740) { 
      hollowSize = '70%'; 
      titleFontSize = '16px'; 
    } else if (screenWidth < 1024) { 
      hollowSize = '75%';
      titleFontSize = `${chartSettings.titleFontSize - 2}px`; 
    }

    return {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: hollowSize, 
          },
          dataLabels: {
            name: {
              fontSize: titleFontSize, 
              fontWeight: chartSettings.titleFontWeight,
              color: chartSettings.titleColor,
            },
            value: {
              fontSize: '24px', 
              color: chartSettings.titleColor,
            },
          },
        },
      },
      labels: ['Avg Salary'],
      colors: chartSettings.colors,
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
    <ChartCard title="Avg Salary Target">
      <Chart options={options} series={[value]} type="radialBar" width="380" />
    </ChartCard>
  );
};

export default RadialChart;
