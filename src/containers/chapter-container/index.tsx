import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import * as H from 'history';

import LessonProgressbar from '../../components/lesson-progressbar';
const EditorInterface = lazy(() => import('../../components/editor-interface'));

import InstructionViewer from '../../components/instruction-viewer';
import { IMatch, CourseCodeType, CourseInstructionType } from '../../typings';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  accessToken: string;
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
    const { location, history, t } = this.props;

    const currentLessonNumber: number = this.getLessonNumber();
    const chapterIndex: number = this.getChatperNumber();

    const documentTitle = `LearnScilla -
    ${t('lesson.lesson')} ${currentLessonNumber} ${t('chapter.chapter')} ${chapterIndex + 1}
    `;

    return (
      <Layout location={location} history={history}>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div>
          {this.renderLessonProgressbar()}
          <br />
          <div>{this.renderCodeTutorial()}</div>
          <br />
          <div className="text-right">{this.renderNavButtons()}</div>
        </div>
      </Layout>
    );
  }

  public proceed = (): void => {
    const { codes } = this.props;

    const lessonNumber: number = this.getLessonNumber();
    const chapterNumber: number = this.getChatperNumber();

    // Check if code is undefined
    if (codes === undefined) {
      return;
    }
    this.updateProgress(lessonNumber, chapterNumber);
    this.goNextChapter(lessonNumber, chapterNumber);
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

  private goNextChapter = (currentLesson: number, currentChapter: number) => {
    const { history, codes } = this.props;

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

  private renderNavButtons = (): React.ReactNode => {
    const { t, codes } = this.props;

    // Check if code is undefined
    if (codes === undefined) {
      return null;
    }

    const lessonNumber: number = this.getLessonNumber();
    const lessonIndex = lessonNumber - 1;
    const chapterNumber: number = this.getChatperNumber();
    const codeChapterList = codes[lessonIndex] || [];
    const total = codeChapterList.length;

    const isBackButtonDisabled = chapterNumber <= 1;
    const isProceedButtonDisabled = chapterNumber >= total;

    return (
      <div role="group" className="btn-group">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={this.goBack}
          disabled={isBackButtonDisabled}
        >
          <FaChevronLeft />
          {t('chapter.back')}
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={this.proceed}
          disabled={isProceedButtonDisabled}
        >
          {t('chapter.next')}
          <FaChevronRight />
        </button>
      </div>
    );
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

  private goBack = (): void => {
    const { history, match } = this.props;
    const routeParams = match.params;

    const lesson: number = parseInt(routeParams.lesson, 10);
    const chapter: number = parseInt(routeParams.chapter, 10);

    const previousChapterPath = `/lesson/${lesson}/chapter/${chapter - 1}`;
    history.push(previousChapterPath);
  };

  private renderLessonProgressbar = (): React.ReactNode => {
    const { codes } = this.props;

    const lessonNumber = this.getLessonNumber();
    const chapterNumber = this.getChatperNumber();

    const lessonIndex = lessonNumber - 1;
    const chapterIndex = chapterNumber - 1;

    // Check if code is undefined
    if (codes === undefined) {
      return null;
    }

    const codeChapterList = codes[lessonIndex] || [];
    const total = codeChapterList.length;
    return <LessonProgressbar current={chapterIndex} total={total} />;
  };

  private renderCodeTutorial = (): React.ReactNode => {
    const { instructions, codes, t, i18n } = this.props;

    const lang: string = i18n.language;

    if (codes === undefined || instructions === undefined || instructions[lang] === undefined) {
      return <Spinner />;
    }

    const lessonNumber: number = this.getLessonNumber();
    const chapterNumber: number = this.getChatperNumber();

    const lessonIndex = lessonNumber - 1;
    const chapterIndex = chapterNumber - 1;

    const intructionsLocalized = instructions[lang];
    const lesson = intructionsLocalized[lessonIndex] || {};
    const instructionChapterList = lesson.chapters || [];
    const instruction = instructionChapterList[chapterIndex] || {};

    const codeChapterList = codes[lessonIndex] || [];
    const code = codeChapterList[chapterIndex] || {};
    const initialCode = code.initialCode;
    const answerCode = code.answerCode;

    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={5}>
          <InstructionViewer instruction={instruction} t={t} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={7}>
          <Suspense fallback={<Spinner />}>
            <EditorInterface
              initialCode={initialCode}
              answerCode={answerCode}
              t={t}
              proceed={this.proceed}
            />
          </Suspense>
        </Col>
      </Row>
    );
  };
}

const WithTranslation = translate('translations')(ChapterContainer);

const mapStateToProps = (state) => ({
  instructions: state.course.courseInstructions,
  codes: state.course.courseCodes,
  profile: state.firebase.profile
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(WithTranslation);
