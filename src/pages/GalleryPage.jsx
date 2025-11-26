import { useState } from "react";
import "./GalleryPage.css";

function GalleryPage() {
  const [fullscreenImg, setFullscreenImg] = useState(null);

  // Sve slike, bez tagova (pošto ti više ne trebaju)
  const allImages = [
    { id: 1, src: "/img/gallery/gallery-1.jpg" },
    { id: 2, src: "/img/gallery/gallery-2.jpg" },
    { id: 3, src: "/img/gallery/gallery-3.jpg" },
    { id: 4, src: "/img/gallery/gallery-4.jpg" },
    { id: 5, src: "/img/gallery/gallery-5.jpg" },
    { id: 6, src: "/img/gallery/gallery-6.jpg" },
    { id: 7, src: "/img/gallery/gallery-7.jpg" },
    { id: 8, src: "/img/gallery/gallery-8.jpg" },
    { id: 9, src: "/img/gallery/gallery-9.jpg" },
    { id: 10, src: "/img/gallery/gallery-10.jpg" },

    { id: 11, src: "/img/gallery/gallery-11.jpg" },
    { id: 12, src: "/img/gallery/gallery-12.jpg" },
    { id: 13, src: "/img/gallery/gallery-13.jpg" },
    { id: 14, src: "/img/gallery/gallery-14.jpg" },
    { id: 15, src: "/img/gallery/gallery-15.jpg" },

    { id: 16, src: "/img/gallery/gallery-16.jpg" },
    { id: 18, src: "/img/gallery/gallery-18.jpg" },
    { id: 19, src: "/img/gallery/gallery-19.jpg" },
    { id: 20, src: "/img/gallery/gallery-20.jpg" },

    { id: 21, src: "/img/gallery/gallery-21.jpg" },
    { id: 22, src: "/img/gallery/gallery-22.jpg" },
    { id: 23, src: "/img/gallery/gallery-23.jpg" },
    { id: 24, src: "/img/gallery/gallery-24.jpg" },
    { id: 25, src: "/img/gallery/gallery-25.jpg" },

    { id: 26, src: "/img/gallery/gallery-26.jpg" },
    { id: 27, src: "/img/gallery/gallery-27.jpg" },
    { id: 28, src: "/img/gallery/gallery-28.jpg" },
    { id: 29, src: "/img/gallery/gallery-29.jpg" },
    { id: 30, src: "/img/gallery/gallery-30.jpg" },

    { id: 31, src: "/img/gallery/gallery-31.jpg" },
    { id: 32, src: "/img/gallery/gallery-32.jpg" },
    { id: 33, src: "/img/gallery/gallery-33.jpg" },
  ];

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
                Pregled radova iz Kibotattooart studija. Klikni na sliku za
                prikaz u punoj veličini i bolji pogled na detalje.
              </p>
            </div>

            <div className="gallery-page-meta">
              <span>{allImages.length} radova</span>
              <span>
                Različiti stilovi i motivi, ceo portfolio na jednom mestu.
              </span>
            </div>
          </div>

          {/* NEMA FILTERA – SAMO GRID */}

          <div className="gallery-page-grid">
            {allImages.map((img, index) => {
              const sizeClass = getSizeClass(index);

              return (
                <figure
                  key={img.id}
                  className={`gallery-page-item ${sizeClass}`}
                  style={{ "--index": index }}
                  onClick={() => handleOpenFullscreen(img.src)}
                >
                  <div className="gallery-page-thumb">
                    <img src={img.src} alt="" loading="lazy" />
                    {/* NEMA OVERLAY, NEMA TAGOVA, NEMA TEKSTA */}
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
