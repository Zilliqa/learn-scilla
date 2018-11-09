import React from 'react';
import MonacoEditor from 'react-monaco-editor';

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

export default class CodeEditor extends React.Component<IProps, IState> {
  public editor;
  public render() {
    const { code, showAnswer, t } = this.props;

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
          width="600"
          height="300"
          language="javascript"
          value={code}
          options={options}
          editorDidMount={this.editorDidMount}
        />
        {this.props.children}
        <div>
          <button
            className="btn btn-sm btn-outline-primary btn-block"
            onClick={this.handleCheckAnswer}
          >
            {t('editor.submitAnswer')}
          </button>
          <button
            className="btn btn-sm btn-outline-secondary btn-block"
            onClick={this.hanldleSubmitCode}
          >
            {t('editor.showHint')}
          </button>
          <button
            className="btn btn-sm btn-outline-secondary btn-block"
            onClick={this.hanldleToggle}
          >
            {t(showAnswer ? 'editor.hideAnswer' : 'editor.showAnswer')}
          </button>
        </div>
      </div>
    );
  }

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
