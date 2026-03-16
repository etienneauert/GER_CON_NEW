import './Numbers.css'
import { useEffect, useState } from 'react'
import { useTranslation } from '../../translations.js'
import { useLanguage } from '../../context/LanguageContext.jsx'

function Numbers() {
  const { t } = useTranslation()
  const { language } = useLanguage()
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
        <span className="opener-numbers__label">{t('numbers.employees')}</span>
      </div>
      <div className="opener-numbers__item">
        <span className="opener-numbers__value">{revenue.toLocaleString(language === 'de' ? 'de-DE' : 'en-US')} €</span>
        <span className="opener-numbers__label">{t('numbers.revenue')}</span>
      </div>
      <div className="opener-numbers__item">
        <span className="opener-numbers__value">{projects}</span>
        <span className="opener-numbers__label">{t('numbers.projects')}</span>
      </div>
    </section>
  )
}

export default Numbers
