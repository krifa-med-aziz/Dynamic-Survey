import { useSurveyContext } from "../lib/hooks";
import ProgressBar from "./ProgressBar";
import RadioQuestion from "./Question/RadioQuestion";
import TextQuestion from "./Question/TextQuestion";
import SelectQuestion from "./Question/SelectQuestion";
import NumberQuestion from "./Question/NumberQuestion";
import RateQuestion from "./Question/RateQuestion";
import SurveyNavigation from "./SurveyNavigation";
import { motion } from "framer-motion";

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
    <div className="flex flex-col justify-start items-start gap-5 min-h-[400px]">
      <ProgressBar />
      <small className="text-[var(--color-text-light)]">
        {currentQuestion}/{numberOfQuestions}
      </small>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <motion.div
          key={questions[currentQuestion - 1].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {currentQuestion > 0 && QuestionComponent && (
            <QuestionComponent
              key={questions[currentQuestion - 1].id}
              question={questions[currentQuestion - 1]}
              control={control}
              errors={errors}
            />
          )}
        </motion.div>
        <SurveyNavigation />
      </form>
    </div>
  );
}
