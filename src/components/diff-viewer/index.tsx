import React from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import './style.css';

interface IProps {
  isAnswerVisible: boolean;
  showTryAgain: boolean;
  codeForDiff: string;
  answerCode: string;
  t: (key: string) => string;
}

const DiffViewer: React.SFC<IProps> = (props) => {
  const options: any = {
    readOnly: true,
    renderSideBySide: false,
    lineNumbers: 'off'
  };

  // This className decide code visibility
  const codeVisibleStyle = props.isAnswerVisible ? 'show-answer' : '';
  const diffBorderStyle = props.showTryAgain ? 'code-diff-border-active' : 'code-diff-border';
  const titleStyle = props.showTryAgain ? 'text-danger' : 'text-secondary';

  return (
    <div className="code-diff-container">
      <span className={titleStyle}>{props.t('editor.hint')}</span>
      <div className={diffBorderStyle}>
        <div className={codeVisibleStyle}>
          <MonacoDiffEditor
            height="150"
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

export default DiffViewer;
