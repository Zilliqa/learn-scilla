import React from 'react';
import uuidv4 from 'uuid/v4';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';

const LessonList = (props) => {
  const lessonList = props.lessonList || [];
  const t = props.t;
  return lessonList.map((item, index) => (
    <div key={uuidv4()}>
      <Link
        className="btn btn-outline-primary btn-block text-left"
        to={`/lesson/${index + 1}/chapter/${1}`}
      >
        {`${t('lesson.lesson')} ${index + 1}`}: {`${item.title}`}
      </Link>
      <Line style={{ marginTop: -15 }} percent="10" strokeWidth="1" strokeColor="#007bff" />
    </div>
  ));
};

export default LessonList;
