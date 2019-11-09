import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from 'react-fn-components';

interface IProps {
  goNext: () => void;
  goBack: () => void;
  lessonNumber: number;
  total: number;
}

const LessonNavigator: React.SFC<IProps> = (props) => {
  const { goNext, goBack, lessonNumber, total } = props;

  const isBackButtonDisabled = lessonNumber <= 1;
  const isProceedButtonDisabled = lessonNumber >= total;

  return (
    <div role="group" className="btn-group" data-testid="lesson-navigator">
      <Button
        level="secondary"
        size="small"
        text={'Back'}
        onClick={goBack}
        disabled={isBackButtonDisabled}
        before={<FaArrowLeft />}
        type="button"
      />

      <Button
        level="secondary"
        size="small"
        text={'Skip'}
        onClick={goNext}
        disabled={isProceedButtonDisabled}
        after={<FaArrowRight />}
        type="button"
      />
    </div>
  );
};

export default LessonNavigator;
