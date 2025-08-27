import { Control, FieldErrors, FieldValues } from "react-hook-form";

export type TSurvey = {
  id: string;
  title: string;
  active: string;
  startDate: string;
  endDate: string;
  sendAfter: number;
  createdAt: string;
  updatedAt: string;
  satisfactionSurveyQuestions: TQuestion[];
};

export type Tstep = "intro" | "questions" | "end" | "loading" | "error";

export type TQuestion = {
  id: string;
  title: string;
  order: number;
  required: boolean;
  responseType: string;
  createdAt: string;
  updatedAt: string;
  satisfactionSurveyQuestionChoices: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
  }[];
};

export type typeQuestionProps = {
  question: TQuestion;
  control: Control<FieldValues, any, FieldValues>;
  errors: FieldErrors<FieldValues>;
};
