import React from 'react';

import Editor from './editor';
import DiffViewer from './diff-viewer';
import Modal from './modal';
import * as H from 'history';

interface IProps {
  t: (key: string) => string;
  initialCode: string;
  answerCode: string;
  proceed: () => void;
  location: H.Location;
}

interface IState {
  code: string;
  codeForDiff: string;
  isAnswerVisible: boolean;
  isModalVisible: boolean;
  isHintButtonVisible: boolean;
}

export default class EditorUI extends React.Component<IProps, IState> {
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

  public componentWillReceiveProps(nextProps) {
    const nextLocation = nextProps.location;
    const currentLocation = this.props.location;

    // if chapter changes, initialize state
    if (nextLocation.pathname !== currentLocation.pathname) {
      this.initializeState();
    }
  }

  public render(): React.ReactNode {
    const { t, answerCode } = this.props;
    const { code, codeForDiff, isAnswerVisible, isHintButtonVisible, isModalVisible } = this.state;
    return (
      <div>
        <Modal
          t={t}
          onSubmit={this.handleProceed}
          isModalVisible={isModalVisible}
          closeModal={() => this.setState({ isModalVisible: false })}
        />
        <Editor
          code={code}
          checkAnswer={this.checkAnswer}
          showHint={this.showHint}
          isHintButtonVisible={isHintButtonVisible}
          toggleShowAnswer={this.toggleShowAnswer}
          isAnswerVisible={isAnswerVisible}
          t={t}
        >
          <DiffViewer
            codeForDiff={codeForDiff}
            answerCode={answerCode}
            isAnswerVisible={isAnswerVisible}
            t={t}
          />
        </Editor>
      </div>
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

  private initializeState = (): void => {
    // scroll to top
    const scrollToTop = () => window.scrollTo(0, 0);

    this.setState(
      {
        code: this.props.initialCode,
        codeForDiff: this.props.answerCode,
        isAnswerVisible: false,
        isModalVisible: false,
        isHintButtonVisible: false
      },
      scrollToTop
    );
  };

  // Compares code written by user and the answer
  private compareAnswer = (submitted: string, answer: string): boolean => {
    // TODO: Need a Scilla code fomatter to do better
    const isCorrect = this.formatCode(submitted) === this.formatCode(answer);
    return isCorrect;
  };

  private formatCode = (code: string): string => {
    return code
      .split('\n')
      .map((line) => line.replace(/\s\s+/g, ' ').trim())
      .join('\n');
  };

  private handleProceed = (): void => {
    this.initializeState();
    this.props.proceed();
  };
}
