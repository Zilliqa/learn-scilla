import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import './style.css';
import { Button } from 'uxd-components';

interface IProps {
  t: (key: string) => string;
  total: number;
  chapter: number;
  navigate: (chapterNum: number, lessonNum: number) => void;
}

class ChapterCompleteCard extends React.PureComponent<IProps, {}> {
  public render(): React.ReactNode {
    const { t, total, chapter, navigate } = this.props;

    // Check if the current chapter is the last one.
    const isLast: boolean = chapter === total;

    return (
      <div
        className="chapter-complete-card card card-body text-center py-5"
        data-testid="chapter-complete-card"
      >
        <div className="text-secondary">
          <h3>{t('chapter.goodjob')}!</h3>
          <p>{t('chapter.chapterCompleteMessage')}</p>
          <br />
          {isLast ? null : (
            <Button
              level="primary"
              text={t('lesson.nextLesson')}
              onClick={() => navigate(chapter + 1, 1)}
              type="button"
            />
          )}{' '}
          <Link
            className={`btn type-secondary`}
            to={paths.chapterList}
            aria-label={'table of contents'}
          >
            {t('link.tableOfContents')}
          </Link>
        </div>
      </div>
    );
  }
}

export default ChapterCompleteCard;
