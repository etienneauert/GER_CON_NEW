import './Opener.css'
import { useState } from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import Numbers from './Numbers.jsx'
import Explore from './Explore.jsx'
import atosAmplifyReserveLogo from '../../ressources/Logo_Atos_Amplify_Reserve_RVB-removebg-preview.png'
import { useTranslation } from '../../translations.js'

function Opener() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const { t } = useTranslation()

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
          {t('opener.close')}
        </button>
        <nav
          className={`opener__overlay-nav ${isOverlayOpen ? 'opener__overlay-nav--animate' : ''}`}
          aria-label={t('opener.navAriaLabel')}
        >
          <a href="#vision" className="opener__overlay-link" onClick={handleOverlayClose}>
            {t('opener.navVision')}
          </a>
          <a href="#portfolio" className="opener__overlay-link" onClick={handleOverlayClose}>
            {t('opener.navPortfolio')}
          </a>
          <a href="#abteilungsstruktur" className="opener__overlay-link" onClick={handleOverlayClose}>
            {t('opener.navAbteilungsstruktur')}
          </a>
          <a href="#kontakt" className="opener__overlay-link" onClick={handleOverlayClose}>
            {t('opener.navKontakt')}
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Opener
