import clsx from "clsx";
import { useSurveyContext } from "../lib/hooks";

export default function SurveyNavigation() {
  const { currentQuestion, setCurrentQuestion } = useSurveyContext();
  return (
    <div className="flex justify-center sm:justify-end items-center w-full">
      {currentQuestion > 1 && (
        <button
          className={
            "text-[var(--color-secondary)] bg-[#F1F1F1] py-2 px-5 rounded-bl-xl rounded-tl-xl cursor-pointer text-[12px] sm:text-base"
          }
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
        >
          Prev
        </button>
      )}

      <button
        className={clsx(
          "bg-[var(--color-primary)] text-[var(--color-text-light)] py-2 px-5 rounded-br-xl rounded-tr-xl cursor-pointer text-[12px] sm:text-base",
          {
            "rounded-xl": currentQuestion === 1,
          }
        )}
        onClick={() => setCurrentQuestion((prev) => prev + 1)}
      >
        {currentQuestion === 7 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
