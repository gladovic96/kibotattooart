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

  // 👇 OVDE SAMO MENJAŠ tag KAKO TI ODGOVARA
  // Vodim računa da postoji tačno 34 slike (gallery-1 do gallery-34)
  const allImages = [
    { id: 1, src: "/img/gallery/gallery-1.jpg", tag: "Black & Grey" },
    { id: 2, src: "/img/gallery/gallery-2.jpg", tag: "Black & Grey" },
    { id: 3, src: "/img/gallery/gallery-3.jpg", tag: "Fine line" },
    { id: 4, src: "/img/gallery/gallery-4.jpg", tag: "Fine line" },
    { id: 5, src: "/img/gallery/gallery-5.jpg", tag: "Blackwork" },
    { id: 6, src: "/img/gallery/gallery-6.jpg", tag: "Blackwork" },
    { id: 7, src: "/img/gallery/gallery-7.jpg", tag: "Realism" },
    { id: 8, src: "/img/gallery/gallery-8.jpg", tag: "Realism" },
    { id: 9, src: "/img/gallery/gallery-9.jpg", tag: "Cover up" },
    { id: 10, src: "/img/gallery/gallery-10.jpg", tag: "Cover up" },

    { id: 11, src: "/img/gallery/gallery-11.jpg", tag: "Black & Grey" },
    { id: 12, src: "/img/gallery/gallery-12.jpg", tag: "Fine line" },
    { id: 13, src: "/img/gallery/gallery-13.jpg", tag: "Blackwork" },
    { id: 14, src: "/img/gallery/gallery-14.jpg", tag: "Realism" },
    { id: 15, src: "/img/gallery/gallery-15.jpg", tag: "Cover up" },

    { id: 16, src: "/img/gallery/gallery-16.jpg", tag: "Black & Grey" },
    { id: 18, src: "/img/gallery/gallery-18.jpg", tag: "Blackwork" },
    { id: 19, src: "/img/gallery/gallery-19.jpg", tag: "Realism" },
    { id: 20, src: "/img/gallery/gallery-20.jpg", tag: "Cover up" },

    { id: 21, src: "/img/gallery/gallery-21.jpg", tag: "Black & Grey" },
    { id: 22, src: "/img/gallery/gallery-22.jpg", tag: "Fine line" },
    { id: 23, src: "/img/gallery/gallery-23.jpg", tag: "Blackwork" },
    { id: 24, src: "/img/gallery/gallery-24.jpg", tag: "Realism" },
    { id: 25, src: "/img/gallery/gallery-25.jpg", tag: "Cover up" },

    { id: 26, src: "/img/gallery/gallery-26.jpg", tag: "Black & Grey" },
    { id: 27, src: "/img/gallery/gallery-27.jpg", tag: "Fine line" },
    { id: 28, src: "/img/gallery/gallery-28.jpg", tag: "Blackwork" },
    { id: 29, src: "/img/gallery/gallery-29.jpg", tag: "Realism" },
    { id: 30, src: "/img/gallery/gallery-30.jpg", tag: "Cover up" },

    { id: 31, src: "/img/gallery/gallery-31.jpg", tag: "Black & Grey" },
    { id: 32, src: "/img/gallery/gallery-32.jpg", tag: "Fine line" },
    { id: 33, src: "/img/gallery/gallery-33.jpg", tag: "Blackwork" },
  ];

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

          {/* GRID */}
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
