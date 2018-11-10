import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { ButtonGroup, Button } from 'reactstrap';
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaRegLightbulb,
  FaRegEye,
  FaRegEyeSlash,
  FaRegComments
} from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  code: string;
  submitCode: (code: string, cb?) => void;
  showAnswer: boolean;
  toggleShowAnswer: () => void;
  checkAnswer: (code) => void;
}
interface IState {
  code: string;
}

// Renders code editor
export default class CodeEditor extends React.Component<IProps, IState> {
  public editor;
  public render() {
    const { code } = this.props;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false
    };
    return (
      <div>
        <MonacoEditor
          editorDidMount={this.editorDidMount}
          value={code}
          options={options}
          height="300"
          language="javascript"
        />
        {this.props.children}
        <br />
        {this.renderButtons()}
      </div>
    );
  }

  private renderButtons = (): React.ReactNode => {
    const { showAnswer, t } = this.props;

    const showAnswerButtonText = t(showAnswer ? 'editor.hideAnswer' : 'editor.showAnswer');
    const showAnswerButtonIcon = showAnswer ? <FaRegEyeSlash /> : <FaRegEye />;
    return (
      <div>
        <div className="text-right">
          <Button color="primary" size="sm" onClick={this.handleCheckAnswer}>
            <FaCheck /> {t('editor.submitAnswer')}
          </Button>{' '}
          <ButtonGroup>
            <Button outline={true} color="secondary" size="sm" onClick={this.hanldleSubmitCode}>
              <FaRegLightbulb /> {t('editor.showHint')}
            </Button>
            <Button outline={true} color="secondary" size="sm" onClick={this.hanldleToggle}>
              {showAnswerButtonIcon} {showAnswerButtonText}
            </Button>
          </ButtonGroup>{' '}
          <Button outline={true} color="secondary" size="sm">
            <FaRegComments /> {t('editor.discuss')}
          </Button>
        </div>
      </div>
    );
  };

  // Handles event to submit current code
  private hanldleSubmitCode = (e) => {
    e.preventDefault();
    if (this.editor === undefined) {
      return;
    }
    const value = this.editor.getValue();
    this.props.submitCode(value);
  };

  // Handles event to control the visibility of answer
  private hanldleToggle = (e) => {
    e.preventDefault();
    this.props.toggleShowAnswer();
  };

  // Handles event to check answer
  private handleCheckAnswer = (e) => {
    e.preventDefault();
    if (this.editor === undefined) {
      return;
    }
    const code = this.editor.getValue();
    this.props.checkAnswer(code);
  };

  private editorDidMount = (editor): void => {
    // console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };
}
