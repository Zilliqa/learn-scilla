import React from 'react';
import { Col, Row } from 'reactstrap';

import CodeInstruction from './code-intruction';
import CodeEditor from './code-editor';
import CodeDiff from './code-diff';

interface IProps {
  t: (key: string) => string;
  initialCode: string;
  answerCode: string;
  instruction: string;
}

interface IState {
  code: string;
  codeForDiff: string;
  showAnswer: boolean;
}

export default class CodeREPL extends React.Component<IProps, IState> {
  public readonly state = {
    code: this.props.initialCode,
    codeForDiff: this.props.answerCode,
    showAnswer: false
  };

  public render(): React.ReactNode {
    const { t, instruction, answerCode } = this.props;
    const { code, codeForDiff, showAnswer } = this.state;
    return (
      <Row>
        <Col xs={12} sm={12} md={6} lg={5}>
          <CodeInstruction instruction={instruction} t={t} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={7}>
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
    );
  }

  // Controls the visibility of answer code
  public toggleShowAnswer = (): void => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  // Updates code for hint
  public submitCode = (codeForDiff: string, cb): void => {
    this.setState({ codeForDiff }, cb);
  };

  // Checks the code written by user if it's correct
  public checkAnswer = (code: string): void => {
    const { answerCode } = this.props;
    const isCorrect = this.compareAnswer(code, answerCode);
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  // Compares code written by user and the answer
  private compareAnswer = (submitted: string, answer: string): boolean => {
    return submitted === answer;
  };
}
