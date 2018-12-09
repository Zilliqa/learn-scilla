import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';

interface IProps {
  instruction: string;
  inlineCode: React.SFC<any>;
  code: React.SFC<any>;
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
    const { code, inlineCode } = this.props;
    return (
      <div ref={this.myRef} className="instruction-viewer-container">
        <ReactMarkdown source={this.props.instruction} renderers={{ code, inlineCode }} />
      </div>
    );
  }
}
export default InstructionViewer;
