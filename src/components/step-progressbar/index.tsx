import React from 'react';
import { Progress } from 'reactstrap';

interface IProps {
  current: number;
  total: number;
}

// Renders step progressbar dynamically
const StepProgressbar: React.SFC<IProps> = ({ current, total }) => {
  // initialized array with the given total number
  const progressPercent = Math.floor((current / total) * 100);
  return <Progress style={{ height: 5 }} value={progressPercent} />;
};

export default StepProgressbar;
