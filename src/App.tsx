import { Navbar } from '@/components/Navbar'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { FacilityFinder } from '@/pages/FacilityFinder'
import { ProductDetail } from '@/pages/ProductDetail'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facility-finder" element={<FacilityFinder />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
