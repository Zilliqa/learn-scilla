import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import * as H from 'history';
import { CourseInstructionType } from '../../typings';
import ChapterList from '../../components/chapter-list';
import Spinner from '../../components/spinner';
import Layout from '../../components/layout';
import './style.css';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
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
  ch1Progress?: number;
}

class ChapterContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { instructions, i18n, t, profile, ch1Progress = 0 } = this.props;
    const { isLoaded, isEmpty, progress } = profile;
    const lang: string = i18n.language;
    if (instructions === undefined || instructions[lang] === undefined) {
      return <Spinner />;
    }

    if (!isLoaded) {
      return <Spinner />;
    }
    const intructionsLocalized = instructions[lang];
    const documentTitle = `LearnScilla - An interactive tutorial for people to learn Scilla`;

    return (
      <Layout>
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
                  isAuth={!isEmpty}
                  progress={progress}
                  ch1Progress={ch1Progress}
                  t={t}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

// @ts-ignore
const WithTranslation = withNamespaces()(ChapterContainer);
// @ts-check
const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions,
  profile: state.firebase.profile,
  ch1Progress: state.persist.ch1Progress
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(WithTranslation);
