import './Opener.css'
import { useState } from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Numbers from './Numbers.jsx'
import Explore from './Explore.jsx'
import atosAmplifyReserveLogo from '../../ressources/Logo_Atos_Amplify_Reserve_RVB-removebg-preview.png'

function Opener() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOverlayOpen((previous) => !previous)
  }

  const handleOverlayClose = () => {
    setIsOverlayOpen(false)
  }

  return (
    <section className="opener">
      <Header onMenuClick={handleMenuClick} />
      <div className="opener__content">
        <Main />
        <Numbers />
        <Explore />
      </div>
      <div className={`opener__overlay ${isOverlayOpen ? 'opener__overlay--open' : ''}`}>
        <img
          src={atosAmplifyReserveLogo}
          alt="Atos Amplify Reserve Logo"
          className="opener__overlay-logo"
        />
        <button type="button" className="opener__overlay-close" onClick={handleOverlayClose}>
          <span className="material-symbols-outlined opener__overlay-close-icon">close</span>
          CLOSE
        </button>
        <nav
          className={`opener__overlay-nav ${isOverlayOpen ? 'opener__overlay-nav--animate' : ''}`}
          aria-label="Hauptnavigation"
        >
          <a href="#vision" className="opener__overlay-link" onClick={handleOverlayClose}>
            Vision
          </a>
          <a href="#portfolio" className="opener__overlay-link" onClick={handleOverlayClose}>
            Portfolio
          </a>
          <a href="#organigramm" className="opener__overlay-link" onClick={handleOverlayClose}>
            Organigramm
          </a>
          <a href="#kontakt" className="opener__overlay-link" onClick={handleOverlayClose}>
            Kontakt
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Opener
