import { I18nProvider } from './i18n/I18nProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Advantages from './components/Advantages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <I18nProvider>
      <div style={{ minHeight: '100vh', background: '#0a1628' }}>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Advantages />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App
