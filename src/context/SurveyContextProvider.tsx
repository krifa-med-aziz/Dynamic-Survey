import React, { useEffect, useState } from "react";
import { SurveyContext } from "./SurveyContext";
import data from "../util/data.json";
import { TQuestion, Tstep } from "../lib/types";
import { useForm } from "react-hook-form";

export default function SurveyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [step, setStep] = useState<Tstep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const questions: TQuestion[] = data.satisfactionSurveyQuestions;
  const numberOfQuestions = data.satisfactionSurveyQuestions.length;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SurveyContext.Provider
      value={{
        numberOfQuestions,
        step,
        setStep,
        questions,
        currentQuestion,
        setCurrentQuestion,
        control,
        handleSubmit,
        onSubmit,
        errors,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
