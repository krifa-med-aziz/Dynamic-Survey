import React, { useEffect, useState } from "react";
import { SurveyContext } from "./SurveyContext";
import { TQuestion, Tstep, TSurvey } from "../lib/types";
import { FieldValues, useForm } from "react-hook-form";
import { getSurvey } from "../lib/api";

export default function SurveyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [survey, setSurvey] = useState<TSurvey | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const surveyQuestions = async () => {
      try {
        const data = await getSurvey("fcc5adad-62d1-4597-9ddd-feb85da37293");
        setSurvey(data);
        setStep("intro");
      } catch (err) {
        console.error("Error fetching survey", err);
        setStep("error");
      } finally {
        setLoading(false);
      }
    };
    surveyQuestions();
  }, []);

  const [step, setStep] = useState<Tstep>("loading");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const questions: TQuestion[] = survey?.satisfactionSurveyQuestions ?? [];
  const numberOfQuestions = survey?.satisfactionSurveyQuestions?.length ?? 0;
  const {
    control,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
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
        survey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
