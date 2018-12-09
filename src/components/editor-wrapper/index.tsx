import React from 'react';

import Editor from '../editor';
import DiffViewer from '../diff-viewer';
import Modal from '../lesson-complete-modal';
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
  isCorrect: boolean;
  isAnswerVisible: boolean;
  isModalVisible: boolean;
  isAnswerButtonVisible: boolean;
  showTryAgain: boolean;
}

export default class EditorUI extends React.Component<IProps, IState> {
  public readonly state: IState = {
    code: '',
    codeForDiff: this.props.answerCode,
    isCorrect: false,
    isAnswerVisible: false,
    isModalVisible: false,
    isAnswerButtonVisible: false,
    showTryAgain: false
  };

  public componentDidMount() {
    this.setState({ code: this.props.initialCode });
  }

  public componentWillReceiveProps(nextProps) {
    const nextLocation = nextProps.location;
    const currentLocation = this.props.location;

    // if lesson changes, initialize state
    if (nextLocation.pathname !== currentLocation.pathname) {
      const newState = {
        code: nextProps.initialCode,
        codeForDiff: nextProps.answerCode,
        isAnswerVisible: false,
        isModalVisible: false,
        isAnswerButtonVisible: false,
        isCorrect: false,
        showTryAgain: false
      };
      this.initializeState(newState);
    }
  }

  public render(): React.ReactNode {
    const { t, answerCode } = this.props;
    const {
      code,
      codeForDiff,
      isAnswerVisible,
      isAnswerButtonVisible,
      isModalVisible,
      isCorrect,
      showTryAgain
    } = this.state;

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
          isAnswerButtonVisible={isAnswerButtonVisible}
          toggleShowAnswer={this.toggleShowAnswer}
          isAnswerVisible={isAnswerVisible}
          showTryAgain={showTryAgain}
          t={t}
        >
          <DiffViewer
            codeForDiff={codeForDiff}
            answerCode={isCorrect ? code : answerCode}
            isAnswerVisible={isAnswerVisible}
            showTryAgain={showTryAgain}
            t={t}
          />
        </Editor>
      </div>
    );
  }

  // Controls the visibility of answer code
  public toggleShowAnswer = (code: string): void => {
    this.setState({ isAnswerVisible: !this.state.isAnswerVisible, code });
  };

  // Updates code for hint
  public showHint = (codeForDiff: string, cb): void => {
    this.setState({ isAnswerButtonVisible: true, code: codeForDiff, codeForDiff }, cb);
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
        isCorrect: true,
        showTryAgain: false,
        ...newState
      });
    } else {
      const cb = () => setTimeout(() => this.setState({ showTryAgain: false }), 1000);
      this.setState(
        {
          showTryAgain: true,
          ...newState
        },
        cb
      );
    }
  };

  private initializeState = (newState): void => {
    // scroll to top
    const scrollToTop = () => window.scrollTo(0, 0);
    this.setState(newState, scrollToTop);
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
      .map((line) => {
        let lineStr: string = line;
        if (lineStr.includes('(*') && lineStr.includes('*)')) {
          const former = lineStr.slice(0, lineStr.lastIndexOf('(*'));
          const latter = lineStr.slice(lineStr.lastIndexOf('*)') + 2, lineStr.length);
          lineStr = former + latter;
        }
        return lineStr.replace(/\s\s+/g, ' ').trim();
      })
      .join('\n')
      .replace(/\r?\n|\r/g, ' ')
      .replace(/\s\s+/g, ' ')
      .trim();
  };

  private handleProceed = (): void => {
    this.props.proceed();
  };
}
