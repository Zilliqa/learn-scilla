import React from 'react';
import ReactMarkdown from 'react-markdown';

interface IProps {
  lesson: string;
}
export class CodeLesson extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    return <ReactMarkdown source={this.props.lesson} />;
  }
}

export default CodeLesson;
