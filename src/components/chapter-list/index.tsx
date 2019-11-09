import React from 'react';
import { CourseInstructionType } from '../../typings';
import './style.css';
import { Button } from 'react-fn-components';

interface IProps {
  chapterList: CourseInstructionType;
  navigate: (chapterNum, lessonNum) => void;
}

const ChapterList: React.SFC<IProps> = (props) => {
  const { chapterList, navigate } = props;
  const list = chapterList || [];

  const result = list.map((item, index) => {
    const chapterNum: number = index + 1;

    const chapterProgressNum = Number(localStorage.getItem(`chapter${chapterNum}`)) || 0;

    const lessons: string[] = item.lessons || [];
    const totalNum: number = lessons.length;
    const lessonNum = totalNum <= chapterProgressNum ? totalNum : chapterProgressNum + 1;
    const progressText = `(${lessonNum}/${totalNum})`;

    return (
      <div key={chapterNum} className="m-2">
        <Button
          level="secondary"
          className="btn-block text-left"
          text={` ${item.title} `}
          onClick={() => navigate(chapterNum, lessonNum)}
          before={<small> {`Chapter ${chapterNum} :`}</small>}
          after={<small>{progressText}</small>}
          type="button"
        />
      </div>
    );
  });

  return (
    <div className="chapter-list" data-testid="chapter-list">
      {result}
    </div>
  );
};

export default ChapterList;
