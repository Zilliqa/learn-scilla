import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import { translate } from 'react-i18next';
import * as H from 'history';
// import Spinner from '../../components/spinner';
import CodeREPL from '../../components/code-repl';
import StepProgressbar from '../../components/step-progressbar';
import lessonIntructions from '../../asset/lesson-instruction';
import lessonCodes from '../../asset/lesson-code';
import { IMatch } from '../../typings';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  match: IMatch;
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
    const { location, history, match } = this.props;

    const routeParams = match.params;

    // TODO: if these params are not valid, redirect
    const currentLesson: number = routeParams.lesson;
    const currentChapter: number = routeParams.chapter;
    const currentLang: string = routeParams.lang;

    // This will be used as a key e.g. lesson1
    const lessonKey: string = `lesson${currentLesson}`;

    // This should starts from 0
    const chapterIndex: number = currentChapter - 1;

    return (
      <Layout location={location} history={history}>
        <div>
          {this.renderStepProgressbar(lessonKey, chapterIndex)}
          <br />
          <div>{this.renderCodeREPL(lessonKey, chapterIndex, currentLang)}</div>
        </div>
      </Layout>
    );
  }
  private renderStepProgressbar = (lessonKey: string, chapterIndex: number): React.ReactNode => {
    const { codes } = this.props;

    // Check if code is undefined
    if (codes === undefined) {
      return null;
    }
    const codeChapterList = codes[lessonKey] || [];
    const total = codeChapterList.length;
    return (
      <div className="py-2">
        <StepProgressbar current={chapterIndex} total={total} />
      </div>
    );
  };

  private renderCodeREPL = (
    lessonKey: string,
    chapterIndex: number,
    lang: string
  ): React.ReactNode => {
    const { instructions, codes, t } = this.props;

    if (codes === undefined || instructions === undefined || instructions[lang] === undefined) {
      return null;
    }

    const intructionsLocalized = instructions[lang];
    const instructionChapterList = intructionsLocalized[lessonKey] || [];
    const instruction = instructionChapterList[chapterIndex] || {};

    const codeChapterList = codes[lessonKey] || [];
    const code = codeChapterList[chapterIndex] || {};
    const initialCode = code.initialCode;
    const answerCode = code.answerCode;

    return (
      <CodeREPL initialCode={initialCode} answerCode={answerCode} instruction={instruction} t={t} />
    );
  };
}

const WithTranslation = translate('translations')(CodeContainer);

const mapStateToProps = (state) => ({
  accessToken: state.persist.accessToken,
  // tslint:disable-nextline
  instructions: lessonIntructions,
  codes: lessonCodes
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
