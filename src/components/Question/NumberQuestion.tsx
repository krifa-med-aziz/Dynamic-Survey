import { Controller } from "react-hook-form";

export default function NumberQuestion({ question, control, errors }) {
  return (
    <>
      <p className="font-bold mb-5 text-left">
        {question.title}{" "}
        {question.required && <span className="text-red-600">*</span>}
      </p>

      <Controller
        name={question.id}
        control={control}
        defaultValue=""
        rules={{ required: question.required }}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            min={0}
            max={10}
            placeholder="Entrez un nombre..."
            className="w-full rounded-xl border border-[var(--color-secondary)] 
                       px-4 py-3 focus:outline-none focus:border-[var(--color-secondary)] 
                       focus:ring-1 focus:ring-[var(--color-secondary)]"
          />
        )}
      />

      {errors?.[question.id] && (
        <p className="text-red-600 mt-1 text-sm">Ce champ est obligatoire.</p>
      )}
    </>
  );
}
