export const translations = {
  de: {
    header: {
      claim: 'Driving Business transformation and digital innovation for more than 15 years',
      menu: 'MENU',
    },
    opener: {
      close: 'SCHLIESSEN',
      navAriaLabel: 'Hauptnavigation',
      navVision: 'Vision',
      navPortfolio: 'Portfolio',
      navAbteilungsstruktur: 'Abteilungsstruktur',
      navKontakt: 'Kontakt',
    },
    vision: {
      eyebrow: 'VISION',
      text: 'Wir gestalten die Zukunft von Unternehmen durch datengetriebene Beratung, künstliche Intelligenz und digitale Innovation. Als Consulting-Abteilung entwickeln wir End-to-End-Lösungen, die Prozesse vereinfachen, Entscheidungen beschleunigen und nachhaltigen Mehrwert schaffen. Gemeinsam mit unseren Kundinnen und Kunden machen wir aus Ideen skalierbare digitale Lösungen mit messbarer Wirkung.',
    },
    numbers: {
      employees: 'Mitarbeiter',
      revenue: 'Umsatz',
      projects: 'Kundenprojekte',
    },
    portfolio: {
      eyebrow: 'PORTFOLIO',
      driveTransformation: 'Business Transformation antreiben',
      unlockAi: 'Den Wert von KI erschließen',
      maximizePlatforms: 'Potenzial von Plattformen & Hyperscalern maximieren',
      mehr: 'Mehr',
    },
    abteilungsstruktur: {
      eyebrow: 'ABTEILUNGSSTRUKTUR',
      mehr: 'Mehr',
      gerconDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ocmDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
      sieDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
      btDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.',
    },
    kontakt: {
      eyebrow: 'KONTAKT',
      role: 'Head of Consulting – Germany',
      deptBadge: 'GER CON',
    },
    footer: {
      copyright: 'Copyright © 2026 ATOS AMPLIFY GERMANY',
    },
  },
  en: {
    header: {
      claim: 'Driving Business transformation and digital innovation for more than 15 years',
      menu: 'MENU',
    },
    opener: {
      close: 'CLOSE',
      navAriaLabel: 'Main navigation',
      navVision: 'Vision',
      navPortfolio: 'Portfolio',
      navAbteilungsstruktur: 'Department Structure',
      navKontakt: 'Contact',
    },
    vision: {
      eyebrow: 'VISION',
      text: 'We shape the future of enterprises through data-driven consulting, artificial intelligence and digital innovation. As a consulting division, we develop end-to-end solutions that simplify processes, accelerate decisions and create sustainable value. Together with our clients, we turn ideas into scalable digital solutions with measurable impact.',
    },
    numbers: {
      employees: 'Employees',
      revenue: 'Revenue',
      projects: 'Client Projects',
    },
    portfolio: {
      eyebrow: 'PORTFOLIO',
      driveTransformation: 'Drive business transformation',
      unlockAi: 'Unlock the value of AI',
      maximizePlatforms: 'Maximize the potential of platforms & hyperscalers',
      mehr: 'More',
    },
    abteilungsstruktur: {
      eyebrow: 'DEPARTMENT STRUCTURE',
      mehr: 'More',
      gerconDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ocmDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.',
      sieDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.',
      btDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.',
    },
    kontakt: {
      eyebrow: 'CONTACT',
      role: 'Head of Consulting – Germany',
      deptBadge: 'GER CON',
    },
    footer: {
      copyright: 'Copyright © 2026 ATOS AMPLIFY GERMANY',
    },
  },
}

import { useLanguage } from './context/LanguageContext.jsx'

export function useTranslation() {
  const { language } = useLanguage()
  const t = (key) => {
    const keys = key.split('.')
    let obj = translations[language]
    for (const k of keys) {
      obj = obj?.[k]
    }
    return obj ?? key
  }
  return { t }
}

export function getTranslation(lang, key) {
  const keys = key.split('.')
  let obj = translations[lang] ?? translations.de
  for (const k of keys) {
    obj = obj?.[k]
  }
  return obj ?? key
}
