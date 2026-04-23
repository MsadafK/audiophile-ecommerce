import { Routes, Route } from "react-router-dom";

// 🔁 Shared Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// 📄 Pages
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/Product/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;