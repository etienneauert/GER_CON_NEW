import DeptPopup from './DeptPopup.jsx'

function OcmPopup({ onClose }) {
  return (
    <DeptPopup title="OCM — Organizational Change Management" onClose={onClose}>
      <p className="dept-popup__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <h3 className="dept-popup__section-title">Leistungen</h3>
      <ul className="dept-popup__list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
      </ul>
      <h3 className="dept-popup__section-title">Team</h3>
      <p className="dept-popup__text">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </DeptPopup>
  )
}

export default OcmPopup
