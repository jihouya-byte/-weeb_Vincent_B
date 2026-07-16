const ResourcesSection = () => {
  return (
    <div className="bg-background">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-10 px-4 text-foreground md:flex-row">
        <div className="max-w-160">
          <h3 className="text-2xl">Des ressources pour tous les niveaux</h3>
          <h1 className="text-5xl text-primary">
            Apprenez <span className="text-foreground">et</span> progressez
          </h1>
          <p className="mt-14 mb-14 text-muted">
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques pour apprendre efficacement.
          </p>
          <a href="#">Explorer les ressources </a>
        </div>
        <div>
          <img
            src="../../../../public/home/ressource-section.svg"
            alt="hero_section"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
