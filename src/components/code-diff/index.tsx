import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';

interface IProps {
  original: string;
  code: string;
}

const CodeDiff: React.SFC<IProps> = (props) => (
  <MonacoDiffEditor
    width="600"
    height="250"
    language="javascript"
    original={props.original}
    value={props.code}
    options={{
      readOnly: true,
      renderSideBySide: false,
      cursorStyle: 'line'
    }}
  />
);

export default CodeDiff;
