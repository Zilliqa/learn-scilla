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
  goNext: () => void;
}

interface IState {
  code: string;
  codeForDiff: string;
  isAnswerVisible: boolean;
}

export default class CodeREPL extends React.Component<IProps, IState> {
  public readonly state = {
    code: '',
    codeForDiff: this.props.answerCode,
    isAnswerVisible: false
  };

  public componentDidMount() {
    this.setState({ code: this.props.initialCode });
  }

  public render(): React.ReactNode {
    const { t, instruction, answerCode } = this.props;
    const { code, codeForDiff, isAnswerVisible } = this.state;
    return (
      <Row>
        <Col xs={12} sm={12} md={6} lg={5}>
          <CodeInstruction instruction={instruction} t={t} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={7}>
          <CodeEditor
            code={code}
            checkAnswer={this.checkAnswer}
            showHint={this.showHint}
            toggleShowAnswer={this.toggleShowAnswer}
            isAnswerVisible={isAnswerVisible}
            t={t}
          >
            <CodeDiff
              codeForDiff={codeForDiff}
              answerCode={answerCode}
              isAnswerVisible={isAnswerVisible}
              t={t}
            />
          </CodeEditor>
        </Col>
      </Row>
    );
  }

  // Controls the visibility of answer code
  public toggleShowAnswer = (): void => {
    this.setState({ isAnswerVisible: !this.state.isAnswerVisible });
  };

  // Updates code for hint
  public showHint = (codeForDiff: string, cb): void => {
    this.setState({ code: codeForDiff, codeForDiff }, cb);
  };

  // Checks the code written by user if it's correct
  public checkAnswer = (code: string): void => {
    const { answerCode } = this.props;
    const isCorrect = this.compareAnswer(code, answerCode);
    if (isCorrect) {
      alert('Correct!');
      this.initializeState();
      this.props.goNext();
    } else {
      alert('Try again!');
    }
  };

  private initializeState = () => {
    this.setState({
      code: this.props.initialCode,
      codeForDiff: this.props.answerCode,
      isAnswerVisible: false
    });
  };

  // Compares code written by user and the answer
  private compareAnswer = (submitted: string, answer: string): boolean => {
    return submitted === answer;
  };
}
