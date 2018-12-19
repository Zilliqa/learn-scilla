import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import './style.css';

interface IProps {
  t: (key: string) => string;
  total: number;
  chapter: number;
}

class ChapterCompleteCard extends React.PureComponent<IProps, {}> {
  public render(): React.ReactNode {
    const { t, total, chapter } = this.props;

    // Check if the current chapter is the last one.
    const isLast: boolean = chapter === total;

    const nextLessonPath = `/chapter/${chapter + 1}/lesson/1`;
    return (
      <div
        className="chapter-complete-card card card-body text-center py-5"
        data-test-id="chapter-complete-card"
      >
        <div className="text-secondary">
          <h3>{t('chapter.goodjob')}!</h3>
          <p>{t('chapter.chapterCompleteMessage')}</p>
          <br />
          {isLast ? null : (
            <Link className="btn btn-primary" to={nextLessonPath} aria-label={'next lesson'}>
              {t('lesson.nextLesson')}
            </Link>
          )}{' '}
          <Link
            className={`btn btn-${isLast ? 'primary' : 'outline-secondary'}`}
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
