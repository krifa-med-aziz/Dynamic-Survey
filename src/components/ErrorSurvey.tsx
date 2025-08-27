import { motion } from "framer-motion";
import { CircleX } from "lucide-react";
export default function ErrorSurvey() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-red-600 space-y-2">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CircleX className="w-14 h-14 text-[var(--color-red)]" />
      </motion.div>
      <motion.p
        className="text-lg font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Impossible de charger l’enquête.
      </motion.p>
      <motion.p
        className="text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Veuillez réessayer plus tard.
      </motion.p>
    </div>
  );
}
