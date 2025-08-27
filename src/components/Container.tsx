import { useSurveyContext } from "../lib/hooks";
import EndSurvey from "./EndSurvey";
import ErrorSurvey from "./ErrorSurvey";
import Footer from "./Footer";
import LoadingSurvey from "./LoadingSurvey";
import Survey from "./Survey";
import SurveyHero from "./SurveyHero";
import SurveyIntro from "./SurveyIntro";

export default function Container() {
  const { step } = useSurveyContext();
  return (
    <div className="w-full sm:w-[90%] sm:min-h-[600px] min-h-screen bg-white flex flex-col sm:flex-row justify-center">
      {step === "loading" && <LoadingSurvey />}
      {step !== "loading" && (
        <>
          <SurveyHero />
          <section className="flex-1/2 bg-white text-center flex flex-col gap-8 justify-center px-8 py-20 lg:px-20 min-h-[400px]">
            {step === "error" && <ErrorSurvey />}
            {step === "intro" && <SurveyIntro />}
            {step === "questions" && <Survey />}
            {step === "end" && <EndSurvey />}
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}
