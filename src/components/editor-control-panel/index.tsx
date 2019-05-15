import React from 'react';
import { Button } from 'accessible-ui';

import { FaCheck, FaRegEye, FaRegEyeSlash, FaRegComments, FaTimes } from 'react-icons/fa';
interface IProps {
  t: (key: string) => string;
  isAnswerVisible: boolean;
  showTryAgain: boolean;

  handleCheckAnswer: (e) => void;
  hanldleToggle: (e) => void;
}

const ControlPanel: React.SFC<IProps> = (props) => {
  const { isAnswerVisible, showTryAgain, t } = props;
  const showAnswerButtonText = t(isAnswerVisible ? 'editor.hideAnswer' : 'editor.showAnswer');
  const showAnswerButtonIcon = isAnswerVisible ? <FaRegEyeSlash /> : <FaRegEye />;

  const checkAnswerButtonText = t(showTryAgain ? 'editor.tryAgain' : 'editor.checkAnswer');
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
        <FaRegComments /> {t('lesson.openChat')}
      </a>{' '}
    </div>
  );
};

export default ControlPanel;
