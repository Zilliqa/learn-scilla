import React from 'react';

import './style.css';
import classNames from 'classnames';

interface IProps {
  lessonNumber: number;
  chapterNumber: number;
  total: number;
  navigate: (chapterNum: number, lessonNum: number) => void;
}

// Renders step progressbar dynamically
const LessonProgressbar: React.SFC<IProps> = ({ navigate, chapterNumber, lessonNumber, total }) => {
  // initialized array with the given total number
  const list = Array.from({ length: total });
  const percent = (1 / total) * 100;
  const currentChapterText = `Chapter ${chapterNumber}`;
  return (
    <div className="text-center">
      <div className="py-2">
        <span>{currentChapterText}</span>
      </div>
      <Progress
        multi={true}
        className="lesson-progress-bar-container"
        data-testid="lesson-progressbar"
      >
        {list.map((item, index) => {
          const isLocked = lessonNumber <= index;
          const color = isLocked ? 'secondary' : 'primary';
          return (
            <Progress
              data-testid={`lesson-progressbar-block${index}`}
              key={index}
              onClick={() => navigate(chapterNumber, index + 1)}
              barClassName={`lesson-progress-bar cursor-pointer`}
              bar={true}
              color={color}
              value={percent}
              max={total}
            />
          );
        })}
      </Progress>
    </div>
  );
};

export default LessonProgressbar;

interface IProgressProps {
  onClick?: () => void;
  children?: any;
  bar?: boolean;
  multi?: boolean;
  value?: number;
  max?: number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  className?: string;
  barClassName?: string;
}

const Progress = (props: IProgressProps) => {
  const {
    children,
    className,
    barClassName,
    value = 0,
    max = 100,
    animated,
    striped,
    color,
    bar,
    multi,
    onClick,
    ...attributes
  } = props;

  const percent = (value / max) * 100;
  const progressClasses = classNames(className, 'progress');

  const progressBarClasses = classNames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  );

  const ProgressBar = multi ? (
    children
  ) : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      onClick={onClick}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      children={children}
    />
  );

  if (bar) {
    return ProgressBar;
  }

  return <div {...attributes} className={progressClasses} children={ProgressBar} />;
};
