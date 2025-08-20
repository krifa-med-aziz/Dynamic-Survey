import { useSurveyContext } from "../lib/hooks";

export default function ProgressBar() {
  const { numberOfQuestions, currentQuestion } = useSurveyContext();
  const percentage = (currentQuestion * 100) / numberOfQuestions;
  return (
    <div className="w-full h-1 bg-[#D9D9D9] rounded-4xl">
      <div
        className="h-1 bg-[#14AE5C] rounded-4xl"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
