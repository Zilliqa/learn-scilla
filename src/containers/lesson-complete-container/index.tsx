import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import Layout from '../../components/layout';

import { Link } from 'react-router-dom';
import * as H from 'history';
import { IMatch, CourseCodeType } from '../../typings';
import { paths } from '../../routes';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Card from 'reactstrap/lib/Card';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  match: IMatch;
  codes: CourseCodeType;
}

class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, match, t, codes } = this.props;
    const routeParams = match.params;

    const currentLessonNum: number = parseInt(routeParams.lesson, 10);
    const numOfTotalLesson = codes.length;

    const isLast: boolean = numOfTotalLesson === currentLessonNum;
    const documentTitle = `LearnScilla - Lesson ${currentLessonNum} Complete`;

    const nextLessonPath = `/lesson/${currentLessonNum + 1}/chapter/1`;
    return (
      <Layout>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container">
          <Row className="py-5">
            <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
              <Card body={true} outline={true} color="secondary">
                <div className="py-5 text-secondary">
                  <h3>{t('lesson.goodjob')}!</h3>
                  <p>{t('lesson.lessonCompleteMessage')}</p>
                  <br />

                  {isLast ? null : (
                    <Link className="btn btn-primary btn-block" to={nextLessonPath}>
                      {t('lesson.nextLesson')}
                    </Link>
                  )}

                  <Link className="btn btn-outline-secondary btn-block" to={paths.lessonList}>
                    {t('link.tableOfContents')}
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

// @ts-ignore
const WithTranslation = withNamespaces()(LessonContainer);
// @ts-check
const mapStateToProps = (state) => ({
  codes: state.course.courseCodes
});

export default connect(
  mapStateToProps,
  undefined
)(WithTranslation);
