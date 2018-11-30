import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  goNext: () => void;
  goBack: () => void;
  lessonNumber: number;
  total: number;
}

const LessonNavigator: React.SFC<IProps> = (props) => {
  const { t, goNext, goBack, lessonNumber, total } = props;

  const isBackButtonDisabled = lessonNumber <= 1;
  const isProceedButtonDisabled = lessonNumber >= total;

  return (
    <div role="group" className="btn-group">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={goBack}
        disabled={isBackButtonDisabled}
        aria-label={'back'}
      >
        <FaArrowLeft /> {t('lesson.back')}
      </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={goNext}
        disabled={isProceedButtonDisabled}
        aria-label={'skip'}
      >
        {t('lesson.skip')} <FaArrowRight />
      </button>
    </div>
  );
};

export default LessonNavigator;
