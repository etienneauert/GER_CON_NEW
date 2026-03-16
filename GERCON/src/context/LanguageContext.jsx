import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const stored = localStorage.getItem('gercon-language')
    return stored === 'en' ? 'en' : 'de'
  })

  useEffect(() => {
    localStorage.setItem('gercon-language', language)
  }, [language])

  const setLanguage = (lang) => {
    setLanguageState(lang === 'en' ? 'en' : 'de')
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'de' ? 'en' : 'de'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
