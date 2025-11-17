import "./Booking.css";
function Booking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ovde kasnije možemo dodati pravo slanje na email / backend
  };

  return (
    <section id="booking" className="booking">
      <div className="container booking-inner">
        <div className="booking-text">
          <p className="eyebrow small">Rezervacija termina</p>
          <h2>Pošalji ideju, dogovori skicu i termin.</h2>
          <p>
            Klijent ovde može da opiše ideju, veličinu, mesto na telu i da
            zakaže konsultacije. U praksi se forma povezuje na e-mail ili
            booking sistem.
          </p>

          <ul className="booking-list">
            <li>Odgovor obično u roku od 24h</li>
            <li>Slanje referenci (slike, skice) je poželjno</li>
            <li>Konačna cena se dogovara nakon konsultacija</li>
          </ul>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Ime i prezime</label>
              <input type="text" id="name" placeholder="Tvoje ime" />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="tvoj@email.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="placement">Mesto na telu</label>
              <input
                type="text"
                id="placement"
                placeholder="npr. podlaktica, nadlaktica..."
              />
            </div>
            <div className="form-field">
              <label htmlFor="size">Veličina (približno)</label>
              <input
                type="text"
                id="size"
                placeholder="npr. 10cm, A6 format..."
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="style">Stil tetovaže</label>
            <select id="style">
              <option>Odaberi stil</option>
              <option>Fine line</option>
              <option>Blackwork</option>
              <option>Realism</option>
              <option>Cover up</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Ideja / opis</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Opiši motiv, stil, da li imaš referentne slike..."
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Pošalji upit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
