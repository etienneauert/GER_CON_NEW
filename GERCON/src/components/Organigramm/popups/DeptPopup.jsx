import './DeptPopup.css'

function DeptPopup({ title, onClose, children }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="dept-popup-overlay" onClick={handleOverlayClick}>
      <div className="dept-popup">
        <button type="button" className="dept-popup__close" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="dept-popup__title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default DeptPopup
