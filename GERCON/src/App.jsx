import './App.css'
import Opener from './components/Opener/Opener.jsx'
import Vision from './components/Vision/Vision.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Organigramm from './components/Organigramm/Organigramm.jsx'
import Kontakt from './components/Kontakt/Kontakt.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.jsx'


function App() {
  return (
    <main>
      <Opener />
      <Vision />
      <Portfolio />
      <Organigramm />
      <Kontakt />
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default App
