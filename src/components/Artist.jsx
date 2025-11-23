import "./Artist.css";

function Artist() {
  return (
    <section id="artist" className="artist">
      <div className="artist-bg-glow" />

      <div className="container">
        <div className="artist-inner">
          {/* LEVA STRANA – FOTO + TAGOVI */}
          <div className="artist-media">
            <div className="artist-image-frame">
              <div className="artist-image" />
              <div className="artist-image-overlay" />

              <div className="artist-chip-name">Bojan „Kibo”</div>
              <div className="artist-chip-role">
                Fine line • Blackwork • Realism
              </div>
            </div>

            <div className="artist-style-chips">
              <span className="artist-chip">Fine line</span>
              <span className="artist-chip">Black & Grey</span>
              <span className="artist-chip">Blackwork</span>
              <span className="artist-chip">Realism</span>
              <span className="artist-chip">Cover up</span>
            </div>
          </div>

          {/* DESNA STRANA – TEKST + STATOVI */}
          <div className="artist-text">
            <p className="eyebrow small">Tattoo artist</p>

            <h2 className="artist-title">
              Bojan „Kibo” — fokus na detalje, atmosferu i priču iza svake
              tetovaže.
            </h2>

            <p>
              Specijalizovan za fine line, blackwork i realistične motive sa
              naglaskom na čiste linije, duboke senke i kompoziciju koja prati
              oblik tela.
            </p>
            <p>
              Pre svake tetovaže prolaziš kroz kratke konsultacije: razgovor o
              ideji, poziciji, veličini i dugoročnom utisku na koži. Cilj je da
              svaki rad izgleda dobro danas — ali i za 10+ godina.
            </p>

            <div className="artist-stats">
              <div className="stat-card">
                <span className="stat-number">8+</span>
                <span className="stat-label">godina iskustva</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">500+</span>
                <span className="stat-label">urađenih tetovaža</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.9</span>
                <span className="stat-label">prosečna ocena klijenata</span>
              </div>
            </div>

            <div className="artist-note">
              <span className="artist-note-dot" />
              <p>
                Radi se isključivo uz zakazivanje — bez žurbe, bez „konvejera“,
                sa fokusom na jednog klijenta u terminu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;
