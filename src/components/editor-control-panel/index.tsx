import React from 'react';
import {
  FaCheck,
  FaRegLightbulb,
  FaRegEye,
  FaRegEyeSlash,
  FaRegComments,
  FaTimes
} from 'react-icons/fa';
import Button from '../button';
import CheatSheetModal from '../cheat-sheet-modal';
interface IProps {
  t: (key: string) => string;
  isAnswerButtonVisible: boolean;
  isAnswerVisible: boolean;
  showTryAgain: boolean;

  handleCheckAnswer: (e) => void;
  hanldleToggle: (e) => void;
  handleShowHint: (e) => void;
}

const ControlPanel: React.SFC<IProps> = (props) => {
  const { isAnswerButtonVisible, isAnswerVisible, showTryAgain, t } = props;
  const showAnswerButtonText = t(isAnswerVisible ? 'editor.hideAnswer' : 'editor.showAnswer');
  const showAnswerButtonIcon = isAnswerVisible ? <FaRegEyeSlash /> : <FaRegEye />;

  const checkAnswerButtonText = t(showTryAgain ? 'editor.tryAgain' : 'editor.checkAnswer');
  const checkAnswerButtonType = showTryAgain ? 'danger' : 'primary';
  const checkAnswerButtonIcon = showTryAgain ? <FaTimes /> : <FaCheck />;

  return (
    <div>
      <Button
        type={checkAnswerButtonType}
        text={checkAnswerButtonText}
        icon={{ image: checkAnswerButtonIcon, position: 'before' }}
        onClick={props.handleCheckAnswer}
        ariaLabel={'Check Answer'}
        size="sm"
      />{' '}
      {isAnswerButtonVisible ? (
        <Button
          type={'secondary'}
          text={showAnswerButtonText}
          icon={{ image: showAnswerButtonIcon, position: 'before' }}
          onClick={props.hanldleToggle}
          ariaLabel={'Show Answer'}
          size="sm"
        />
      ) : null}{' '}
      <Button
        type={'secondary'}
        text={t('editor.showHint')}
        onClick={props.handleShowHint}
        ariaLabel={'Show Answer'}
        icon={{ image: <FaRegLightbulb />, position: 'before' }}
        size="sm"
      />{' '}
      <CheatSheetModal t={t} />{' '}
      <a
        className="btn btn-outline-secondary btn-sm"
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
