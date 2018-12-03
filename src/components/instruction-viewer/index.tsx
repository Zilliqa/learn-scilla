import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

const Code = (props) => (
  <pre style={{ color: '#e83e8c', padding: 6, background: '#eff0f1', borderRadius: 3 }}>
    <code>{props.value}</code>
  </pre>
);

const InlineCode = (props) => (
  <code style={{ background: '#eff0f1', padding: 3, borderRadius: 3 }}>{props.value}</code>
);

interface IProps {
  instruction: string;
}

const InstructionViewer: React.SFC<IProps> = (props) => (
  <div className="code-instruction-container">
    <ReactMarkdown
      className="result"
      source={props.instruction}
      renderers={{ code: Code, inlineCode: InlineCode }}
    />
  </div>
);

export default InstructionViewer;
