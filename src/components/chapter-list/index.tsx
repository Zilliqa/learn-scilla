import React from 'react';
import { CourseInstructionType } from '../../typings';
import './style.css';
import Button from '../button';

interface IProps {
  t: (key: string) => string;
  chapterList: CourseInstructionType;
  ch1Progress: number;
  progress?: any;
  navigate: (chapterNum, lessonNum) => void;
  isAuth: boolean;
}

const ChapterList: React.SFC<IProps> = (props) => {
  const { t, isAuth, chapterList, progress, ch1Progress, navigate } = props;
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
    const lessonNum = totalNum <= chapterProgressNum ? totalNum : chapterProgressNum + 1;
    return (
      <div key={chapterNum} className="m-2">
        <Button
          type="primary"
          className="btn-block text-left"
          text={` ${item.title} `}
          onClick={() => navigate(chapterNum, lessonNum)}
          ariaLabel={'start chapter'}
          before={<small> {`${t('chapter.chapter')} ${chapterNum} :`}</small>}
          after={<small>{progressText}</small>}
        />
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
