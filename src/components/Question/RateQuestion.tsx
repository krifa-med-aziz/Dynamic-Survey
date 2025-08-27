import { typeQuestionProps } from "../../lib/types";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Controller } from "react-hook-form";

export default function RateQuestion({ question, control }: typeQuestionProps) {
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
        defaultValue="3"
        rules={{
          required: question.required,
          validate: (value) => value !== null,
        }}
        render={({ field }) => (
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="size-large"
              size="large"
              defaultValue={2.5}
              precision={0.5}
              value={field.value ?? 0}
              onChange={(_, newValue) => {
                field.onChange(String(newValue ?? 0));
              }}
            />
          </Box>
        )}
      />
    </>
  );
}
