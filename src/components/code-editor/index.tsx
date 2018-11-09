import React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface IProps {
  code: string;
}
interface IState {
  code: string;
}

// Using with webpack
export default class CodeEditor extends React.Component<IProps, IState> {
  public editor;
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code
    };
  }

  public render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false
    };
    return (
      <div>
        <div>
          <button onClick={this.changeEditorValue}>Change value</button>
          <button onClick={this.changeBySetState}>Change by setState</button>
        </div>
        <hr />
        <MonacoEditor
          width="600"
          height="400"
          language="javascript"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }

  private onChange = (newValue, e) => {
    console.log('onChange', newValue, e); // eslint-disable-line no-console
  };

  private editorDidMount = (editor) => {
    // eslint-disable-next-line no-console
    console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  private changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue('// code changed! \n');
    }
  };

  private changeBySetState = () => {
    this.setState({ code: '// code changed by setState! \n' });
  };
}
