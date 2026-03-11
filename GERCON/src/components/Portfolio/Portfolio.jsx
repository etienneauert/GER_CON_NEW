import './Portfolio.css'
import { useEffect, useRef } from 'react'
import DriveBusinessTransformation from './DriveBusinessTransformation.jsx'

function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.portfolio-card')
    cards.forEach((card) => card.classList.add('portfolio-card--hidden'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('portfolio-card--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
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
