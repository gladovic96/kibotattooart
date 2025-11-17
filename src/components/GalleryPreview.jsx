import { useEffect, useState } from "react";
import "./GalleryPreview.css";

function GalleryPreview() {
  const images = [
    {
      src: "/img/img-1.jpg",
      tag: "Black & Grey",
      text: "Veći komad na podlaktici sa finim senkama.",
      size: "item-1",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Fine line",
      text: "Minimalistička linijska tetovaža.",
      size: "item-2",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Blackwork",
      text: "Jak kontrast sa puno crne.",
      size: "item-3",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Realism",
      text: "Detaljan realističan motiv.",
      size: "item-4",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Black & Grey",
      text: "Istaknuti veći komad sa gradacijom tonova.",
      size: "item-5",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Cover up",
      text: "Prekrivanje stare tetovaže novim dizajnom.",
      size: "item-6",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Blackwork",
      text: "Grafički motiv sa jakim linijama.",
      size: "item-7",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Fine line",
      text: "Suptilan, elegantan dizajn.",
      size: "item-8",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Realism",
      text: "Detaljan rad inspirisan prirodom.",
      size: "item-9",
    },
    {
      src: "/img/img-1.jpg",
      tag: "Realism",
      text: "Detaljan rad inspirisan prirodom.",
      size: "item-9",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 600);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const displayImages = isMobile ? images.slice(0, 3) : images;

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header section-header-row">
            <div>
              <h2>Galerija radova</h2>
              <p>
                Demo portfolio raspored — kasnije se svaka slika menja pravim
                fotografijama radova.
              </p>
            </div>

            <div className="section-header-actions">
              <p className="section-note">
                Različite veličine za izdvojene radove.
              </p>
              <a href="/gallery" className="btn btn-ghost">
                Vidi sve radove
              </a>
            </div>
          </div>

          <div className="gallery-grid">
            {displayImages.map((img, i) => (
              <figure key={i} className={`gallery-item ${img.size}`}>
                <div className="gallery-img-wrap">
                  <img
                    src={img.src}
                    alt={img.tag}
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
