import { Controller } from "react-hook-form";

export default function TextQuestion({ question, control, errors }) {
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
          <textarea
            {...field}
            style={{
              resize: "none",
            }}
            placeholder="Votre réponse ici..."
            className="w-full rounded-xl border border-[var(--color-secondary)] mb-8 
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
