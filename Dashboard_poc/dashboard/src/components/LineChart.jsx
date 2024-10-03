
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const LineChart = ({ chartSettings, data }) => {
  
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
        type: 'line',
        height: '100%', 
        zoom: {
          enabled: false, 
        },
      },
      xaxis: {
        categories: data.categories,
      },
      colors: chartSettings.colors,
      title: {
        text: 'Headcount & Department Growth',
        style: {
          fontSize: titleFontSize,
          fontWeight: chartSettings.titleFontWeight,
          color: chartSettings.titleColor,
        },
      },
      stroke: {
        width: 2, 
      },
      dataLabels: {
        enabled: false, 
      },
      tooltip: {
        enabled: false, 
      },
      legend: {
        position: 'top', 
        horizontalAlign: 'right',
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
    <ChartCard title="Headcount & Department Growth">
      <Chart options={options} series={data.series} type="line" width="100%" />
    </ChartCard>
  );
};

export default LineChart;
