import React from 'react';
import ReactMarkdown from 'react-markdown';
import MonacoEditor from 'react-monaco-editor';
import { language, configuration } from '../../scilla';
import './style.css';

interface IProps {
  instruction: string;
}

class InstructionViewer extends React.Component<IProps> {
  public editor;
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
        <ReactMarkdown source={this.props.instruction} renderers={{ code: this.renderCode }} />
      </div>
    );
  }

  private editorWillMount = (monaco) => {
    this.editor = monaco;
    if (!monaco.languages.getLanguages().some(({ id }) => id === 'scilla')) {
      // Register a new language
      monaco.languages.register({ id: 'scilla' });
      // Register a tokens provider for the language
      monaco.languages.setMonarchTokensProvider('scilla', language);
      // Set the editing configuration for the language
      monaco.languages.setLanguageConfiguration('scilla', configuration);
    }
  };

  private renderCode = (props) => {
    const options: any = {
      readOnly: true,
      lineNumbers: 'off',
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      occurrencesHighlight: false,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false
      }
    };

    // This className decide code visibility

    return (
      <div className="instruction-code-block">
        <MonacoEditor
          height={props.value.split('\n').length * 18}
          language="scilla"
          value={props.value}
          options={options}
          editorWillMount={this.editorWillMount}
        />
      </div>
    );
  };
}
export default InstructionViewer;
