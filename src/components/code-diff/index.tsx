import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import './index.css';

interface IProps {
  submittedCode: string;
  answerCode: string;
  showAnswer: boolean;
}

const CodeDiff: React.SFC<IProps> = (props) => (
  <div className="code-diff-container">
    <div className={props.showAnswer ? 'hide-answer' : ''}>
      <MonacoDiffEditor
        width="600"
        height="250"
        language="javascript"
        original={props.submittedCode}
        value={props.answerCode}
        options={{
          readOnly: true,
          renderSideBySide: false
        }}
      />
    </div>
  </div>
);

export default CodeDiff;
