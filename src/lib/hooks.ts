import { useContext } from "react";
import { SurveyContext } from "../context/SurveyContext";

export function useSurveyContext() {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error(
      "useSurveyContext must be used within a SurveyContextProvider"
    );
  }
  return context;
}
