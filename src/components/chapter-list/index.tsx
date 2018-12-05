import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import Spinner from '../spinner';

const ChapterList: React.SFC<any> = (props) => {
  const { t, profile, chapterList } = props;
  const list = chapterList || [];

  const isLoaded: boolean = profile.isLoaded;
  const isAuth: boolean = !profile.isEmpty;
  const showProgressText = isLoaded && isAuth;

  if (!isLoaded) {
    return <Spinner />;
  }

  return list.map((item, index) => {
    const chapterNum: number = index + 1;
    const chapterKey: string = `chapter${chapterNum}`;

    const progressProfile = profile.progress || {};
    const chapterProgressNum: number = progressProfile[chapterKey] || 0;

    const lessons: string[] = item.lessons || [];
    const totalNum: number = lessons.length;

    const progressText = showProgressText ? `(${chapterProgressNum}/${totalNum})` : '';
    const lessonToStart = totalNum <= chapterProgressNum ? totalNum : chapterProgressNum + 1;

    const startingChapterPath = `/chapter/${chapterNum}/lesson/${lessonToStart}`;
    return (
      <div key={startingChapterPath} style={{ margin: 10 }}>
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
};

const mapStateToProps = (state) => ({
  profile: state.firebase.profile
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(ChapterList);
