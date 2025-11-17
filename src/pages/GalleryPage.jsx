import { useState } from "react";
import "./GalleryPage.css";

function GalleryPage() {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Sve");

  const categories = [
    "Sve",
    "Black & Grey",
    "Fine line",
    "Blackwork",
    "Realism",
    "Cover up",
  ];

  const TOTAL_IMAGES = 60;

  function pickCategory(i) {
    const mods = [
      "Black & Grey",
      "Fine line",
      "Blackwork",
      "Realism",
      "Cover up",
    ];
    return mods[i % mods.length];
  }

  const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    id: i + 1,
    src: `/img/gallery/gallery-${i + 1}.jpg`,
    tag: pickCategory(i),
  }));

  const filteredImages =
    activeCategory === "Sve"
      ? allImages
      : allImages.filter((img) => img.tag === activeCategory);

  const handleOpenFullscreen = (src) => {
    setFullscreenImg(src);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImg(null);
  };

  const getSizeClass = (index) => {
    const mod = index % 10;

    if (mod === 0 || mod === 6) return "is-big"; // 2x2
    if (mod === 3 || mod === 8) return "is-tall"; // 1x2
    if (mod === 5) return "is-wide"; // 2x1
    return "";
  };

  return (
    <>
      <main className="gallery-full">
        <div className="gallery-bg-glow" />

        <div className="container">
          {/* HEADER */}
          <div className="section-header section-header-row gallery-page-header">
            <div>
              <p className="eyebrow small">Full portfolio</p>
              <h2>Galerija radova</h2>
              <p className="gallery-page-sub">
                Pregled radova iz Kibotattooart studija, organizovan po
                stilovima. Klikni na sliku za prikaz u punoj veličini i bolji
                pogled na detalje.
              </p>
            </div>

            <div className="gallery-page-meta">
              <span>{filteredImages.length} radova</span>
              <span>Black & Grey • Fine line • Realism • Cover up</span>
            </div>
          </div>

          {/* FILTERI */}
          <div className="gallery-filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID – MASONRY, ALI BEZ RUPA */}
          <div className="gallery-page-grid">
            {filteredImages.map((img, index) => {
              const sizeClass = getSizeClass(index);

              return (
                <figure
                  key={img.id}
                  className={`gallery-page-item ${sizeClass}`}
                  style={{ "--index": index }}
                  onClick={() => handleOpenFullscreen(img.src)}
                >
                  <div className="gallery-page-thumb">
                    <img src={img.src} alt={img.tag} loading="lazy" />
                    <div className="gallery-page-overlay">
                      <span className="gallery-page-tag">{img.tag}</span>
                      <span className="gallery-page-zoom">
                        Klik za uvećanje
                      </span>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </main>

      {/* FULLSCREEN MODAL */}
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <div className="fullscreen-content">
            <img src={fullscreenImg} alt="Fullscreen" />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPage;
