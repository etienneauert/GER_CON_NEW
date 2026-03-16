import './Footer.css'
import { useTranslation } from '../../translations.js'

function Footer() {
  const { t } = useTranslation()
  return <footer className="app-footer">{t('footer.copyright')}</footer>
}

export default Footer
