import { useState } from "react";
import "./GalleryPreview.css";

function GalleryPreview() {
  const baseImages = [
    {
      tag: "Black & Grey",
      text: "Veći komad na podlaktici sa finim senkama.",
      size: "item-1",
    },
    {
      tag: "Fine line",
      text: "Minimalistička linijska tetovaža.",
      size: "item-2",
    },
    {
      tag: "Blackwork",
      text: "Jak kontrast sa puno crne.",
      size: "item-3",
    },
    {
      tag: "Realism",
      text: "Detaljan realističan motiv.",
      size: "item-4",
    },
    {
      tag: "Black & Grey",
      text: "Istaknuti veći komad sa gradacijom tonova.",
      size: "item-5",
    },
    {
      tag: "Cover up",
      text: "Prekrivanje stare tetovaže novim dizajnom.",
      size: "item-6",
    },
    {
      tag: "Blackwork",
      text: "Grafički motiv sa jakim linijama.",
      size: "item-7",
    },
    {
      tag: "Fine line",
      text: "Suptilan, elegantan dizajn.",
      size: "item-8",
    },
    {
      tag: "Realism",
      text: "Detaljan rad inspirisan prirodom.",
      size: "item-9",
    },
    {
      tag: "Realism",
      text: "Još jedan rad fokusiran na fine detalje.",
      size: "item-10",
    },
  ];

  const images = baseImages.map((item, index) => ({
    ...item,
    src: `/img/img-${index + 1}.jpg`,
  }));

  const [fullscreenImg, setFullscreenImg] = useState(null);

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header section-header-row gallery-header-row">
            <div>
              <h2>Galerija radova</h2>
              <p>
                Kratki izbor radova iz Kibotattooart studija. Kompletan
                portfolio je na posebnoj galerija stranici.
              </p>
            </div>

            <div className="section-header-actions gallery-header-actions">
              <p className="section-note gallery-note">
                Istaknuti radovi u različitim formatima.
              </p>
              <a href="/gallery" className="btn btn-ghost gallery-btn">
                Vidi sve radove
              </a>
            </div>
          </div>

          <div className="gallery-grid">
            {images.map((img) => (
              <figure key={img.src} className={`gallery-item ${img.size}`}>
                <div className="gallery-img-wrap">
                  <img
                    src={img.src}
                    alt={img.tag}
                    loading="lazy"
                    style={{ cursor: "zoom-in" }}
                    onClick={() => setFullscreenImg(img.src)}
                  />
                </div>
                <figcaption>
                  <span className="tag">{img.tag}</span>
                  <p>{img.text}</p>
                </figcaption>
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
            <img src={fullscreenImg} alt="Fullscreen" />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPreview;
