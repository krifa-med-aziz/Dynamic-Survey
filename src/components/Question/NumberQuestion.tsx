import { Controller } from "react-hook-form";
import { typeQuestionProps } from "../../lib/types";
import FormErrorMessage from "../FormErrorMessage";
import clsx from "clsx";

export default function NumberQuestion({
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
        rules={{
          required: question.required,
          min: {
            value: 0,
            message: "Le nombre doit être supérieur ou égal à 0",
          },
          max: {
            value: 10,
            message: "Le nombre doit être inférieur ou égal à 10",
          },
        }}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            placeholder="Entrez un nombre entre 0 et 10"
            className={clsx(
              "w-full rounded-xl border border-[var(--color-secondary)] px-4 py-3 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)]",
              {
                "border-red-600": errors?.[question.id],
              }
            )}
          />
        )}
      />

      {errors?.[question.id] && (
        <FormErrorMessage className="text-left ml-3">
          {(errors?.[question.id]?.message as string) ||
            "Ce champ est obligatoire."}
        </FormErrorMessage>
      )}
    </>
  );
}
