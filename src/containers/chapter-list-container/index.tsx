import React from 'react';
import { Helmet } from 'react-helmet';
import * as H from 'history';

import courseInstructions from '../../locales/instructions';

import ChapterList from '../../components/chapter-list';
import { Spinner } from 'accessible-ui';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './style.css';

interface IProps {
  history: H.History;
  location: H.Location;
}

class ChapterContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const lang: string = 'en';
    if (courseInstructions === undefined || courseInstructions[lang] === undefined) {
      return (
        <div className="text-center py-5">
          <Spinner />
        </div>
      );
    }

    const intructionsLocalized = courseInstructions[lang];
    const documentTitle = `LearnScilla - An interactive tutorial for people to learn Scilla`;

    return (
      <div>
        <Header {...this.props} />
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container">
          <div className="chapter-list-container">
            <div className="row py-5">
              <div className="col-sm-10 col-md-8 col-lg-5 mr-auto ml-auto text-center">
                <h3>{'Scilla Tutorial'}</h3>
                <br />
                <ChapterList chapterList={intructionsLocalized} navigate={this.navigate} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  private navigate = (chapterNum, lessonNum) => {
    const { history } = this.props;
    const startingChapterPath = `/chapter/${chapterNum}/lesson/${lessonNum}`;
    return history.push(startingChapterPath);
  };
}

export default ChapterContainer;
