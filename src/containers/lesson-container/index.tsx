import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import * as H from 'history';
import ChapterCompleteCard from '../../components/chapter-complete-card';
import LessonProgressbar from '../../components/lesson-progressbar';
import EditorUI from '../../components/editor-ui';
import InstructionViewer from '../../components/instruction-viewer';
import LessonNavigator from '../../components/lesson-navigator';
import { IMatch, CourseCodeType, CourseInstructionType } from '../../typings';

import Spinner from '../../components/spinner';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';

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

class LessonContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { codes, location, t } = this.props;

    const chapterNumber: number = this.getChapterNumber();
    const chapterIndex: number = chapterNumber - 1;
    const lessonNumber: number = this.getChatperNumber();
    const lessonIndex: number = lessonNumber - 1;
    const instruction = this.getInstruction();

    const codeLessonList = codes[chapterIndex] || [];

    const numOfTotalChapter: number = codes.length;

    const numOfTotalLesson: number = codeLessonList.length || 0;

    // Check if the current lesson is the end of this chapter.
    const isLastLesson: boolean = lessonNumber === numOfTotalLesson;

    const code = codeLessonList[lessonIndex] || { initialCode: undefined, answerCode: undefined };
    const { initialCode, answerCode } = code;
    const documentTitle: string = `LearnScilla -
    ${t('chapter.chapter')} ${chapterNumber} ${t('lesson.lesson')} ${lessonNumber}
    `;

    return (
      <Layout>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div>
          <LessonProgressbar current={lessonIndex} total={numOfTotalLesson} />
          <br />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-0">
              <InstructionViewer instruction={instruction} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-0">
              {isLastLesson ? (
                <ChapterCompleteCard t={t} total={numOfTotalChapter} chapter={chapterNumber} />
              ) : (
                <Suspense fallback={<Spinner />}>
                  <EditorUI
                    initialCode={initialCode}
                    answerCode={answerCode}
                    t={t}
                    proceed={this.goNext}
                    location={location}
                  />
                </Suspense>
              )}
            </div>
          </div>
          <div className="text-center py-4" style={{ marginLeft: -5 }}>
            <LessonNavigator
              goBack={this.goBack}
              goNext={this.goNext}
              lessonNumber={lessonNumber}
              total={numOfTotalLesson}
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
    const chapterNumber: number = this.getChapterNumber();
    const lessonNumber: number = this.getChatperNumber();

    this.updateProgress(chapterNumber, lessonNumber);
    this.navigateToNextLesson(chapterNumber, lessonNumber);
  };

  private goBack = (): void => {
    const { history } = this.props;
    const chapterNumber: number = this.getChapterNumber();
    const lessonNumber: number = this.getChatperNumber();
    const previousLessonPath = `/chapter/${chapterNumber}/lesson/${lessonNumber - 1}`;
    history.push(previousLessonPath);
  };

  private updateProgress = (currentChapter: number, currentLesson: number) => {
    const { firebase, profile } = this.props;

    // get progress data from db
    const progressProfile = profile.progress || {};
    const chapterKey: string = `chapter${currentChapter}`;
    const progress = { [chapterKey]: currentLesson };

    const isAuth: boolean = !profile.isEmpty;
    const chapterProgressNum: number = progressProfile[chapterKey] || 0;

    // Update if progress is less than current lesson
    if (isAuth && chapterProgressNum < currentLesson) {
      // Update chapter progress
      firebase.updateProfile({ progress });
    }
  };

  private navigateToNextLesson = (currentChapter: number, currentLesson: number) => {
    const { history, codes } = this.props;

    // Check if code is undefined
    if (codes === undefined) {
      return;
    }
    const nextLessonPath = `/chapter/${currentChapter}/lesson/${currentLesson + 1}`;

    // Navigate to next lesson
    history.push(nextLessonPath);
  };

  private getInstruction = () => {
    const { instructions, i18n } = this.props;
    const lang: string = i18n.language;

    const chapterNumber = this.getChapterNumber();
    const chapterIndex = chapterNumber - 1;
    const lessonNumber = this.getChatperNumber();
    const lessonIndex = lessonNumber - 1;

    const intructionsLocalized = instructions[lang];
    const chapter = intructionsLocalized[chapterIndex] || {};

    const instructionLessonList = chapter.lessons || [];
    const instruction = instructionLessonList[lessonIndex] || {};

    return instruction;
  };

  private getChapterNumber = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    return parseInt(routeParams.chapter, 10);
  };

  private getChatperNumber = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    return parseInt(routeParams.lesson, 10);
  };
}

// @ts-ignore
const WithTranslation = withNamespaces()(LessonContainer);
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
