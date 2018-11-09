import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';

interface IProps {
  original: string;
  code: string;
}

// Using with webpack
export default class CodeEditor extends React.Component<IProps, {}> {
  public editor;

  public render() {
    const { original, code } = this.props;
    const options = {
      readOnly: true,
      renderSideBySide: false,
      cursorStyle: 'line'
    };
    return (
      <MonacoDiffEditor
        width="600"
        height="300"
        language="javascript"
        original={original}
        value={code}
        options={options}
      />
    );
  }
}
