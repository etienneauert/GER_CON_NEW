import './Portfolio.css'
import DriveBusinessTransformation from './DriveBusinessTransformation.jsx'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__content">
        <div className="portfolio__eyebrow-wrap">
          <span className="portfolio__eyebrow">PORTFOLIO</span>
        </div>
        <DriveBusinessTransformation />
      </div>
    </section>
  )
}

export default Portfolio
