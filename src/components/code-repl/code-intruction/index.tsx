import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IProps {
  instruction: string;
}

const CodeInstruction: React.SFC<IProps> = (props) => <ReactMarkdown source={props.instruction} />;
export default CodeInstruction;
