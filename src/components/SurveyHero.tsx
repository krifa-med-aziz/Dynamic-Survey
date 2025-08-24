export default function SurveyHero() {
  return (
    <section className="flex-1/2 relative px-10 py-10 sm:py-5">
      <img
        src="/cars.png"
        alt="cars-background"
        className="absolute object-cover top-0 left-0 z-0 h-full w-full"
      />
      <div className="flex flex-col justify-center items-center gap-5 sm:gap-7  h-full relative z-1 text-white text-center">
        <div className="aspect-video max-w-[300px]">
          <img
            src="/illustration.png"
            alt="illustration"
            className="w-[80%] mx-auto h-auto animate-bounce [animation-duration:3s]"
            style={{ animationName: "bounce-low" }}
          />
        </div>
        <h1 className="font-inria font-bold text-2xl sm:text-3xl md:text-4xl">
          Enquête de Satisfaction
        </h1>
        <p className="font-light text-white/50 text-sm sm:text-md lg:w-[80%]">
          Participez à notre enquête de satisfaction pour nous aider à améliorer
          notre service après-vente. Répondez simplement aux questions et
          partagez votre avis en quelques minutes.{" "}
        </p>
        <p className="font-bold text-sm ">Votre opinion compte !</p>
        <small className="absolute bottom-0 hidden sm:block">
          © 2025 TEAMDEV
        </small>
      </div>
    </section>
  );
}
