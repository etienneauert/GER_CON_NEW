import './Explore.css'

function Explore() {
  const handleExploreClick = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (!portfolioSection) return

    const startY = window.scrollY
    const targetY = portfolioSection.getBoundingClientRect().top + window.scrollY
    const distance = targetY - startY
    const durationMs = 1700
    const startTime = performance.now()

    const easeInOutCubic = (value) =>
      value < 0.5 ? 4 * value * value * value : 1 - ((-2 * value + 2) ** 3) / 2

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <section className="opener-explore">
      <button type="button" className="opener-explore__icon-frame" onClick={handleExploreClick}>
        <span className="material-symbols-outlined opener-explore__icon">south</span>
      </button>
    </section>
  )
}

export default Explore
