import DeptPopup from './DeptPopup.jsx'

function SiePopup({ onClose }) {
  return (
    <DeptPopup title="SIE — System Integration & Engineering" onClose={onClose}>
      <p className="dept-popup__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="dept-popup__section-title">Unterabteilungen</h3>
      <ul className="dept-popup__list">
        <li>SIE 1 — Lorem ipsum dolor sit amet</li>
        <li>SIE 2 — Consectetur adipiscing elit</li>
        <li>SIE 3 — Sed do eiusmod tempor incididunt</li>
      </ul>
      <h3 className="dept-popup__section-title">Team</h3>
      <p className="dept-popup__text">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </p>
    </DeptPopup>
  )
}

export default SiePopup
