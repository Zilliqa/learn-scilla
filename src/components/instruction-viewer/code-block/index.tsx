import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import './style.css';

interface IProps {
  value: string;
}

const CodeBlock: React.SFC<IProps> = (props) => {
  const options: any = {
    readOnly: true,
    lineNumbers: 'off',
    overviewRulerBorder: false,
    hideCursorInOverviewRuler: true,
    occurrencesHighlight: false,
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false
    }
  };

  // This className decide code visibility

  return (
    <div style={{ marginBottom: '1rem' }}>
      <MonacoEditor
        height={props.value.split('\n').length * 18}
        language="scilla"
        value={props.value}
        options={options}
      />
    </div>
  );
};

export default CodeBlock;
