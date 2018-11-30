import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Layout from '../../components/layout';

import { Link } from 'react-router-dom';
import * as H from 'history';
import { IMatch, CourseCodeType } from '../../typings';
import { paths } from '../../routes';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  match: IMatch;
  codes: CourseCodeType;
}

class ChapterContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, match, t, codes } = this.props;
    const routeParams = match.params;

    const currentChapterNum: number = parseInt(routeParams.chapter, 10);
    const numOfTotalChapter = codes.length;

    const isLast: boolean = numOfTotalChapter === currentChapterNum;
    const documentTitle = `LearnScilla - Chapter ${currentChapterNum} Complete`;

    const nextLessonPath = `/chapter/${currentChapterNum + 1}/lesson/1`;
    return (
      <Layout>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-10 col-md-8 col-lg-5 mr-auto ml-auto text-center">
              <div className="card card-body border-secondary">
                <div className="py-5 text-secondary">
                  <h3>{t('chapter.goodjob')}!</h3>
                  <p>{t('chapter.chapterCompleteMessage')}</p>
                  <br />

                  {isLast ? null : (
                    <Link
                      className="btn btn-primary btn-block"
                      to={nextLessonPath}
                      aria-label={'next lesson'}
                    >
                      {t('lesson.nextLesson')}
                    </Link>
                  )}

                  <Link
                    className="btn btn-outline-secondary btn-block"
                    to={paths.chapterList}
                    aria-label={'table of contents'}
                  >
                    {t('link.tableOfContents')}
                  </Link>
                </div>
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
  codes: state.course.courseCodes
});

export default connect(
  mapStateToProps,
  undefined
)(WithTranslation);
