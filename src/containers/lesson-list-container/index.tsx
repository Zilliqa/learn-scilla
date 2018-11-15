import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Layout from '../../components/layout';
import { Container, Row, Col } from 'reactstrap';
import * as H from 'history';
import LessonList from '../../components/lesson-list';
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

class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { location, history, instructions, i18n, t } = this.props;

    const lang: string = i18n.language;

    if (instructions === undefined || instructions[lang] === undefined) {
      return <Spinner />;
    }

    const intructionsLocalized = instructions[lang];

    return (
      <Layout location={location} history={history}>
        <Container>
          <div style={{ paddingTop: 30, paddingBottom: 100 }}>
            <Row className="py-5">
              <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
                <h3>{t('lesson.listTitle')}</h3>
                <br />
                <LessonList lessonList={intructionsLocalized} t={t} />
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

export default connect(
  mapStateToProps,
  undefined
)(WithTranslation);
