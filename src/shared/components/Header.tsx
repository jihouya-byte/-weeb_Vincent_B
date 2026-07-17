import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background">
      <div className="mx-auto max-w-250 rounded-[20px] bg-surface px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl font-bold text-foreground">
              weeb
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="/contact"
                className="text-sm text-muted hover:bg-primary-hover p-2 rounded-2xl"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="login"
              className="text-sm text-muted hover:bg-primary-hover p-2 rounded-2xl"
            >
              Connexion
            </a>

            <a
              href="se connecter"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-muted hover:bg-primary-hover"
            >
              Nous rejoindre
            </a>
          </div>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-md bg-primary text-muted md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-5 flex flex-col gap-4 pt-5 md:hidden">
            <a href="/contact" className="text-sm text-muted">
              Contact
            </a>

            <a href="/login" className="text-sm text-muted">
              Se connecter
            </a>

            <a
              href="/login"
              className="rounded-md bg-primary px-5 py-3 text-center text-sm font-semibold text-foreground"
            >
              Nous rejoindre
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
