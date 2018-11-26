import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  goNext: () => void;
  goBack: () => void;
  chapterNumber: number;
  total: number;
}

const ChapterNavigator: React.SFC<IProps> = (props) => {
  const { t, goNext, goBack, chapterNumber, total } = props;

  const isBackButtonDisabled = chapterNumber <= 1;
  const isProceedButtonDisabled = chapterNumber >= total;

  return (
    <div role="group" className="btn-group">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={goBack}
        disabled={isBackButtonDisabled}
      >
        <FaArrowLeft /> {t('chapter.back')}
      </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={goNext}
        disabled={isProceedButtonDisabled}
      >
        {t('chapter.skip')} <FaArrowRight />
      </button>
    </div>
  );
};

export default ChapterNavigator;
