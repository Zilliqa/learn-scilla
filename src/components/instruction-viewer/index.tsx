import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.css';
import CodeBlock from './code-block';
import CodeInline from './code-inline';

interface IProps {
  instruction: string;
}

class InstructionViewer extends React.Component<IProps> {
  private myRef = React.createRef<HTMLDivElement>();

  public componentWillReceiveProps(nextProps) {
    const node = this.myRef.current;
    if (node) {
      node.scrollTop = 0;
    }
  }

  public render() {
    return (
      <div ref={this.myRef} className="instruction-viewer-container">
        <ReactMarkdown
          source={this.props.instruction}
          renderers={{ code: CodeBlock, inlineCode: CodeInline }}
        />
      </div>
    );
  }
}
export default InstructionViewer;
