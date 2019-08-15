import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import ControlPanel from '../editor-control-panel';
import { language, configuration } from '../../scilla';
import './style.css';
import DiffViewer from '../editor-diff-viewer';

interface IProps {
  t: (key: string) => string;
  code: string;
  codeForDiff: string;
  answerCode: string;
  showHint: (code: string, cb?) => void;
  isAnswerVisible: boolean;
  showTryAgain: boolean;
  toggleShowAnswer: (code: string) => void;
  checkAnswer: (code: string) => void;
}

interface IState {
  code: string;
}

// Renders code editor
class EditorInput extends React.Component<IProps, IState> {
  public editor;
  public readonly state = {
    code: this.props.code
  };

  public render() {
    const { t, codeForDiff, answerCode, isAnswerVisible, showTryAgain } = this.props;

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
        <DiffViewer
          t={t}
          codeForDiff={codeForDiff}
          answerCode={answerCode}
          isAnswerVisible={isAnswerVisible}
          showTryAgain={showTryAgain}
        />
        <div className="text-right">
          <ControlPanel
            t={t}
            hanldleToggle={this.hanldleToggle}
            handleCheckAnswer={this.handleCheckAnswer}
            isAnswerVisible={isAnswerVisible}
            showTryAgain={showTryAgain}
          />
        </div>
      </div>
    );
  }

  private editorWillMount = (monaco) => {
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

  // Handles event to control the visibility of answer
  private hanldleToggle = (e) => {
    e.preventDefault();
    const code = this.editor.getValue();
    this.props.toggleShowAnswer(code);
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
    editor.focus();
  };
}

export default EditorInput;
