import React from 'react';

import { Helmet } from 'react-helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';
import * as H from 'history';
import ChapterCompleteCard from '../../components/chapter-complete-card';
import LessonProgressbar from '../../components/lesson-progressbar';
import Editor from '../../components/editor';
import InstructionViewer from '../../components/instruction-viewer';
import LessonNavigator from '../../components/lesson-navigator';
import { IMatch, CourseInstructionType } from '../../typings';
import CheatSheetModal from '../../components/cheat-sheet-modal';
import courseInstructions from '../../locales/instructions';
import courseCodes from '../../course-codes';

interface IProps {
  history: H.History;
  location: H.Location;
  match: IMatch;
  courseInstructions: CourseInstructionType;
}
interface IState {
  code: string;
  codeForDiff: string;
  showAnswer: boolean;
}

class LessonContainer extends React.Component<IProps, IState> {
  public render(): React.ReactNode {
    const { location } = this.props;

    const chapterNumber: number = this.getChapterNumber();
    const chapterIndex: number = chapterNumber - 1;
    const lessonNumber: number = this.getChatperNumber();
    const lessonIndex: number = lessonNumber - 1;
    const instruction = this.getInstruction();

    const codeLessonList = courseCodes[chapterIndex] || [];

    const numOfTotalChapter: number = courseCodes.length;

    const numOfTotalLesson: number = codeLessonList.length || 0;

    // Check if the current lesson is the end of this chapter.
    const isLastLesson: boolean = lessonNumber === numOfTotalLesson;

    const code = codeLessonList[lessonIndex] || { initialCode: undefined, answerCode: undefined };
    const { initialCode, answerCode } = code;

    const currentChapterText = `Chapter ${chapterNumber}`;
    const currentLessonText = `Lesson ${lessonNumber}`;
    const documentTitle: string = `LearnScilla - ${currentChapterText} ${currentLessonText}`;

    const { pathname } = location;
    return (
      <div>
        <Header {...this.props} />
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container px-0">
          <LessonProgressbar
            navigate={this.navigate}
            chapterNumber={chapterNumber}
            lessonNumber={lessonNumber}
            total={numOfTotalLesson}
          />
          <div className="py-2" />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-0">
              <InstructionViewer instruction={instruction} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-0">
              {isLastLesson ? (
                <ChapterCompleteCard
                  navigate={this.navigate}
                  total={numOfTotalChapter}
                  chapter={chapterNumber}
                />
              ) : (
                <Editor
                  initialCode={initialCode}
                  answerCode={answerCode}
                  proceed={this.goNext}
                  pathname={pathname}
                />
              )}
            </div>
          </div>
          <div className="text-center">
            <div className="d-flex py-2 justify-content-between">
              <CheatSheetModal />
              <LessonNavigator
                goBack={this.goBack}
                goNext={this.goNext}
                lessonNumber={lessonNumber}
                total={numOfTotalLesson}
              />
              <div style={{ width: 120 }} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  public goNext = (): void => {
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
    localStorage.setItem(`chapter${currentChapter}`, currentLesson.toString());
  };

  private navigateToNextLesson = (currentChapter: number, currentLesson: number) => {
    this.navigate(currentChapter, currentLesson + 1);
  };

  private navigate = (chapterNum, lessonNum) => {
    const { history } = this.props;
    history.push(`/chapter/${chapterNum}/lesson/${lessonNum}`);
  };

  private getInstruction = () => {
    const chapterNumber = this.getChapterNumber();
    const chapterIndex = chapterNumber - 1;
    const lessonNumber = this.getChatperNumber();
    const lessonIndex = lessonNumber - 1;

    const intructionsLocalized = courseInstructions['en'];
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

export default LessonContainer;
