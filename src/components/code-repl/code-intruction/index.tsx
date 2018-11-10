import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, ButtonGroup } from 'reactstrap';
import './index.css';

interface IProps {
  t: (key: string) => string;
  instruction: string;
}

const CodeInstruction: React.SFC<IProps> = (props) => (
  <div>
    <div className="code-instruction-container">
      <ReactMarkdown source={props.instruction} />
    </div>
    <div className="text-center">
      <ButtonGroup>
        <Button outline={true} color="secondary" size="sm">
          {props.t('editor.back')}
        </Button>
        <Button outline={true} color="secondary" size="sm">
          {props.t('editor.next')}
        </Button>
      </ButtonGroup>{' '}
      <Button outline={true} color="secondary" size="sm">
        {props.t('editor.discuss')}
      </Button>
    </div>
  </div>
);
export default CodeInstruction;
