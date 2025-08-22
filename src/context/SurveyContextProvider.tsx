import React, { useEffect, useState } from "react";
import { SurveyContext } from "./SurveyContext";
import data from "../util/data.json";
import { TQuestion, Tstep } from "../lib/types";
import { useForm, useFormContext } from "react-hook-form";

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
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("results : ", data);
    reset();
    setStep("end");
  };

  const handleNext = async () => {
    const isValid = await trigger(questions[currentQuestion - 1].id);
    if (isValid) {
      goToNextQuestion();
    }
  };

  const goToNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
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
        handleNext,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
