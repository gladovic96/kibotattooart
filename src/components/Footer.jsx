import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="logo">
            <span className="logo-mark">KB</span>
            <span className="logo-text">kibotattooart</span>
          </div>
          <p>
            Moderan tattoo website demo. Svi tekstovi, slike i boje mogu se
            prilagoditi konkretnom studiju.
          </p>
        </div>

        <div className="footer-col">
          <h4>Studio</h4>
          <p>Beograd, Srbija</p>
          <p>Ulica i broj (ubaciti)</p>
          <p>+381 60 000 000</p>
          <p>info@kibotattooart.rs</p>
        </div>

        <div className="footer-col">
          <h4>Radno vreme</h4>
          <p>Ponedeljak–Petak: 12–20h</p>
          <p>Subota: 12–18h</p>
          <p>Nedelja: po dogovoru</p>
        </div>

        <div className="footer-col">
          <h4>Društvene mreže</h4>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Facebook</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 kibotattooart. Demo layout za tattoo artist website.</p>
      </div>
    </footer>
  );
}

export default Footer;
