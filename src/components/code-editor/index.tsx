import React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface IProps {
  t: (key: string) => string;
  code: string;
  submitCode: (code: string) => void;
}
interface IState {
  code: string;
}

export default class CodeEditor extends React.Component<IProps, IState> {
  public editor;
  public render() {
    const { code, t } = this.props;
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
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        {this.props.children}
        <div>
          <button className="btn btn-sm btn-outline-primary btn-block">
            {t('editor.submitAnswer')}
          </button>
          <button
            className="btn btn-sm btn-outline-secondary btn-block"
            onClick={this.hanldleSubmitCode}
          >
            {t('editor.showHint')}
          </button>
        </div>
      </div>
    );
  }

  private editorDidMount = (editor) => {
    console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  private onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
  };

  private hanldleSubmitCode = () => {
    if (this.editor === undefined) {
      return;
    }
    this.props.submitCode(this.editor.getValue());
  };
}
