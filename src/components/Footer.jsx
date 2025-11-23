import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* LEVA KOLONA */}
        <div className="footer-col footer-col-main">
          <div className="logo">
            <img
              src="/img/logo.png"
              alt="KiboTattooArt logo"
              className="logo-img"
            />
            <span className="logo-text">kibotattooart</span>
          </div>

          <p>
            Profesionalni tattoo studio specijalizovan za Black & Grey, Fine
            Line, Realism i Cover Up radove. Precizan rad, higijena i
            individualni pristup svakom klijentu.
          </p>
        </div>

        {/* STUDIO INFO */}
        <div className="footer-col">
          <h4>Studio</h4>
          <p>Sremska Mitrovica, Srbija</p>
          <p>Centar grada / ulica po izboru</p>
          <p>+381 60 000 000</p>
          <p>kontakt@kibotattooart.rs</p>
        </div>

        {/* RADNO VREME */}
        <div className="footer-col">
          <h4>Radno vreme</h4>
          <p>Ponedeljak – Petak: 12–20h</p>
          <p>Subota: 12–18h</p>
          <p>Nedelja: Po dogovoru</p>
        </div>

        {/* DRUŠTVENE MREŽE */}
        <div className="footer-col">
          <h4>Društvene mreže</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 kibotattooart. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}

export default Footer;
