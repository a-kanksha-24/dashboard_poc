// src/components/ChartCard.js
import React from 'react';

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex justify-center items-center flex-col">
      <h4 className="text-center text-lg font-semibold mb-4">{title}</h4>
      {children}
    </div>
  );
};

export default ChartCard;
