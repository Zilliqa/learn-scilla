import React from 'react';
import Steps, { Step } from 'rc-steps';
import uuidv4 from 'uuid/v4';

interface IProps {
  current: number;
  total;
}

// Renders step progressbar dynamically
const StepProgressbar: React.SFC<IProps> = (props) => {
  // initialized array with the given total number
  const arrayWithLength = Array.from({ length: props.total });
  return (
    <Steps progressDot={true} size="small" current={props.current}>
      {arrayWithLength.map(() => (
        <Step key={uuidv4()} />
      ))}
    </Steps>
  );
};

export default StepProgressbar;
