import { Controller } from "react-hook-form";
import { typeQuestionProps } from "../../lib/types";
import clsx from "clsx";
import FormErrorMessage from "../FormErrorMessage";
import { div } from "framer-motion/client";

export default function TextQuestion({
  question,
  control,
  errors,
}: typeQuestionProps) {
  return (
    <>
      <p className="font-bold mb-5 text-left">
        {question.title}{" "}
        {question.required && (
          <span className="text-[var(--color-red)]">*</span>
        )}
      </p>

      <Controller
        name={question.id}
        control={control}
        defaultValue=""
        rules={{ required: question.required }}
        render={({ field }) => (
          <div className="flex flex-col mb-8">
            <textarea
              {...field}
              style={{
                resize: "none",
              }}
              placeholder="Votre réponse ici..."
              className={clsx(
                "w-full rounded-xl border border-[var(--color-secondary)] px-4 py-3 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] ",
                {
                  "border-red-600": errors?.[question.id],
                }
              )}
            />
            {errors?.[question.id] && (
              <FormErrorMessage className="text-left ml-3">
                {"Ce champ est obligatoire."}
              </FormErrorMessage>
            )}
          </div>
        )}
      />
    </>
  );
}
