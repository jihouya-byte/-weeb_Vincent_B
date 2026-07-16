const TrendsSection = () => {
  return (
    <div className="bg-background">
      <div className="mx-auto flex max-w-350 flex-col items-center gap-10 px-4 text-foreground md:flex-row">
        <div>
          <img
            src="../../../../public/home/trends-section.svg"
            alt="hero_section"
          />
        </div>
        <div className="max-w-160">
          <h3 className="text-2xl">
            Le web, un écosystème en constante évolution
          </h3>
          <h1 className="text-5xl">
            Restez informé des dernières{" "}
            <span className="text-primary">tendances</span>
          </h1>
          <p className="mt-14 mb-14 text-muted">
            Chaque semaine, nous analysons les nouveautés du web : frameworks
            émergents, bonnes pratiques SEO, accessibilité, et bien plus encore.
            Ne manquez aucune actualité du digital !
          </p>
          <a href="#">Lire les articles récents</a>
        </div>
      </div>
    </div>
  );
};

export default TrendsSection;
