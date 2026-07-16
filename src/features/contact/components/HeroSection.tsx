const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-14 text-center text-foreground md:py-16">
        <h1 className="text-4xl font-bold sm:text-5xl">Votre avis compte !</h1>

        <p className="mt-6 max-w-2xl text-sm text-muted">
          Votre retour est essentiel pour nous améliorer ! Partagez votre
          expérience, dites-nous ce que vous aimez et ce que nous pourrions
          améliorer. Vos suggestions nous aident à faire de ce blog une
          ressource toujours plus utile et enrichissante.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
