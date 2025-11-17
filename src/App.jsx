import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--cod-gray)]">
      <Navbar />
      <Hero />
      <Featured />
      <WhyUs />
      <Footer />
    </div>
  )
}

export default App
