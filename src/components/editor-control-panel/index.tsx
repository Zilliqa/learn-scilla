import React from 'react';
import { FaCheck, FaRegEye, FaRegEyeSlash, FaRegComments, FaTimes } from 'react-icons/fa';
import Button from '../button';
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
        type={checkAnswerButtonType}
        text={checkAnswerButtonText}
        before={checkAnswerButtonIcon}
        onClick={props.handleCheckAnswer}
        ariaLabel={'Check Answer'}
        size="sm"
      />{' '}
      <Button
        type={'secondary'}
        text={showAnswerButtonText}
        before={showAnswerButtonIcon}
        onClick={props.hanldleToggle}
        ariaLabel={'Show Answer'}
        size="sm"
      />{' '}
      <a
        className={`btn btn-sm type-${warnableButtonType}`}
        href={'https://gitter.im/Zilliqa/SmartContract'}
        target="_blank"
        rel="noreferrer"
        aria-label={'open chat'}
      >
        <FaRegComments /> {t('lesson.openChat')}
      </a>{' '}
    </div>
  );
};

export default ControlPanel;
