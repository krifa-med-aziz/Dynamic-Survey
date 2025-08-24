import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { typeQuestionProps } from "../../lib/types";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const MenuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "white",
      "& .MuiMenuItem-root": {
        fontSize: "15px",
        color: "var(--color-secondary)",
        padding: "12px 16px",
        "&:hover": {
          backgroundColor: "var(--color-secondary-light)",
          color: "white",
        },
        "&.Mui-selected": {
          backgroundColor: "var(--color-secondary-light)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--color-secondary-light)",
            color: "white",
          },
        },
        "&.Mui-selected.Mui-focusVisible": {
          backgroundColor: "var(--color-secondary-light)",
          color: "white",
        },
      },
    },
  },
};

export default function MultiSelectQuestion({
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
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "var(--color-secondary) !important",
            },
          "& .Mui-focused .MuiSelect-icon": {
            color: "var(--color-secondary)",
          },
        }}
      >
        <Controller
          name={question.id}
          control={control}
          defaultValue={[]}
          rules={{ required: question.required }}
          render={({ field }) => (
            <Select
              {...field}
              labelId={`${question.id}-label`}
              label={question.title}
              multiple
              notched={false}
              displayEmpty
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => {
                if ((selected as string[]).length === 0) {
                  return (
                    <span className="text-gray-400">
                      -- Choisir une ou plusieurs options --
                    </span>
                  );
                }
                return (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          backgroundColor: "var(--color-secondary)",
                          color: "white",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                );
              }}
              MenuProps={MenuProps}
            >
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
