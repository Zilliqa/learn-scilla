import React from 'react';
import {
  FaCheck,
  FaRegLightbulb,
  FaRegEye,
  FaRegEyeSlash,
  FaRegComments,
  FaTimes
} from 'react-icons/fa';

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
  const checkAnswerButtonStyle = showTryAgain ? 'btn-danger' : 'btn-primary';
  const checkAnswerButtonIcon = showTryAgain ? <FaTimes /> : <FaCheck />;

  return (
    <div>
      <div className="text-right">
        <button
          className={`btn ${checkAnswerButtonStyle} btn-sm`}
          onClick={props.handleCheckAnswer}
          aria-label={'check answer'}
        >
          {checkAnswerButtonIcon} {checkAnswerButtonText}
        </button>{' '}
        {isAnswerButtonVisible ? (
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={props.hanldleToggle}
            aria-label={'show answer'}
          >
            {showAnswerButtonIcon} {showAnswerButtonText}
          </button>
        ) : null}{' '}
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={props.handleShowHint}
          aria-label={'show hint'}
        >
          <FaRegLightbulb /> {t('editor.showHint')}
        </button>{' '}
        <a
          className="btn btn-outline-secondary btn-sm"
          href={'https://gitter.im/Zilliqa/SmartContract'}
          target="_blank"
          rel="noreferrer"
          aria-label={'open chat'}
        >
          <FaRegComments /> {t('lesson.openChat')}
        </a>
      </div>
    </div>
  );
};

export default ControlPanel;
