import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import './index.css';

interface IProps {
  showAnswer: boolean;
  codeForDiff: string;
  answerCode: string;
}

// Renders diff editor
const CodeDiff: React.SFC<IProps> = (props) => {
  const options = {
    readOnly: true,
    renderSideBySide: false
  };

  // This className decide code visibility
  const codeVisibleStyle = props.showAnswer ? 'show-answer' : '';
  return (
    <div className="code-diff-container">
      <div className={codeVisibleStyle}>
        <MonacoDiffEditor
          width="600"
          height="250"
          language="javascript"
          original={props.codeForDiff}
          value={props.answerCode}
          options={options}
        />
      </div>
    </div>
  );
};

export default CodeDiff;
