import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import * as H from 'history';
import { CourseInstructionType } from '../../typings';
import ChapterList from '../../components/chapter-list';
import { Spinner } from 'accessible-ui';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { openAuthModal } from '../../redux/auth';

interface IProps {
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  history: H.History;
  location: H.Location;
  instructions: CourseInstructionType;
  profile: any;
  ch1Progress: number;
  openAuthModal: () => void;
}

class ChapterContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { instructions, i18n, t, profile, ch1Progress } = this.props;
    const { isLoaded, isEmpty, progress } = profile;
    const lang: string = i18n.language;
    if (!isLoaded || instructions === undefined || instructions[lang] === undefined) {
      return (
        <div className="text-center py-5">
          <Spinner />
        </div>
      );
    }

    const intructionsLocalized = instructions[lang];
    const documentTitle = `LearnScilla - An interactive tutorial for people to learn Scilla`;
    const isAuth = !isEmpty;

    return (
      <div>
        <Header />
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container">
          <div className="chapter-list-container">
            <div className="row py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 mr-auto ml-auto text-center">
                <h3>{t('chapter.listTitle')}</h3>
                <br />
                <ChapterList
                  chapterList={intructionsLocalized}
                  isAuth={isAuth}
                  progress={progress}
                  ch1Progress={ch1Progress}
                  navigate={this.navigate}
                  t={t}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  private navigate = (chapterNum, lessonNum) => {
    const { profile, history } = this.props;
    const { isEmpty } = profile;
    const isAuth = !isEmpty;
    if (!isAuth && chapterNum > 1) {
      return this.props.openAuthModal();
    }

    const startingChapterPath = `/chapter/${chapterNum}/lesson/${lessonNum}`;
    return history.push(startingChapterPath);
  };
}

// @ts-ignore
const WithTranslation = withNamespaces()(ChapterContainer);
// @ts-check
const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions,
  profile: state.firebase.profile,
  ch1Progress: state.persist.ch1Progress
});
const mapDispatchToProps = (dispatch) => ({
  openAuthModal: () => dispatch(openAuthModal())
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(WithTranslation);
