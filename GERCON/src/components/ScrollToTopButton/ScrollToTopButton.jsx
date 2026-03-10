import './ScrollToTopButton.css'

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className="scroll-to-top-button"
      onClick={handleClick}
      aria-label="Zurueck zum Seitenanfang"
    >
      ↑
    </button>
  )
}

export default ScrollToTopButton
