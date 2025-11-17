import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow" />

      <div className="container hero-inner">
        {/* LEVA STRANA – TEKST */}
        <div className="hero-text">
          <p className="eyebrow small">Kibotattooart studio</p>
          <h1>
            Custom tetovaže koje
            <span className="accent"> i za 10 godina</span> izgledaju dobro.
          </h1>

          <p className="hero-sub">
            Fokus na fine line, blackwork i realism stilove, uz maksimalnu
            higijenu, pripremu kože i dizajn koji je krojen tačno za tvoje telo.
          </p>

          <div className="hero-actions">
            <a href="#booking" className="btn btn-primary">
              Zakaži termin
            </a>
            <a href="#gallery" className="btn btn-ghost">
              Pogledaj galeriju radova
            </a>
          </div>

          <div className="hero-meta">
            <span>8+ godina iskustva</span>
            <span>500+ urađenih tetovaža</span>
            <span>Besplatne konsultacije</span>
          </div>
        </div>

        {/* DESNA STRANA – KARTICA / BOOKING SNAPSHOT */}
        <aside className="hero-card">
          <div className="hero-card-header">
            <span className="hero-status-dot" />
            <span className="hero-status-text">Otvoreno za nove termine</span>
          </div>

          <div className="hero-image" />

          <div className="hero-card-info">
            <p>
              Trenutno primamo rezervacije za nove projekte u{" "}
              <strong>fine line</strong>, <strong>blackwork</strong> i{" "}
              <strong>realism</strong> stilovima.
            </p>

            <ul className="hero-card-meta">
              <li>Personalizovan dizajn za svaku tetovažu</li>
              <li>Detaljna priprema i aftercare instrukcije</li>
              <li>Mogućnost cover up projekata uz konsultaciju</li>
            </ul>

            <a href="#booking" className="hero-card-cta">
              Pošalji upit za termin →
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
