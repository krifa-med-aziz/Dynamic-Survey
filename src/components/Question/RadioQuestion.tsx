import { Controller } from "react-hook-form";
import { typeQuestionProps } from "../../lib/types";

export default function RadioQuestion({
  question,
  control,
  errors,
}: typeQuestionProps) {
  return (
    <div className="mb-5">
      <p className="font-bold mb-5 text-left">
        {question.title}{" "}
        {question.required && <span className="text-red-600">*</span>}
      </p>

      <Controller
        name={question.id}
        control={control}
        rules={{ required: question.required }}
        render={({ field }) => (
          <div className="flex flex-col gap-4 justify-center items-start">
            {question.satisfactionSurveyQuestionChoices.map((choice) => (
              <label
                key={choice.id}
                className="flex items-center gap-3 cursor-pointer text-[var(--color-secondary)]"
              >
                <input
                  type="radio"
                  value={choice.title}
                  checked={field.value === choice.title}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="hidden peer"
                />

                <span
                  className="
                    relative h-5 w-5 rounded-full border-2 border-gray-400
                    flex items-center justify-center
                    peer-checked:border-[var(--color-secondary)]
                    after:content-[''] after:absolute after:h-2.5 after:w-2.5
                    after:rounded-full after:bg-[var(--color-secondary)]
                    after:opacity-0 peer-checked:after:opacity-100
                    after:transition
                  "
                ></span>

                {choice.title}
              </label>
            ))}
          </div>
        )}
      />

      {errors?.[question.id] && (
        <p className="text-red-600 text-sm mt-2">Ce champ est obligatoire.</p>
      )}
    </div>
  );
}
