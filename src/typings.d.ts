export interface IMatch {
  params: any; // TODO: Remove any type and define it properly
  isExact: boolean;
  path: string;
  url: string;
}

export type ChapterCodeType = {
  initialCode: string;
  answerCode: string;
};
export type LessonCodeType = ChapterCodeType[];
export type CourseCodeType = LessonCodeType[];

export type ChaperInstructionType = string[];
export type LessonInstructionType = {
  title: string;
  chapters: ChaperInstructionType;
};
export type CourseInstructionType = LessonInstructionType[];
