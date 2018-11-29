import React from 'react';
import Progress from '../progress';

interface IProps {
  current: number;
  total: number;
}

// Renders step progressbar dynamically
const LessonProgressbar: React.SFC<IProps> = ({ current, total }) => {
  // initialized array with the given total number
  const progressPercent = Math.floor((current / total) * 100);
  return <Progress value={progressPercent} />;
};

export default LessonProgressbar;
