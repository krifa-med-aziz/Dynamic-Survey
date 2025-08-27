const API_BASE =
  "https://autoteam-bo-dev.teamdev.tn/api/1.0.0/satisfaction-surveys";

export const getSurvey = async (surveyId: string) => {
  const res = await fetch(`${API_BASE}/${surveyId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch survey");
  }
  return res.json();
};
