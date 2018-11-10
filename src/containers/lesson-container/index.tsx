import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Layout from '../../components/layout';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as H from 'history';
import uuidv4 from 'uuid/v4';

import lessonCodes from '../../asset/lesson-code';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  accessToken: string;
  codes?: any;
}

export class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, codes, t } = this.props;
    const lang = 'en';
    const lessonKeys = Object.keys(codes);

    const lessonList = lessonKeys.map((lessonKey, index) => (
      <Link
        key={uuidv4()}
        className="btn btn-outline-primary btn-block"
        to={`/${lang}/lesson/${index + 1}/chapter/${1}`}
      >
        {`Lesson ${index + 1}`}
      </Link>
    ));

    return (
      <Layout location={location} history={history}>
        <Container>
          <Row className="py-5">
            <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
              {lessonList}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

const WithTranslation = translate('translations')(LessonContainer);

const mapStateToProps = (state) => ({
  accessToken: state.persist.accessToken,
  codes: lessonCodes
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
