import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
export default function EndSurvey() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center space-y-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CheckCircle className="w-16 h-16 text-green-500" />
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)]"
      >
        Merci d’avoir répondu à notre enquête 🎉
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-600 max-w-md text-sm sm:text-lg"
      >
        Vos réponses nous aideront à améliorer la qualité de notre service
        après-vente et à vous offrir une meilleure expérience.
      </motion.p>
    </div>
  );
}
