import { useState } from 'react';

type Props = {
  title: string;
  content: string;
  isExpanded?: boolean;
};

const Accordion = ({
  title,
  content,
  isExpanded,
  isChecked,
  onClick,
  onCheckboxClick,
}: Props) => {
  // const [isExpanded, setIsExpanded] = useState(isExpanded);
  return (
    <div className="accordion">
      <div className="header">
        <div className="title-checkbox-wrapper">
          <input
            type="checkbox"
            value={isChecked}
            checked={isChecked}
            onChange={onCheckboxClick}
          />
          <div className="title">{title}</div>
        </div>

        <div className="expand-icon" onClick={onClick}>
          +
        </div>
      </div>
      {isExpanded && (
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nobis?
        </div>
      )}
    </div>
  );
};

export default Accordion;
