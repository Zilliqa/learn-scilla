import React from 'react';
import { Button } from '../../fn-components';

import { FaCheck, FaRegEye, FaRegEyeSlash, FaRegComments, FaTimes } from 'react-icons/fa';
interface IProps {
  isAnswerVisible: boolean;
  showTryAgain: boolean;

  handleCheckAnswer: (e) => void;
  hanldleToggle: (e) => void;
}

const ControlPanel: React.SFC<IProps> = (props) => {
  const { isAnswerVisible, showTryAgain } = props;
  const showAnswerButtonText = isAnswerVisible ? 'Hide Answer' : 'Show Answer';
  const showAnswerButtonIcon = isAnswerVisible ? <FaRegEyeSlash /> : <FaRegEye />;

  const checkAnswerButtonText = showTryAgain ? 'Try Again' : 'Check Answer';
  const checkAnswerButtonType = showTryAgain ? 'danger' : 'primary';
  const checkAnswerButtonIcon = showTryAgain ? <FaTimes /> : <FaCheck />;

  const warnableButtonType = showTryAgain ? 'warning' : 'secondary';

  return (
    <div className="py-2">
      <Button
        level="primary"
        className={`type-${checkAnswerButtonType}`}
        text={checkAnswerButtonText}
        before={checkAnswerButtonIcon}
        onClick={props.handleCheckAnswer}
        size="small"
        type="button"
      />{' '}
      <Button
        level={'secondary'}
        text={showAnswerButtonText}
        before={showAnswerButtonIcon}
        onClick={props.hanldleToggle}
        size="small"
        type="button"
      />{' '}
      <a
        className={`btn btn-sm type-${warnableButtonType}`}
        href={'https://gitter.im/Zilliqa/SmartContract'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'open chat'}
      >
        <FaRegComments /> {'Open Chat'}
      </a>{' '}
    </div>
  );
};

export default ControlPanel;
