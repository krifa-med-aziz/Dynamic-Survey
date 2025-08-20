export type Tstep = "intro" | "questions" | "endMessage";
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
