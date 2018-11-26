import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import * as H from 'history';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { CourseInstructionType } from '../../typings';
import LessonList from '../../components/lesson-list';
import Spinner from '../../components/spinner';
import Layout from '../../components/layout';

interface IProps {
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  history: H.History;
  location: H.Location;
  instructions: CourseInstructionType;
}

class LessonContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { instructions, i18n, t } = this.props;
    const lang: string = i18n.language;
    if (instructions === undefined || instructions[lang] === undefined) {
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
          <div style={{ paddingTop: 30, paddingBottom: 100 }}>
            <Row className="py-5">
              <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
                <h3>{t('lesson.listTitle')}</h3>
                <br />
                <LessonList lessonList={intructionsLocalized} t={t} />
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

// @ts-ignore
const WithTranslation = withNamespaces()(LessonContainer);
// @ts-check
const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions
});

export default connect(mapStateToProps)(WithTranslation);
