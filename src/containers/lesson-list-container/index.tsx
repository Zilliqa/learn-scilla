import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Layout from '../../components/layout';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as H from 'history';
import uuidv4 from 'uuid/v4';
import { Line } from 'rc-progress';
import Spinner from '../../components/spinner';
import { CourseInstructionType } from '../../typings';
interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  accessToken: string;
  instructions: CourseInstructionType;
}

export class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, instructions, i18n, t } = this.props;

    const lang: string = i18n.language;

    if (instructions === undefined || instructions[lang] === undefined) {
      return <Spinner />;
    }

    const intructionsLocalized = instructions[lang];
    const lessonList = intructionsLocalized.map((item, index) => (
      <div key={uuidv4()}>
        <Link
          className="btn btn-outline-primary btn-block text-left"
          to={`/lesson/${index + 1}/chapter/${1}`}
        >
          {`${t('lesson.lesson')} ${index + 1}`}: {`${item.title}`}
        </Link>
        <Line style={{ marginTop: -15 }} percent="10" strokeWidth="1" strokeColor="#007bff" />
      </div>
    ));

    return (
      <Layout location={location} history={history}>
        <Container>
          <div style={{ paddingTop: 30, paddingBottom: 100 }}>
            <Row className="py-5">
              <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
                <h3>{t('lesson.listTitle')}</h3>
                <br />
                {lessonList}
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
    );
  }
}

const WithTranslation = translate('translations')(LessonContainer);

const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
