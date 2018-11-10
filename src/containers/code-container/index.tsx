import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import { translate } from 'react-i18next';
import * as H from 'history';
import Spinner from '../../components/spinner';
import CodeREPL from '../../components/code-repl';
import StepProgressbar from '../../components/step-progressbar';
import lessonMockUpList from './mockUpData';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  accessToken: string;
  lessonIndex?: number;
  chapterIndex?: number;
  lessonList?: any;
}
interface IState {
  code: string;
  codeForDiff: string;
  showAnswer: boolean;
}

export class CodeContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { location, history, lessonList, t, lessonIndex, chapterIndex } = this.props;
    const chapterList = lessonList[lessonIndex] || [];
    const totalChapter = chapterList.length;

    const chapter = chapterList[chapterIndex] || {};

    const instruction = chapter.instruction;
    const initialCode = chapter.initialCode;
    const answerCode = chapter.answerCode;
    const isfetching = false;

    return (
      <Layout location={location} history={history}>
        <div className="py-2">
          <StepProgressbar current={chapterIndex} total={totalChapter} />
        </div>
        <br />
        <div>
          {isfetching ? (
            <Spinner />
          ) : (
            <CodeREPL
              initialCode={initialCode}
              answerCode={answerCode}
              instruction={instruction}
              t={t}
            />
          )}
        </div>
      </Layout>
    );
  }
}

const WithTranslation = translate('translations')(CodeContainer);

const mapStateToProps = (state) => ({
  accessToken: state.persist.accessToken,
  lessonList: lessonMockUpList,
  lessonIndex: 0,
  chapterIndex: 0
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
