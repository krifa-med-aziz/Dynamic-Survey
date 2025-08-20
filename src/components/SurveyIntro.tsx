import { useSurveyContext } from "../lib/hooks";

export default function SurveyIntro() {
  const { setStep } = useSurveyContext();
  return (
    <>
      <p className="font-bold">
        Cette enquête ne prendra que quelques minutes à compléter.
      </p>
      <button
        onClick={() => setStep("questions")}
        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition text-white p-3 w-[90%] lg:w-[60%] rounded-4xl cursor-pointer "
      >
        Commencer l'enquête
      </button>
    </>
  );
}
