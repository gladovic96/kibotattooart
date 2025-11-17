import { useEffect } from "react";
import "./Services.css";

function Services() {
  useEffect(() => {
    const items = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  const items = [
    {
      title: "Fine line",
      text: "Minimalističke, tanke linije idealne za diskretne, elegantne tetovaže sa fokusom na čistoću i preciznost.",
      icon: "✒️",
      highlight: "Najbolje za prve tetovaže",
      bullets: ["Sitni motivi", "Tekst, inicijali", "Diskretne pozicije"],
    },
    {
      title: "Blackwork",
      text: "Jaki kontrasti, bold linije i velike površine crne – savršeno za grafičke motive i mračne kompozicije.",
      icon: "🖤",
      highlight: "Intenzivan vizuelni utisak",
      bullets: ["Geometrija", "Apstraktni motivi", "Velike površine"],
    },
    {
      title: "Realism",
      text: "Detaljni portreti, životinje i motivi iz prirode u realističnom stilu sa puno senki i dubine.",
      icon: "🎨",
      highlight: "Fotorealistični detalji",
      bullets: ["Portreti", "Životinje", "Filmske scene"],
    },
    {
      title: "Cover up",
      text: "Prekrivanje starih ili loše urađenih tetovaža novim dizajnom uz pažljivo planiranje oblika i kontrasta.",
      icon: "🔧",
      highlight: "Spas za loše tetovaže",
      bullets: ["Stare tetovaže", "Neželjeni motivi", "Ispravljanje grešaka"],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-bg-glow" />
      <div className="container">
        <div className="services-header-row">
          <div className="section-header">
            <p className="eyebrow small">ŠTA RADIMO</p>
            <h2>Stilovi & usluge</h2>
            <p className="services-sub">
              Moderan tattoo studio fokusiran na preciznost, detalje i
              originalne dizajne.
            </p>
          </div>

          <div className="services-header-meta">
            <p className="services-note">
              Svaki stil radimo prema tvojoj koži, telu i ideji. Nema
              univerzalnog rešenja.
            </p>
            <p className="services-note-soft">
              Konsultacije su besplatne — pošalji ideju i dobićeš profesionalnu
              preporuku.
            </p>
          </div>
        </div>

        <div className="service-grid">
          {items.map((item, i) => (
            <article key={i} className="service-card tilt">
              <div className="service-card-header">
                <div className="service-icon">
                  <span className="icon-inner">{item.icon}</span>
                </div>
                <span className="service-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="service-title-group">
                <h3>{item.title}</h3>
                <span className="service-badge">{item.highlight}</span>
              </div>

              <p className="service-text">{item.text}</p>

              <ul className="service-meta">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              {item.title === "Cover up" && (
                <div className="service-tag">
                  Idealno za sakrivanje starih tetovaža
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="services-footer-row">
          <p className="services-footer-note">
            Ako želiš preporuku stila — dovoljno je da pošalješ sliku ili ideju.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
