import './Kontakt.css'

function Kontakt() {
  return (
    <section id="kontakt" className="kontakt">
      <div className="kontakt__content">
        <div className="kontakt__eyebrow-wrap">
          <span className="kontakt__eyebrow">KONTAKT</span>
        </div>
        <div className="kontakt__grid">
          <article className="kontakt__box">
            <h3 className="kontakt__title">Ansprechpartner</h3>
            <p className="kontakt__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article className="kontakt__box">
            <h3 className="kontakt__title">Kontaktwege</h3>
            <p className="kontakt__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Kontakt
