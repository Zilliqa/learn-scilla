import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';

interface IProps {
  instruction: string;
}

const InstructionViewer: React.SFC<IProps> = (props) => (
  <div className="code-instruction-container">
    <ReactMarkdown source={props.instruction} />
  </div>
);

export default InstructionViewer;
