import React from 'react';

interface IProps {
  value: number;
  color?: string;
  max?: number;
}
const Progress: React.SFC<IProps> = (props) => {
  const { value = 0, max = 100, color } = props;
  const percent = (value / max) * 100;
  const colorStyle = color ? `bg-${color}` : '';

  return (
    <div className={'progress'} style={{ height: 5 }}>
      <div
        className={`progress-bar ${colorStyle}`}
        style={{ width: `${percent}%`, backgroundColor: '#3740ff' }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
};

export default Progress;
