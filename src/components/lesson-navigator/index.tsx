import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../button';

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
    <div role="group" className="btn-group" data-test-id="lesson-navigator">
      <Button
        type="secondary"
        size="sm"
        text={t('lesson.back')}
        onClick={goBack}
        disabled={isBackButtonDisabled}
        ariaLabel={'Back'}
        icon={{ image: <FaArrowLeft />, position: 'before' }}
      />

      <Button
        type="secondary"
        size="sm"
        text={t('lesson.skip')}
        onClick={goNext}
        disabled={isProceedButtonDisabled}
        ariaLabel={'Skip'}
        icon={{ image: <FaArrowRight />, position: 'after' }}
      />
    </div>
  );
};

export default LessonNavigator;
