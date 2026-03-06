import './Numbers.css'
import { useEffect, useState } from 'react'

function Numbers() {
  const [revenue, setRevenue] = useState(0)
  const [employees, setEmployees] = useState(0)
  const [projects, setProjects] = useState(0)

  useEffect(() => {
    const durationMs = 1600
    const startTime = performance.now()
    const targetRevenue = 6000000
    const targetEmployees = 50
    const targetProjects = 30

    let animationFrameId

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1)
      const eased = 1 - (1 - progress) ** 3

      setRevenue(Math.round(targetRevenue * eased))
      setEmployees(Math.round(targetEmployees * eased))
      setProjects(Math.round(targetProjects * eased))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="opener-numbers">
      <div className="opener-numbers__item">
        <span className="opener-numbers__value">{employees}</span>
        <span className="opener-numbers__label">Mitarbeiter</span>
      </div>
      <div className="opener-numbers__item">
        <span className="opener-numbers__value">{revenue.toLocaleString('de-DE')} €</span>
        <span className="opener-numbers__label">Umsatz</span>
      </div>
      <div className="opener-numbers__item">
        <span className="opener-numbers__value">{projects}</span>
        <span className="opener-numbers__label">Kundenprjekte</span>
      </div>
    </section>
  )
}

export default Numbers
