import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveAccordion } from '../store/selectors/charts.selectors';
import { setActiveAccordion } from '../store/reducers/charts.reducers';

export default function Example() {
  const dispatch = useDispatch();
  const activeAccordion = useSelector(selectActiveAccordion);

  const handleAccordionClick = (section) => {
    console.log("Accordion clicked:", section); // Log the header value
    dispatch(setActiveAccordion(activeAccordion === section ? null : section));
  };
console.log(activeAccordion)
  return (
    <div className="accordion-container">
      
      <AccordionItem
        header="Bar Graph"
        isActive={activeAccordion === 'Bar Graph'}
        onClick={() => handleAccordionClick('Bar Graph')}
      >
      
      </AccordionItem>

      {/* Line Graph Accordion Item */}
      <AccordionItem
        header="Line Graph"
        isActive={activeAccordion === 'Line Graph'}
        onClick={() => handleAccordionClick('Line Graph')}
      >
        <div>
          Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
          erat quis sodales.
        </div>
      </AccordionItem>

      {/* Pie Chart Accordion Item */}
      <AccordionItem
        header="Pie Chart"
        isActive={activeAccordion === 'Pie Chart'}
        onClick={() => handleAccordionClick('Pie Chart')}
      >
        <div>
          Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
          Fusce vulputate purus sed tempus feugiat.
        </div>
      </AccordionItem>
    </div>
  );
}

// Custom Accordion Item Component
const AccordionItem = ({ header, isActive, onClick, children }) => {
  return (
    <div className="accordion-item">
      <div
        className={`accordion-header ${isActive ? 'active' : ''}`}
        onClick={onClick}
      >
        {header}
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};
