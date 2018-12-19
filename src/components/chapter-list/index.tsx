import React from 'react';
import { Link } from 'react-router-dom';
import { CourseInstructionType } from '../../typings';
import './style.css';
interface IProps {
  t: (key: string) => string;
  chapterList: CourseInstructionType;
  ch1Progress: number;
  progress?: any;
  isAuth: boolean;
}

const ChapterList: React.SFC<IProps> = (props) => {
  const { t, isAuth, chapterList, progress, ch1Progress } = props;
  const list = chapterList || [];

  const result = list.map((item, index) => {
    const chapterNum: number = index + 1;
    const chapterKey: string = `chapter${chapterNum}`;

    const progressProfile = progress || {};
    let chapterProgressNum: number = ch1Progress || 0;
    if (isAuth) {
      chapterProgressNum = progressProfile[chapterKey] || 0;
    }

    const lessons: string[] = item.lessons || [];
    const totalNum: number = lessons.length;

    const progressText = `(${chapterProgressNum}/${totalNum})`;

    const lessonToStart = totalNum <= chapterProgressNum ? totalNum : chapterProgressNum + 1;

    const startingChapterPath = `/chapter/${chapterNum}/lesson/${lessonToStart}`;
    return (
      <div key={startingChapterPath} className="m-2">
        <Link
          className="btn btn-primary btn-block text-left"
          to={startingChapterPath}
          aria-label={'start chapter'}
        >
          <small> {`${t('chapter.chapter')} ${chapterNum} :`}</small>
          {` ${item.title} `}
          <small>{progressText}</small>
        </Link>
      </div>
    );
  });

  return (
    <div className="chapter-list" data-test-id="chapter-list">
      {result}
    </div>
  );
};

export default ChapterList;
