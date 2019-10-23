import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import './style.css';
import { Button } from 'accessible-ui';

interface IProps {
  total: number;
  chapter: number;
  navigate: (chapterNum: number, lessonNum: number) => void;
}

const ChapterCompleteCard: FunctionComponent<IProps> = ({ total, chapter, navigate }) => {
  // Check if the current chapter is the last one.
  const isLast: boolean = chapter === total;

  return (
    <div
      className="chapter-complete-card card card-body text-center py-5"
      data-testid="chapter-complete-card"
    >
      <div className="text-secondary">
        <h3>{`Good Job`}!</h3>
        <p>{`You have completed this chapter.`}</p>
        <br />
        <div>
          {isLast ? null : (
            <Button
              level="primary"
              text={`Proceed to Next Lesson`}
              onClick={() => navigate(chapter + 1, 1)}
              type="button"
            />
          )}
        </div>
        <br />
        <Link to={paths.chapterList} aria-label={'table of contents'}>
          {`Table of Contents`}
        </Link>
      </div>
    </div>
  );
};

export default ChapterCompleteCard;
