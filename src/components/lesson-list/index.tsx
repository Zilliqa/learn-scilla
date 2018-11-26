import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import Spinner from '../spinner';

const LessonList: React.SFC<any> = (props) => {
  const { t, profile, lessonList } = props;
  const list = lessonList || [];

  const isLoaded: boolean = profile.isLoaded;
  const isAuth: boolean = !profile.isEmpty;
  const showProgressText = isLoaded && isAuth;

  if (!isLoaded) {
    return <Spinner />;
  }

  return list.map((item, index) => {
    const lessonNum: number = index + 1;
    const lessonKey: string = `lesson${lessonNum}`;

    const progressProfile = profile.progress || {};
    const lessonProgressNum: number = progressProfile[lessonKey] || 0;

    const chapters: string[] = item.chapters || [];
    const totalNum: number = chapters.length;

    const progressText = showProgressText ? `(${lessonProgressNum}/${totalNum})` : '';
    const chapterToStart = totalNum <= lessonProgressNum ? totalNum : lessonProgressNum + 1;

    const startingLessonPath = `/lesson/${lessonNum}/chapter/${chapterToStart}`;
    return (
      <div key={startingLessonPath} style={{ margin: 10 }}>
        <Link className="btn btn-primary btn-block text-left" to={startingLessonPath}>
          <small> {`${t('lesson.lesson')} ${lessonNum} :`}</small>
          {` ${item.title} `}
          <small>{progressText}</small>
        </Link>
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
