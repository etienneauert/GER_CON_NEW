import "./Vision.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTranslation } from "../../translations.js";

function Vision() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;

    if (!sectionElement || !textElement) {
      return undefined;
    }

    gsap.set(textElement, { opacity: 0, y: 70 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        gsap.to(textElement, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="vision" className="vision" ref={sectionRef}>
      <div className="vision__content">
        <div className="vision__eyebrow-wrap">
          <span className="vision__eyebrow">{t("vision.eyebrow")}</span>
        </div>
        <p className="vision__text" ref={textRef}>
          {t("vision.text")}
        </p>
      </div>
    </section>
  );
}

export default Vision;
