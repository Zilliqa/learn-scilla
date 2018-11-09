import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import Steps, { Step } from 'rc-steps';
import { translate } from 'react-i18next';
import * as H from 'history';
import Spinner from '../../components/spinner';
import CodeREPL from '../../components/code-repl';
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
    const chapterList = lessonList[lessonIndex - 1] || [];
    const chapter = chapterList[chapterIndex - 1] || {};
    const instruction = chapter.instruction;
    const initialCode = chapter.initialCode;
    const answerCode = chapter.answerCode;
    const isfetching = false;
    return (
      <Layout location={location} history={history}>
        <Steps progressDot={true} size="small" current={1}>
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
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
      </Layout>
    );
  }
}

const WithTranslation = translate('translations')(CodeContainer);

const mapStateToProps = (state) => ({
  accessToken: state.persist.accessToken,
  lessonList: lessonMockUpList,
  lessonIndex: 1,
  chapterIndex: 1
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
