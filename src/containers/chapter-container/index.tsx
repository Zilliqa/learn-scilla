import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import * as H from 'history';

import LessonProgressbar from '../../components/lesson-progressbar';
const EditorUI = lazy(() => import('../../components/editor-ui'));

import InstructionViewer from '../../components/instruction-viewer';
import ChapterNavigator from '../../components/chapter-navigator';
import { IMatch, CourseCodeType, CourseInstructionType } from '../../typings';

import Spinner from '../../components/spinner';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  match: IMatch;
  instructions: CourseInstructionType;
  codes: CourseCodeType;
  firebase: any;
  profile: any;
}
interface IState {
  code: string;
  codeForDiff: string;
  showAnswer: boolean;
}

class ChapterContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { codes, location, history, t } = this.props;

    const lessonNumber = this.getLessonNumber();
    const lessonIndex = lessonNumber - 1;
    const chapterNumber = this.getChatperNumber();
    const chapterIndex = chapterNumber - 1;

    const instruction = this.getInstruction();

    const codeChapterList = codes[lessonIndex] || [];
    const total: number = codeChapterList.length || 0;

    const code = codeChapterList[chapterIndex] || {};
    const { initialCode, answerCode } = code;

    const documentTitle = `LearnScilla -
    ${t('lesson.lesson')} ${lessonNumber} ${t('chapter.chapter')} ${chapterNumber}
    `;

    return (
      <Layout>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div>
          <LessonProgressbar current={chapterIndex} total={total} />
          <br />
          <Row>
            <Col xs={12} sm={12} md={12} lg={5}>
              <InstructionViewer instruction={instruction} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={7}>
              <Suspense fallback={<Spinner />}>
                <EditorUI
                  initialCode={initialCode}
                  answerCode={answerCode}
                  t={t}
                  proceed={this.goNext}
                  location={location}
                />
              </Suspense>
            </Col>
          </Row>
          <br />
          <div className="text-right">
            <ChapterNavigator
              goBack={this.goBack}
              goNext={this.goNext}
              chapterNumber={chapterNumber}
              total={total}
              t={t}
            />
          </div>
        </div>
      </Layout>
    );
  }

  public goNext = (): void => {
    const { codes } = this.props;
    // Check if code is undefined
    if (codes === undefined) {
      return;
    }
    const lessonNumber: number = this.getLessonNumber();
    const chapterNumber: number = this.getChatperNumber();

    this.updateProgress(lessonNumber, chapterNumber);
    this.navigateToNextChapter(lessonNumber, chapterNumber);
  };

  private goBack = (): void => {
    const { history } = this.props;
    const lessonNumber: number = this.getLessonNumber();
    const chapterNumber: number = this.getChatperNumber();
    const previousChapterPath = `/lesson/${lessonNumber}/chapter/${chapterNumber - 1}`;
    history.push(previousChapterPath);
  };

  private updateProgress = (currentLesson: number, currentChapter: number) => {
    const { firebase, profile } = this.props;

    // get progress data from db
    const progressProfile = profile.progress || {};
    const lessonKey: string = `lesson${currentLesson}`;
    const progress = { [lessonKey]: currentChapter };

    const isAuth: boolean = !profile.isEmpty;
    const lessonProgressNum: number = progressProfile[lessonKey] || 0;

    // Update if progress is less than current chapter
    if (isAuth && lessonProgressNum < currentChapter) {
      // Update lesson progress
      firebase.updateProfile({ progress });
    }
  };

  private navigateToNextChapter = (currentLesson: number, currentChapter: number) => {
    const { history, codes } = this.props;
    // Check if code is undefined
    if (codes === undefined) {
      return;
    }
    const lessonIndex = currentLesson - 1;
    const codeChapterList = codes[lessonIndex] || [];

    // Calculate total
    const total = codeChapterList.length;

    // Check if the current chapter is the end of this lesson.
    const isLastChapter = currentChapter === total;
    // If the last chapter, go to lesson complete page
    const nextChapterPath = isLastChapter
      ? `/lesson-complete/${currentLesson}`
      : `/lesson/${currentLesson}/chapter/${currentChapter + 1}`;

    // Navigate to next chapter
    history.push(nextChapterPath);
  };

  private getInstruction = () => {
    const { instructions, i18n } = this.props;
    const lang: string = i18n.language;

    const lessonNumber = this.getLessonNumber();
    const lessonIndex = lessonNumber - 1;
    const chapterNumber = this.getChatperNumber();
    const chapterIndex = chapterNumber - 1;

    const intructionsLocalized = instructions[lang];
    const lesson = intructionsLocalized[lessonIndex] || {};

    const instructionChapterList = lesson.chapters || [];
    const instruction = instructionChapterList[chapterIndex] || {};

    return instruction;
  };

  private getLessonNumber = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    return parseInt(routeParams.lesson, 10);
  };

  private getChatperNumber = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    return parseInt(routeParams.chapter, 10);
  };
}

// @ts-ignore
const WithTranslation = withNamespaces()(ChapterContainer);
// @ts-check
const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions,
  codes: state.course.courseCodes,
  profile: state.firebase.profile
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(WithTranslation);
