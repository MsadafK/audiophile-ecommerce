import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// 🔁 Shared Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// 📄 Pages
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/Product/ProductDetails";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />
      <ScrollToTop />

      {/* 🔥 PAGE TRANSITION WRAPPER */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;