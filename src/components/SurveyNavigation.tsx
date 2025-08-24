import clsx from "clsx";
import { useSurveyContext } from "../lib/hooks";

export default function SurveyNavigation() {
  const { currentQuestion, setCurrentQuestion, numberOfQuestions, handleNext } =
    useSurveyContext();
  return (
    <div className="flex justify-center sm:justify-end items-center w-full mt-10">
      {currentQuestion > 1 && (
        <button
          type="button"
          className={
            "text-[var(--color-secondary)] bg-[#F1F1F1] py-2 px-5 rounded-bl-xl rounded-tl-xl cursor-pointer text-[12px] sm:text-base"
          }
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
        >
          Prev
        </button>
      )}

      {currentQuestion < numberOfQuestions && (
        <button
          type="button"
          className={clsx(
            "bg-[var(--color-primary)] text-[var(--color-text-light)] py-2 px-5 rounded-br-xl rounded-tr-xl cursor-pointer text-[12px] sm:text-base",
            {
              "rounded-xl": currentQuestion === 1,
            }
          )}
          onClick={() => handleNext()}
        >
          Next
        </button>
      )}

      {currentQuestion === numberOfQuestions && (
        <button
          type="submit"
          className={
            "bg-[var(--color-primary)] text-[var(--color-text-light)] py-2 px-5 rounded-br-xl rounded-tr-xl cursor-pointer text-[12px] sm:text-base"
          }
        >
          Submit
        </button>
      )}
    </div>
  );
}
