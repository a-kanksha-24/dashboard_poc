import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border rounded">
      <div 
        className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="p-4 bg-gray-100">{children}</div>}
    </div>
  );
};

export default Accordion;
