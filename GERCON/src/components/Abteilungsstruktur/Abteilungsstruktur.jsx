import './Abteilungsstruktur.css'
import { useState } from 'react'
import gercon from './data/gercon.json'
import ocm from './data/ocm.json'
import sie from './data/sie.json'
import bt from './data/bt.json'
import OcmPopup from './popups/OcmPopup.jsx'
import SiePopup from './popups/SiePopup.jsx'
import BtPopup from './popups/BtPopup.jsx'
import { useTranslation } from '../../translations.js'

function Abteilungsstruktur() {
  const [activePopup, setActivePopup] = useState(null)
  const { t } = useTranslation()

  return (
    <section id="abteilungsstruktur" className="organigramm">
      <div className="organigramm__content">
        <div className="organigramm__eyebrow-wrap">
          <span className="organigramm__eyebrow">{t('abteilungsstruktur.eyebrow')}</span>
        </div>
        <div className="organigramm__top">
          <div className="organigramm__dept">{gercon.department}</div>
          <p className="organigramm__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="organigramm__row">
            <div className="organigramm__node organigramm__node--expanded">
              <div className="organigramm__dept">{ocm.department}</div>
              <div className="organigramm__divider" />
              <p className="organigramm__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button
                type="button"
                className="organigramm__toggle-btn"
                onClick={() => setActivePopup('ocm')}
              >
                {t('abteilungsstruktur.mehr')}
              </button>
            </div>
            <div className="organigramm__node organigramm__node--expanded">
              <div className="organigramm__dept">{sie.department}</div>
              <div className="organigramm__divider" />
              <p className="organigramm__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                type="button"
                className="organigramm__toggle-btn"
                onClick={() => setActivePopup('sie')}
              >
                {t('abteilungsstruktur.mehr')}
              </button>
            </div>
            <div className="organigramm__node organigramm__node--expanded">
              <div className="organigramm__dept">{bt.department}</div>
              <div className="organigramm__divider" />
              <p className="organigramm__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <button
                type="button"
                className="organigramm__toggle-btn"
                onClick={() => setActivePopup('bt')}
              >
                {t('abteilungsstruktur.mehr')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {activePopup === 'ocm' && <OcmPopup onClose={() => setActivePopup(null)} />}
      {activePopup === 'sie' && <SiePopup onClose={() => setActivePopup(null)} />}
      {activePopup === 'bt' && <BtPopup onClose={() => setActivePopup(null)} />}
    </section>
  )
}

export default Abteilungsstruktur
