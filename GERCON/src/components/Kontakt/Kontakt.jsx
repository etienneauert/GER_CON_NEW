import './Kontakt.css'
import { useEffect, useRef } from 'react'

function Kontakt() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const boxes = section.querySelectorAll('.kontakt__box')
    boxes.forEach((box) => box.classList.add('kontakt__box--hidden'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('kontakt__box--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    boxes.forEach((box, i) => {
      box.style.transitionDelay = `${i * 120}ms`
      observer.observe(box)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="kontakt" className="kontakt" ref={sectionRef}>
      <div className="kontakt__content">
        <div className="kontakt__eyebrow-wrap">
          <span className="kontakt__eyebrow">KONTAKT</span>
        </div>
        <div className="kontakt__grid">
          <article className="kontakt__box">
            <div className="kontakt__avatar">
              <span className="material-symbols-outlined kontakt__avatar-icon">person</span>
            </div>
            <h3 className="kontakt__name">Harry Müller</h3>
            <p className="kontakt__role">Head of Consulting – Germany</p>
            <span className="kontakt__dept-badge">GER CON</span>
            <div className="kontakt__divider" />
            <a className="kontakt__email" href="mailto:harry.mueller@atos.net">
              <span className="material-symbols-outlined kontakt__email-icon">mail</span>
              harry.mueller@atos.net
            </a>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Kontakt
