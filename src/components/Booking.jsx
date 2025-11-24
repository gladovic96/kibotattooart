import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Booking.css";

function Booking() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_kn7qj7v", // tvoj SERVICE ID
        "template_4v7mhoq", // tvoj TEMPLATE ID
        e.target, // šaljemo celu formu
        "pjyOoK-KXTEmEuvWB" // tvoj PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          alert("Hvala! Tvoj upit je poslat. Uskoro ćeš dobiti odgovor.");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          alert(
            "Došlo je do greške prilikom slanja. Pokušaj ponovo ili pošalji direktno na email."
          );
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="booking" className="booking">
      <div className="container booking-inner">
        <div className="booking-text">
          <p className="eyebrow small">Rezervacija termina</p>
          <h2>Pošalji ideju, dogovori skicu i termin.</h2>
          <p className="booking-sub">
            Opiši ideju, stil, veličinu i mesto na telu. Ako imaš referentne
            slike, možeš ih poslati naknadno na email ili preko društvenih mreža
            nakon dogovora.
          </p>

          <ul className="booking-list">
            <li>Odgovor najčešće u roku od 24h</li>
            <li>Slanje referenci (slike, skice) je poželjno</li>
            <li>Konačna cena se dogovara nakon konsultacija</li>
          </ul>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Ime i prezime</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tvoje ime"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tvoj@email.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="placement">Mesto na telu</label>
              <input
                type="text"
                id="placement"
                name="placement"
                placeholder="npr. podlaktica, nadlaktica..."
              />
            </div>

            <div className="form-field">
              <label htmlFor="size">Veličina (približno)</label>
              <input
                type="text"
                id="size"
                name="size"
                placeholder="npr. 10cm, A6 format..."
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="style">Stil tetovaže</label>
            <select id="style" name="style">
              <option value="">Odaberi stil</option>
              <option>Black & Grey</option>
              <option>Fine line</option>
              <option>Blackwork</option>
              <option>Realism</option>
              <option>Cover up</option>
              <option>Traditional (Old school)</option>
              <option>Neo traditional</option>
              <option>Japanese (Irezumi)</option>
              <option>Tribal</option>
              <option>Dotwork</option>
              <option>Geometric</option>
              <option>Minimalist</option>
              <option>Script / Lettering</option>
              <option>Watercolor</option>
              <option>Surrealism</option>
              <option>Chicano</option>
              <option>New school</option>
              <option>Illustrative</option>
              <option>Ornamental / Mandala</option>
              <option>Biomechanical</option>
              <option>Ignorant style</option>
              <option>Sketch style</option>
              <option>Mixed / Custom stil</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Ideja / opis</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Opiši motiv, stil, da li imaš referentne slike, da li je prva tetovaža..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-full"
            disabled={isSending}
          >
            {isSending ? "Slanje..." : "Pošalji upit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
