import { useSurveyContext } from "../lib/hooks";
import ProgressBar from "./ProgressBar";
import RadioQuestion from "./Question/RadioQuestion";
import TextQuestion from "./Question/TextQuestion";
import SelectQuestion from "./Question/SelectQuestion";
import NumberQuestion from "./Question/NumberQuestion";
import RateQuestion from "./Question/RateQuestion";
import SurveyNavigation from "./SurveyNavigation";

const questionComponents = {
  RADIO: RadioQuestion,
  TEXT: TextQuestion,
  NUMBER: NumberQuestion,
  SELECT: SelectQuestion,
  RATE: RateQuestion,
};

export default function Survey() {
  const {
    numberOfQuestions,
    questions,
    currentQuestion,
    control,
    handleSubmit,
    onSubmit,
    errors,
  } = useSurveyContext();

  const QuestionComponent =
    questionComponents[questions[currentQuestion - 1]?.responseType];

  return (
    <div className="flex flex-col justify-center items-start gap-5">
      <ProgressBar />
      <small className="text-[var(--color-text-light)]">
        {currentQuestion}/{numberOfQuestions}
      </small>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {currentQuestion > 0 && QuestionComponent && (
          <QuestionComponent
            key={questions[currentQuestion - 1].id}
            question={questions[currentQuestion - 1]}
            control={control}
            errors={errors}
          />
        )}
        {currentQuestion === 7 && <button type="submit">envoyer</button>}
      </form>

      <SurveyNavigation />
    </div>
  );
}
