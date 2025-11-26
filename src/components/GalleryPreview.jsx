import { useState } from "react";
import "./GalleryPreview.css";

function GalleryPreview() {
  const images = Array.from({ length: 10 }).map((_, index) => ({
    src: `/img/img-${index + 1}.jpg`,
    size: `item-${index + 1}`,
  }));

  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header section-header-row gallery-header-row">
            <div>
              <h2>Galerija radova</h2>
              <p>Kratki izbor radova iz Kibotattooart studija.</p>
            </div>

            <div className="section-header-actions gallery-header-actions">
              <p className="section-note gallery-note">Istaknuti radovi.</p>
              <a href="/gallery" className="btn btn-ghost gallery-btn">
                Vidi sve radove
              </a>
            </div>
          </div>

          <div className="gallery-grid">
            {images.map((img, i) => (
              <figure key={i} className={`gallery-item ${img.size}`}>
                <div className="gallery-img-wrap">
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    style={{ cursor: "zoom-in" }}
                    onClick={() => setFullscreenImg(img.src)}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {fullscreenImg && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImg(null)}
        >
          <div className="fullscreen-content">
            <img src={fullscreenImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPreview;
