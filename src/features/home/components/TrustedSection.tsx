const TrustedSection = () => {
  return (
    <section className="bg-background text-foreground px-4 py-12">
      <div className="mx-auto max-w-250 text-center">
        <h1 className="text-4xl">Ils nous font confinace</h1>
        <div className="mt-9 flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="mt-8 flex items-center justify-center gap-2">
            <img
              src="../../../../public/home/smartfinder.svg"
              alt="logo smartfinder"
            />
            <span>SmartFinder</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <img src="../../../../public/home/zoomer.svg" alt="logo Zoomer" />
            <span>Zoomer</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <img src="../../../../public/home/shells.svg" alt="logo SHELLS" />
            <span>SHELLS</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <img src="../../../../public/home/waves.svg" alt="logo Waves" />
            <span>Waves</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <img
              src="../../../../public/home/artvenue.svg"
              alt="logo ArtVenue"
            />
            <span>ArtVenue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
