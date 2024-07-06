import { useState, useMemo } from 'react';
import './App.css';
import Accordion from './components/Accordion';

const accordionsArr = [
  {
    title: 'Accordion 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, inventore.',
    isExpanded: false,
    isChecked: false,
  },
  {
    title: 'Accordion 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam inventore! Odio cupiditate facilis repellat?',
    isExpanded: false,
    isChecked: true,
  },
  {
    title: 'Accordion 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam inventore! Odio cupiditate facilis repellat?',
    isExpanded: false,
    isChecked: true,
  },
];

function App() {
  const [accordions, setAccordions] = useState(accordionsArr);

  const handleAccordionClick = (clickedIndex) => {
    /* const clickedAccordion = accordions[clickedIndex];
    console.log({clickedAccordion})
    const newAccordion = { ...clickedAccordion, isExpanded: true };
    console.log({ newAccordion }) */

    setAccordions(
      accordions.map((acc, index) =>
        clickedIndex === index
          ? { ...acc, isExpanded: !acc.isExpanded }
          : { ...acc, isExpanded: false }
      )
    );
  };

  const handleCheckboxClick = (clickedIndex, value) => {
    console.log({ value });
    setAccordions(
      accordions.map((accordion, index) =>
        clickedIndex === index
          ? { ...accordion, isChecked: !accordion.isChecked }
          : accordion
      )
    );
  };

  const isSubmitDisabled = useMemo(() => {
    const isAnyCheckboxUnchecked = accordions.find(
      (acc) => acc.isChecked === false
    );
    return Boolean(isAnyCheckboxUnchecked);
  }, [accordions]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {accordions.map((accordion, index) => (
        <Accordion
          title={accordion.title}
          content={accordion.content}
          isExpanded={accordion.isExpanded}
          isChecked={accordion.isChecked}
          onClick={() => handleAccordionClick(index)}
          onCheckboxClick={(e) => handleCheckboxClick(index, e.target.value)}
        />
      ))}
      <button disabled={isSubmitDisabled} className="submit">
        Submit
      </button>
    </div>
  );
}

export default App;
