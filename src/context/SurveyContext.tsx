import { createContext } from "react";
import { TQuestion, Tstep } from "../lib/types";

type SurveyContextType = {
  numberOfQuestions: number;
  step: Tstep;
  setStep: React.Dispatch<React.SetStateAction<Tstep>>;
  questions: TQuestion[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
};

export const SurveyContext = createContext<SurveyContextType | null>(null);
