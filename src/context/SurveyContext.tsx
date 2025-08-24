import { createContext } from "react";
import { TQuestion, Tstep } from "../lib/types";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormTrigger,
} from "react-hook-form";

type SurveyContextType = {
  numberOfQuestions: number;
  step: Tstep;
  setStep: React.Dispatch<React.SetStateAction<Tstep>>;
  questions: TQuestion[];
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  control: Control<FieldValues, any, FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  onSubmit: (data: any) => void;
  errors: FieldErrors<FieldValues>;
  handleNext: () => Promise<void>;
};

export const SurveyContext = createContext<SurveyContextType | null>(null);
