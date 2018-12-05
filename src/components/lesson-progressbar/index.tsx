import React from 'react';
import { Progress } from 'reactstrap';
import './index.css';

interface IProps {
  current: number;
  total: number;
}

// Renders step progressbar dynamically
const LessonProgressbar: React.SFC<IProps> = ({ current, total }) => {
  // initialized array with the given total number
  const list = Array.from({ length: total });
  const percent = (1 / total) * 100;
  return (
    <Progress multi={true} className="lesson-progress-bar-container">
      {list.map((item, index) => (
        <Progress
          key={index}
          barClassName="lesson-progress-bar"
          bar={true}
          color={current < index + 1 ? 'secondary' : 'primary'}
          value={percent}
          max={total}
        >
          {`L${index + 1}`}
        </Progress>
      ))}
    </Progress>
  );
};

export default LessonProgressbar;
