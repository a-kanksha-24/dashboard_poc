// src/components/BarChart.js
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const BarChart = ({ chartSettings, data }) => {
  
  const getResponsiveOptions = () => {
    const screenWidth = window.innerWidth;

    let titleFontSize = `${chartSettings.titleFontSize}px`;
    let dataLabelsStyle = {
      fontSize: titleFontSize,
      color: chartSettings.titleColor,
    };

    
    if (screenWidth < 640) { 
      titleFontSize = '10px'; 
    } else if (screenWidth < 1024) { 
      titleFontSize = `${chartSettings.titleFontSize - 2}px`; 
    }

    return {
      chart: {
        type: 'bar',
        height: '100%', 
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%', 
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: titleFontSize,
          color: chartSettings.titleColor,
        },
      },
      xaxis: {
        categories: data.categories,
      },
      colors: chartSettings.colors,
      title: {
        text: 'Salary by Department',
        style: {
          fontSize: chartSettings.titleFontSize,
          fontWeight: chartSettings.titleFontWeight,
          color: chartSettings.titleColor,
        },
      },
    };
  };

  // State for chart options
  const [options, setOptions] = useState(getResponsiveOptions());

  useEffect(() => {
    const handleResize = () => {
      setOptions(getResponsiveOptions());
    };

    // Set initial options
    setOptions(getResponsiveOptions());
    
    window.addEventListener('resize', handleResize);
    return () => {
   
      window.removeEventListener('resize', handleResize);
    };
  }, [chartSettings]); 

  return (
    <ChartCard title="Salary by Department">
      <Chart options={options} series={data.series} type="bar" width="100%" />
    </ChartCard>
  );
};

export default BarChart;
