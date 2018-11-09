import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IProps {
  lesson: string;
}

const CodeLesson: React.SFC<IProps> = (props) => <ReactMarkdown source={props.lesson} />;
export default CodeLesson;
