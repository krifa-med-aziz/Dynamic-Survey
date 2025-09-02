import React, { useEffect, useState } from "react";
import { SurveyContext } from "./SurveyContext";
import { TData, TQuestion, Tstep, TSurvey } from "../lib/types";
import { FieldValues, useForm } from "react-hook-form";
import { getSurvey } from "../lib/api";
// import data from "../util/data.json";

export default function SurveyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //state
  const [survey, setSurvey] = useState<TSurvey | null>(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<Tstep>("loading");
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    // setSurvey(data);
    // setStep("intro");
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

  // derived state
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

  // handle functions
  const onSubmit = (data: FieldValues) => {
    const responses = Object.entries(data).map(([questionId, value]) => {
      const isArray = Array.isArray(value);
      return {
        question: questionId,
        response: isArray ? "" : value,
        choices: isArray ? value : "",
      };
    });
    const payload: TData = { responses: responses };
    console.log("POSTData : ", payload);
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
