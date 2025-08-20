import { useSurveyContext } from "../lib/hooks";
import ProgressBar from "./ProgressBar";
import RadioQuestion from "./Question/RadioQuestion";
import TextQuestion from "./Question/TextQuestion";
import SelectQuestion from "./Question/SelectQuestion";
import NumberQuestion from "./Question/NumberQuestion";
import RateQuestion from "./Question/RateQuestion";
import SurveyNavigation from "./SurveyNavigation";

export default function Questions() {
  const { numberOfQuestions, questions, currentQuestion } = useSurveyContext();
  return (
    <div className="flex flex-col justify-center items-start gap-5">
      <ProgressBar />
      <small className="text-[var(--color-text-light)]">
        {currentQuestion}/{numberOfQuestions}
      </small>
      {currentQuestion > 0 &&
        questions[currentQuestion - 1].responseType === "RADIO" && (
          <RadioQuestion />
        )}
      {currentQuestion > 0 &&
        questions[currentQuestion - 1].responseType === "TEXT" && (
          <TextQuestion />
        )}
      {currentQuestion > 0 &&
        questions[currentQuestion - 1].responseType === "NUMBER" && (
          <NumberQuestion />
        )}
      {currentQuestion > 0 &&
        questions[currentQuestion - 1].responseType === "SELECT" && (
          <SelectQuestion />
        )}
      {currentQuestion > 0 &&
        questions[currentQuestion - 1].responseType === "RATE" && (
          <RateQuestion />
        )}
      <SurveyNavigation />
    </div>
  );
}
