import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Layout from '../../components/layout';
import { Container, Row, Col, Card, CardTitle } from 'reactstrap';
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

class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, match, t, codes } = this.props;
    const routeParams = match.params;

    const lesson: number = parseInt(routeParams.lesson, 10);
    const lessonKey: string = `lesson${lesson}`;
    const codeChapterList = codes[lessonKey];
    const total = codeChapterList.length;
    const isLastLesson: boolean = total === lesson;
    return (
      <Layout location={location} history={history}>
        <Container>
          <Row className="py-5">
            <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
              <Card body={true} outline={true} color="secondary">
                <div className="py-5">
                  <CardTitle>{t('lesson.congratulations')}</CardTitle>
                  <p>{t('lesson.completeMessage')}</p>
                  <br />
                  {isLastLesson ? null : (
                    <Link
                      className="btn btn-primary btn-block"
                      to={`/lesson/${lesson + 1}/chapter/1`}
                    >
                      {t('lesson.nextLesson')}
                    </Link>
                  )}

                  <Link className="btn btn-outline-secondary btn-block" to={paths.lessonList}>
                    {t('link.contentMenu')}
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

const WithTranslation = translate('translations')(LessonContainer);

const mapStateToProps = (state) => ({
  codes: state.course.courseCodes
});

export default connect(
  mapStateToProps,
  undefined
)(WithTranslation);
