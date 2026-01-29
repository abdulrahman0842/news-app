import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './compoents/CategoryPage'
import SourcePage from './compoents/SourcePage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/source/:sourceId" element={<SourcePage />} />
      </Routes>
    </Router>
  )
}

export default App
