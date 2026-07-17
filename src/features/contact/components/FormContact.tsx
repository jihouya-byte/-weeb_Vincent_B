const FormContact = () => {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const values = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(values);
  };

  return (
    <section className="bg-background px-4 py-10 md:py-16">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-138 rounded-2xl border border-border-primary bg-background-form px-6 py-6 text-primary-light shadow-lg md:px-10"
      >
        <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
          <div>
            <label htmlFor="nom" className="mb-1 block text-center text-lg">
              Nom
            </label>

            <input
              id="nom"
              name="nom"
              type="text"
              autoComplete="family-name"
              required
              className="w-full border-0 border-b border-primary-light bg-transparent px-2 py-2 text-center text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="prenom" className="mb-1 block text-center text-lg">
              Prénom
            </label>

            <input
              id="prenom"
              name="prenom"
              type="text"
              autoComplete="given-name"
              required
              className="w-full border-0 border-b border-primary-light bg-transparent px-2 py-2 text-center text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email" className="mb-1 block text-center text-lg">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full border-0 border-b border-primary-light bg-transparent px-2 py-2 text-center text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-1 block text-center text-lg">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={2}
              required
              className="w-full border-0 border-b resize-none border-primary-light bg-transparent px-2 py-2 text-center text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mx-auto mt-8 block rounded-md bg-primary px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-primary-hover"
        >
          Contact
        </button>
      </form>
    </section>
  );
};

export default FormContact;
