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
  codeForDiff: string;
  showAnswer: boolean;
}

const initialCode = `
var x = 1;
var y = 0;
var y = 0;
`;

const answerCode = `
var x = 1;
var y = 0;
var z = x + y;
`;

export class CodeContainer extends React.Component<IProps, IState> {
  public readonly state = {
    code: initialCode,
    codeForDiff: answerCode,
    showAnswer: false
  };

  public render(): React.ReactNode {
    const { location, history, t } = this.props;
    const { code, codeForDiff, showAnswer } = this.state;
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
              checkAnswer={this.checkAnswer}
              toggleShowAnswer={this.toggleShowAnswer}
              t={t}
            >
              <CodeDiff codeForDiff={codeForDiff} answerCode={answerCode} showAnswer={showAnswer} />
            </CodeEditor>
          </Col>
        </Row>
      </Layout>
    );
  }

  public toggleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  public submitCode = (codeForDiff, cb) => {
    this.setState({ codeForDiff }, cb);
  };

  public checkAnswer = (code: string) => {
    // const { answerCode } = this.props;
    const isCorrect = this.compareAnswer(code, answerCode);
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  private compareAnswer = (submitted: string, answer: string): boolean => {
    return submitted === answer;
  };
}

const WithTranslation = translate('translations')(CodeContainer);
export default WithTranslation;
