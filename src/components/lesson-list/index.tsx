import React from 'react';
import uuidv4 from 'uuid/v4';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

const LessonList = (props) => {
  const { t, profile, lessonList } = props;
  const list = lessonList || [];
  return list.map((item, index) => {
    const lessonNum: number = index + 1;
    const lessonKey: string = `lesson${lessonNum}`;
    const lessonProgressNum: number = profile[lessonKey] || 0;
    const isLoaded: boolean = profile.isLoaded;
    const chapters: string[] = item.chapters || [];
    const totalNum: number = chapters.length;

    const progressText = isLoaded ? `[${lessonProgressNum}/${totalNum}]` : '';
    const progressPercent = Math.floor((lessonProgressNum / totalNum) * 100);
    const chapterToStart = totalNum <= lessonProgressNum ? totalNum : lessonProgressNum + 1;

    return (
      <div key={uuidv4()}>
        <Link
          className="btn btn-outline-primary btn-block text-left"
          to={`/lesson/${lessonNum}/chapter/${chapterToStart}`}
        >
          {`${t('lesson.lesson')} ${lessonNum}`}: {`${item.title} ${progressText}`}
        </Link>
        <Line
          style={{ marginTop: -15 }}
          percent={`${progressPercent}`}
          strokeWidth={1}
          strokeColor={'#007bff'}
          trailColor={isLoaded ? '#D9D9D9' : 'transparent'}
        />
      </div>
    );
  });
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(LessonList);
