import React from 'react';
import { FaCheck, FaRegLightbulb, FaRegEye, FaRegEyeSlash, FaRegComments } from 'react-icons/fa';

interface IProps {
  t: (key: string) => string;
  isHintButtonVisible: boolean;
  isAnswerVisible: boolean;

  handleCheckAnswer: (e) => void;
  hanldleToggle: (e) => void;
  handleShowHint: (e) => void;
}

const ControlPanel: React.SFC<IProps> = (props) => {
  const { isHintButtonVisible, isAnswerVisible, t } = props;
  const showAnswerButtonText = t(isAnswerVisible ? 'editor.hideAnswer' : 'editor.showAnswer');
  const showAnswerButtonIcon = isAnswerVisible ? <FaRegEyeSlash /> : <FaRegEye />;
  return (
    <div>
      <div className="text-right">
        <button className="btn btn-primary btn-sm" onClick={props.handleCheckAnswer}>
          <FaCheck /> {t('editor.checkAnswer')}
        </button>{' '}
        {isHintButtonVisible ? (
          <button className="btn btn-outline-secondary btn-sm" onClick={props.hanldleToggle}>
            {showAnswerButtonIcon} {showAnswerButtonText}
          </button>
        ) : null}{' '}
        <button className="btn btn-outline-secondary btn-sm" onClick={props.handleShowHint}>
          <FaRegLightbulb /> {t('editor.showHint')}
        </button>{' '}
        <a
          className="btn btn-outline-secondary btn-sm"
          href={'https://gitter.im/Zilliqa/SmartContract'}
          target="_blank"
        >
          <FaRegComments /> {t('chapter.openChat')}
        </a>
      </div>
    </div>
  );
};

export default ControlPanel;
