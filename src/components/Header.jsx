import "./Header.css";
function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <span className="logo-mark">KB</span>
          <span className="logo-text">kibotattooart</span>
        </div>

        <nav className="nav">
          {/* Home sekcije (na /) */}
          <a href="/#hero">Početna</a>
          <a href="/#artist">Artist</a>
          {/* Galerija sada vodi na posebnu stranicu */}
          <a href="/gallery">Galerija</a>
          <a href="/#services">Usluge</a>
          <a href="/#booking" className="nav-cta">
            Rezervacija
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
