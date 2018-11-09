import React from 'react';
import Layout from '../../components/layout';
import { Col, Row } from 'reactstrap';
import Steps, { Step } from 'rc-steps';
import { translate } from 'react-i18next';
import * as H from 'history';

import CodeLesson from '../../components/code-lesson';
import CodeEditor from '../../components/code-editor';
import CodeDiff from '../../components/code-diff';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
}
interface IState {
  code: string;
  showAnswer: boolean;
}

const initialCode = `
var x = 1;
var y = 0;
var a = 0;
`;

const codeAnswer = `
var x = 1;
var y = 0;
var z = x + y;
`;

export class CodeContainer extends React.Component<IProps, IState> {
  public readonly state = {
    code: '',
    showAnswer: false
  };
  public componentDidMount() {
    this.setState({ code: initialCode });
  }
  public render(): React.ReactNode {
    const { location, history, t } = this.props;
    const { code, showAnswer } = this.state;
    return (
      <Layout location={location} history={history}>
        <Steps progressDot={true} size="small" current={1}>
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <CodeLesson lesson={`## Title \n ### Subtitle \n * item1`} />
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <CodeEditor
              code={code}
              submitCode={this.submitCode}
              showAnswer={showAnswer}
              toggleShowAnswer={this.toggleShowAnswer}
              t={t}
            >
              <CodeDiff original={code} code={codeAnswer} showAnswer={showAnswer} />
            </CodeEditor>
          </Col>
        </Row>
      </Layout>
    );
  }

  public toggleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  public submitCode = (code) => {
    this.setState({ code });
  };
}

const WithTranslation = translate('translations')(CodeContainer);
export default WithTranslation;
