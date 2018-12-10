export interface IMatch {
  params: any; // TODO: Remove any type and define it properly
  isExact: boolean;
  path: string;
  url: string;
}

export interface ILessonCode {
  initialCode: string;
  answerCode: string;
}
export type ChapterCodeType = ILessonCode[];
export type CourseCodeType = ChapterCodeType[];

export type ChaperInstructionType = string[];
export interface IChapterInstruction {
  title: string;
  lessons: ChaperInstructionType;
}
export type CourseInstructionType = IChapterInstruction[];
