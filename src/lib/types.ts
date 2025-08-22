import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export type Tstep = "intro" | "questions" | "end";
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
