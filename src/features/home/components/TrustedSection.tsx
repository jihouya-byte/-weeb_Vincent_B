const TrustedSection = () => {
  return (
    <div className="bg-background text-foreground mx-auto">
      <div className="mx-auto max-w-250 text-center">
        <h1 className="text-4xl">Ils nous font confinace</h1>
        <div className="flex justify-between mt-9">
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
    </div>
  );
};

export default TrustedSection;
