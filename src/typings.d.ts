export interface IMatch {
  params: any; // TODO: Remove any type and define it properly
  isExact: boolean;
  path: string;
  url: string;
}

export type ChapterCode = {
  initialCode: string;
  answerCode: string;
};
export type LessonCode = ChapterCode[];
export type CourseCode = LessonCode[];

export type ChaperInstruction = string[];
export type LessonInstruction = {
  title: string;
  chapters: ChaperInstruction;
};
export type CourseInstruction = LessonInstruction[];
