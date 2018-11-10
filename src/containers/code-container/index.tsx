import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import { translate } from 'react-i18next';
import * as H from 'history';
import Spinner from '../../components/spinner';
import CodeREPL from '../../components/code-repl';
import StepProgressbar from '../../components/step-progressbar';
import lessonIntructions from '../../asset/lesson-instruction';
import lessonCodes from '../../asset/lesson-code';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  accessToken: string;
  instructions?: any;
  codes?: any;
}
interface IState {
  code: string;
  codeForDiff: string;
  showAnswer: boolean;
}

export class CodeContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { location, history, instructions, codes, t } = this.props;

    const currentLesson = 1;
    const currentChapter = 1;

    const lessonIndex = `lesson${currentLesson}`;
    const chapterIndex = currentChapter - 1;
    const isfetching = false;
    return (
      <Layout location={location} history={history}>
        {isfetching ? (
          <Spinner />
        ) : (
          <div>
            {this.renderStepProgressbar(lessonIndex, chapterIndex)}
            <br />
            <div>{this.renderCodeREPL(lessonIndex, chapterIndex)}</div>
          </div>
        )}
      </Layout>
    );
  }
  private renderStepProgressbar = (lessonIndex, chapterIndex): React.ReactNode => {
    const { codes } = this.props;
    if (codes === undefined) {
      return null;
    }
    const codeChapterList = codes[lessonIndex] || [];
    const total = codeChapterList.length;
    return (
      <div className="py-2">
        <StepProgressbar current={chapterIndex} total={total} />
      </div>
    );
  };

  private renderCodeREPL = (lessonIndex, chapterIndex): React.ReactNode => {
    const { instructions, codes, t } = this.props;
    console.log('aa', instructions, codes);
    if (instructions === undefined || codes === undefined) {
      return null;
    }

    const instructionChapterList = instructions[lessonIndex] || [];
    const instruction = instructionChapterList[chapterIndex] || {};

    const codeChapterList = codes[lessonIndex] || [];
    const code = codeChapterList[chapterIndex] || {};

    const initialCode = code.initialCode;
    const answerCode = code.answerCode;

    return (
      <CodeREPL initialCode={initialCode} answerCode={answerCode} instruction={instruction} t={t} />
    );
  };
}

const WithTranslation = translate('translations')(CodeContainer);

const mapStateToProps = (state) => {
  const lang = 'en';
  const localizedLessonIntructions = lessonIntructions[lang];
  return {
    accessToken: state.persist.accessToken,
    // tslint:disable-nextline
    instructions: localizedLessonIntructions,
    codes: lessonCodes
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
