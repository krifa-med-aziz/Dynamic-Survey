import React, { useEffect, useState } from "react";
import { SurveyContext } from "./SurveyContext";
import data from "../util/data.json";
import { TQuestion, Tstep } from "../lib/types";
export default function SurveyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState<Tstep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const questions: TQuestion[] = data.satisfactionSurveyQuestions;
  const numberOfQuestions = data.satisfactionSurveyQuestions.length;
  return (
    <SurveyContext.Provider
      value={{
        numberOfQuestions,
        step,
        setStep,
        questions,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
