import React from 'react';
import { Col, Row } from 'reactstrap';

import CodeInstruction from './code-intruction';
import CodeEditor from './code-editor';
import CodeDiff from './code-diff';
import CodeModal from './code-modal';

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
  isModalVisible: boolean;
  isHintButtonVisible: boolean;
}

export default class CodeREPL extends React.Component<IProps, IState> {
  public readonly state = {
    code: '',
    codeForDiff: this.props.answerCode,
    isAnswerVisible: false,
    isModalVisible: false,
    isHintButtonVisible: false
  };

  public componentDidMount() {
    this.setState({ code: this.props.initialCode });
  }

  public render(): React.ReactNode {
    const { t, instruction, answerCode } = this.props;
    const { code, codeForDiff, isAnswerVisible, isHintButtonVisible } = this.state;
    return (
      <Row>
        {this.renderModal()}
        <Col xs={12} sm={12} md={6} lg={5}>
          <CodeInstruction instruction={instruction} t={t} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={7}>
          <CodeEditor
            code={code}
            checkAnswer={this.checkAnswer}
            showHint={this.showHint}
            isHintButtonVisible={isHintButtonVisible}
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
    this.setState({ isHintButtonVisible: true, code: codeForDiff, codeForDiff }, cb);
  };

  // Checks the code written by user if it's correct
  public checkAnswer = (code: string): void => {
    const { answerCode } = this.props;
    const isCorrect = this.compareAnswer(code, answerCode);
    const newState = {
      code,
      codeForDiff: code
    };
    if (isCorrect) {
      this.setState({
        isModalVisible: true,
        ...newState
      });
    } else {
      this.setState({ ...newState });
    }
  };

  private initializeState = () => {
    this.setState({
      code: this.props.initialCode,
      codeForDiff: this.props.answerCode,
      isAnswerVisible: false,
      isModalVisible: false
    });
  };

  // Compares code written by user and the answer
  private compareAnswer = (submitted: string, answer: string): boolean => {
    // TODO: require better comparison
    const isCorrect = submitted.trim() === answer.trim();
    return isCorrect;
  };

  private renderModal = () => {
    const { t } = this.props;
    const { isModalVisible } = this.state;
    const closeModal = () => this.setState({ isModalVisible: false });
    const proceed = () => {
      this.initializeState();
      this.props.goNext();
    };

    return (
      <CodeModal t={t} proceed={proceed} isModalVisible={isModalVisible} closeModal={closeModal} />
    );
  };
}
