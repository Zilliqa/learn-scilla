import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { ButtonGroup, Button } from 'reactstrap';
import { FaCheck, FaRegLightbulb, FaRegEye, FaRegEyeSlash, FaRegComments } from 'react-icons/fa';
import { language, configuration } from '../config';
import './index.css';

interface IProps {
  t: (key: string) => string;
  code: string;
  showHint: (code: string, cb?) => void;
  isAnswerVisible: boolean;
  isHintButtonVisible: boolean;
  toggleShowAnswer: () => void;
  checkAnswer: (code) => void;
}

interface IState {
  code: string;
}

// Renders code editor
export default class CodeEditor extends React.Component<IProps, IState> {
  public editor;
  public readonly state = {
    code: this.props.code
  };

  public render() {
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false
    };
    return (
      <div>
        <div className="code-editor-container">
          <MonacoEditor
            editorDidMount={this.editorDidMount}
            options={options}
            value={this.props.code}
            height="300"
            language="scilla"
            editorWillMount={this.editorWillMount}
          />
        </div>
        {this.props.children}
        <br />
        {this.renderButtons()}
      </div>
    );
  }
  public editorWillMount = (monaco) => {
    this.editor = monaco;
    if (!monaco.languages.getLanguages().some(({ id }) => id === 'scilla')) {
      // Register a new language
      monaco.languages.register({ id: 'scilla' });
      // Register a tokens provider for the language
      monaco.languages.setMonarchTokensProvider('scilla', language);
      // Set the editing configuration for the language
      monaco.languages.setLanguageConfiguration('scilla', configuration);
    }
  };

  private renderButtons = (): React.ReactNode => {
    const { isHintButtonVisible, isAnswerVisible, t } = this.props;

    const showAnswerButtonText = t(isAnswerVisible ? 'editor.hideAnswer' : 'editor.showAnswer');
    const showAnswerButtonIcon = isAnswerVisible ? <FaRegEyeSlash /> : <FaRegEye />;
    return (
      <div>
        <div className="text-right">
          <Button color="primary" size="sm" onClick={this.handleCheckAnswer}>
            <FaCheck /> {t('editor.submitAnswer')}
          </Button>{' '}
          <ButtonGroup>
            {isHintButtonVisible ? (
              <Button outline={true} color="secondary" size="sm" onClick={this.hanldleToggle}>
                {showAnswerButtonIcon} {showAnswerButtonText}
              </Button>
            ) : null}
            <Button outline={true} color="secondary" size="sm" onClick={this.handleShowHint}>
              <FaRegLightbulb /> {t('editor.showHint')}
            </Button>
          </ButtonGroup>{' '}
          <a
            className="btn btn-outline-secondary btn-sm"
            href={'https://gitter.im/Zilliqa/SmartContract'}
            target="_blank"
          >
            <FaRegComments /> {t('chapter.discuss')}
          </a>
        </div>
      </div>
    );
  };

  // Handles event to submit current code
  private handleShowHint = (e) => {
    e.preventDefault();
    if (this.editor === undefined) {
      return;
    }
    const value = this.editor.getValue();
    this.props.showHint(value);
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
