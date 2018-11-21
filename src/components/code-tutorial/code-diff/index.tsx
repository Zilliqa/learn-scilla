import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import './index.css';

interface IProps {
  isAnswerVisible: boolean;
  codeForDiff: string;
  answerCode: string;
  t: (key: string) => string;
}

// Renders diff editor
const CodeDiff: React.SFC<IProps> = (props) => {
  const options: any = {
    readOnly: true,
    renderSideBySide: false,
    lineNumbers: 'off'
  };

  // This className decide code visibility
  const codeVisibleStyle = props.isAnswerVisible ? 'show-answer' : '';
  return (
    <div className="code-diff-container">
      <span className="text-secondary">{props.t('editor.hint')}</span>
      <div className="code-diff-border">
        <div className={codeVisibleStyle}>
          <MonacoDiffEditor
            height="160"
            language="scilla"
            original={props.codeForDiff}
            value={props.answerCode}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeDiff;
