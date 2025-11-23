import "./Header.css";

function Header() {
  const handleHomeClick = (e) => {
    e.preventDefault();

    if (window.location.pathname === "/") {
      // Na početnoj smo → skroluj na vrh
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Na /gallery ili drugoj strani → idi na home
      window.location.href = "/";
    }
  };

  const handleSectionClick = (e, hash) => {
    // hash: npr. "#artist", "#services", "#booking"
    if (window.location.pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        const headerOffset = 72; // visina headera
        const rect = target.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
    // Ako nismo na /, browser normalno ode na /#artist itd.
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <button
            className="logo-btn"
            aria-label="Početna"
            onClick={handleHomeClick}
          >
            <img
              src="/img/logo.png"
              alt="KiboTattooArt logo"
              className="logo-img"
            />
            <span className="logo-text">kibotattooart</span>
          </button>
        </div>

        <nav className="nav" aria-label="Glavna navigacija">
          <a href="/" onClick={handleHomeClick}>
            Početna
          </a>

          <a href="/#artist" onClick={(e) => handleSectionClick(e, "#artist")}>
            Artist
          </a>

          <a href="/gallery">Galerija</a>

          <a
            href="/#services"
            onClick={(e) => handleSectionClick(e, "#services")}
          >
            Usluge
          </a>

          <a
            href="/#booking"
            className="nav-cta"
            onClick={(e) => handleSectionClick(e, "#booking")}
          >
            Rezervacija
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
