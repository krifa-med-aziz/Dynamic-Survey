import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

export default function SelectQuestion({ question, control, errors }) {
  return (
    <>
      <p className="font-bold mb-5 text-left">
        {question.title}{" "}
        {question.required && <span className="text-red-600">*</span>}
      </p>
      <FormControl
        fullWidth
        error={!!errors?.[question.id]}
        sx={{
          mb: 3,
          "& .MuiInputBase-root": {
            borderRadius: "12px",
            backgroundColor: "white",
          },
          "& .MuiSelect-select": {
            padding: "12px 16px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-secondary)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-secondary)",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-secondary)",
          },
        }}
      >
        <Controller
          name={question.id}
          control={control}
          defaultValue=""
          rules={{ required: question.required }}
          render={({ field }) => (
            <Select
              {...field}
              labelId={`${question.id}-label`}
              label={question.title}
              fullWidth
              notched={false}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    "& .MuiMenuItem-root": {
                      fontSize: "15px",
                      color: "var(--color-secondary)",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "var(--color-secondary)",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "var(--color-secondary)",
                        color: "white",
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>-- Choisir une option --</em>
              </MenuItem>
              {question.satisfactionSurveyQuestionChoices.map((choice) => (
                <MenuItem key={choice.id} value={choice.title}>
                  {choice.title}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        {errors?.[question.id] && (
          <FormHelperText>Ce champ est obligatoire.</FormHelperText>
        )}
      </FormControl>
    </>
  );
}
