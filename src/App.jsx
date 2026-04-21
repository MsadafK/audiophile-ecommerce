import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App