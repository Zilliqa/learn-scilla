export interface IMatch {
  params: any; // TODO: Remove any type and define it properly
  isExact: boolean;
  path: string;
  url: string;
}

export type LessonCodeType = {
  initialCode: string;
  answerCode: string;
};
export type ChapterCodeType = LessonCodeType[];
export type CourseCodeType = ChapterCodeType[];

export type ChaperInstructionType = string[];
export type ChapterInstructionType = {
  title: string;
  lessons: ChaperInstructionType;
};
export type CourseInstructionType = ChapterInstructionType[];
