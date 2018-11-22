import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import Layout from '../../components/layout';
import * as H from 'history';
// import Spinner from '../../components/spinner';
import CodeTutorial from '../../components/code-tutorial';
import StepProgressbar from '../../components/step-progressbar';
import { IMatch, CourseCodeType, CourseInstructionType } from '../../typings';
import { ButtonGroup, Button } from 'reactstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    const { location, history, i18n } = this.props;
    const currentLang: string = i18n.language;

    // This will be used as a key e.g. lesson1
    const lessonIndex: number = this.getLessonIndex();

    // This should starts from 0
    const chapterIndex: number = this.getChatperIndex();

    return (
      <Layout location={location} history={history}>
        <div>
          {this.renderStepProgressbar(lessonIndex, chapterIndex)}
          <br />
          <div>{this.renderCodeTutorial(lessonIndex, chapterIndex, currentLang)}</div>
          <br />
          <div className="text-right">{this.renderNavButtons(lessonIndex, chapterIndex)}</div>
        </div>
      </Layout>
    );
  }

  public proceed = (): void => {
    const { codes, match } = this.props;
    const routeParams = match.params;

    const lesson: number = parseInt(routeParams.lesson, 10);
    const chapter: number = parseInt(routeParams.chapter, 10);

    // Check if code is undefined
    if (codes === undefined) {
      return;
    }
    this.updateProgress(lesson, chapter);
    this.goNextChapter(lesson, chapter);
  };

  private updateProgress = (currentLesson, currentChapter) => {
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

  private goNextChapter = (currentLesson, currentChapter) => {
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

  private renderNavButtons = (lessonIndex: number, chapterIndex: number): React.ReactNode => {
    const { t, codes } = this.props;

    // Check if code is undefined
    if (codes === undefined) {
      return null;
    }
    const codeChapterList = codes[lessonIndex] || [];
    const total = codeChapterList.length;

    const isLessThanOne = chapterIndex <= 0;
    const isGreaterThanTotal = chapterIndex >= total - 1;

    return (
      <ButtonGroup>
        <Button
          outline={true}
          color="secondary"
          size="sm"
          onClick={this.goBack}
          disabled={isLessThanOne}
        >
          <FaChevronLeft />
          {t('chapter.back')}
        </Button>
        <Button
          outline={true}
          color="secondary"
          size="sm"
          onClick={this.proceed}
          disabled={isGreaterThanTotal}
        >
          {t('chapter.next')}
          <FaChevronRight />
        </Button>
      </ButtonGroup>
    );
  };

  private getLessonIndex = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    const currentLesson: number = parseInt(routeParams.lesson, 10);

    const lessonIndex: number = currentLesson - 1;
    return lessonIndex;
  };

  private getChatperIndex = (): number => {
    const { match } = this.props;
    const routeParams = match.params;
    const currentChapter: number = parseInt(routeParams.chapter, 10);

    const chapterIndex: number = currentChapter - 1;
    return chapterIndex;
  };

  private goBack = (): void => {
    const { history, match } = this.props;
    const routeParams = match.params;

    const lesson: number = parseInt(routeParams.lesson, 10);
    const chapter: number = parseInt(routeParams.chapter, 10);

    const previousChapterPath = `/lesson/${lesson}/chapter/${chapter - 1}`;
    history.push(previousChapterPath);
  };

  private renderStepProgressbar = (lessonIndex: number, chapterIndex: number): React.ReactNode => {
    const { codes } = this.props;

    // Check if code is undefined
    if (codes === undefined) {
      return null;
    }
    const codeChapterList = codes[lessonIndex] || [];
    const total = codeChapterList.length;
    return <StepProgressbar current={chapterIndex} total={total} />;
  };

  private renderCodeTutorial = (
    lessonIndex: number,
    chapterIndex: number,
    lang: string
  ): React.ReactNode => {
    const { instructions, codes, t } = this.props;

    if (codes === undefined || instructions === undefined || instructions[lang] === undefined) {
      return <Spinner />;
    }

    const intructionsLocalized = instructions[lang];
    const lesson = intructionsLocalized[lessonIndex] || {};
    const instructionChapterList = lesson.chapters || [];
    const instruction = instructionChapterList[chapterIndex] || {};

    const codeChapterList = codes[lessonIndex] || [];
    const code = codeChapterList[chapterIndex] || {};
    const initialCode = code.initialCode;
    const answerCode = code.answerCode;

    return (
      <CodeTutorial
        initialCode={initialCode}
        answerCode={answerCode}
        instruction={instruction}
        t={t}
        proceed={this.proceed}
      />
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
