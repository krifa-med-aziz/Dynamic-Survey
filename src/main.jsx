import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SurveyContextProvider from "./context/SurveyContextProvider.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SurveyContextProvider>
      <App />
    </SurveyContextProvider>
  </StrictMode>
);
