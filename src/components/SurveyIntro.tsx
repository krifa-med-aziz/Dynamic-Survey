import { motion } from "framer-motion";
import { useSurveyContext } from "../lib/hooks";

export default function SurveyIntro() {
  const { setStep } = useSurveyContext();

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.p
        className="font-bold text-center sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cette enquête ne prendra que quelques minutes à compléter.
      </motion.p>

      <motion.button
        onClick={() => setStep("questions")}
        className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition text-white p-3 w-[90%] lg:w-[60%] mx-auto rounded-4xl cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Commencer l&apos;enquête
      </motion.button>
    </div>
  );
}
