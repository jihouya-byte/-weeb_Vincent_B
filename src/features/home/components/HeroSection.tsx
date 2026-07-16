const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-250 flex-col items-center text-center">
        <h1 className="max-w-200 text-4xl font-bold text-foreground md:text-6xl">
          Explorez le <span className="text-primary-light">Web</span> sous
          toutes{" "}
          <span className="underline decoration-primary-light underline-offset-8">
            ses facettes
          </span>
        </h1>

        <p className="mt-8 max-w-150 text-muted">
          Le monde du web évolue constamment, et nous sommes là pour vous guider
          à travers ses tendances, technologies et meilleures pratiques. Que
          vous soyez développeur, designer ou passionné du digital, notre blog
          vous offre du contenu de qualité pour rester à la pointe.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-muted hover:bg-primary-hover"
          >
            Découvrir les articles
          </a>
          <a
            href="#"
            className="rounded-md px-6 py-3 text-sm font-semibold text-muted hover:bg-primary-hover border-foreground border-2"
          >
            S'abonner à la newsletter
          </a>
        </div>
        <div className="mt-14">
          <img
            src="../../../../public/home/hero-section.svg"
            alt="hero_section"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
