import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';
import CodeBlock from './code-block';
import CodeInline from './code-inline';

interface IProps {
  instruction: string;
}

const InstructionViewer: React.SFC<IProps> = (props) => (
  <div className="code-instruction-container">
    <ReactMarkdown
      className="result"
      source={props.instruction}
      renderers={{ code: CodeBlock, inlineCode: CodeInline }}
    />
  </div>
);

export default InstructionViewer;
