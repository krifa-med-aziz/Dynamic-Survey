export default function LoadingSurvey() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-lg font-semibold">Chargement de l’enquête...</p>
      <div className="mt-4 w-10 h-10 border-4 border-[var(--color-secondary)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
