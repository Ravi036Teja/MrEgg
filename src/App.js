import { React, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About';
import Deals from './pages/Deals';
import FAQ from './pages/FAQ';
import Newsletter from './pages/Newsletter';
import BlogPage from './pages/blog/blogpage';
import Menu from './pages/Menu';

// Context
import { CartProvider } from './Context/CartContext';
import OrderConfirmation from './pages/OrderConfirmation';
import MyOrdersPage from './pages/MyOrders';
import CartPage from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './components/ScrollToTop';
import Catering from './pages/Catering';
import Blog1 from './pages/blog/blog1';
import Blog2 from './pages/blog/blog2';
import Blog3 from './pages/blog/blog3';
import PrivacyPolicy from './components/PrivacyPage';
import TermsAndConditions from './components/Termsconditions';
import RefundPolicy from './components/RefundPolicy';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Page Route */}
          <Route path="/" element={
            <main className="scroll-smooth">
              <Navbar />
              <Hero />
              <About />
              <Deals />
              {/* <Desserts /> */}
              <Catering />
              <FAQ />
              <BlogPage />
              <Newsletter />
              <Footer />
            </main>
          } />

          {/* Other Routes */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Blog Routes */}
          <Route path="/BestEveningSnacks" element={<Blog1 />} />
          <Route path="/why-freshbitezone-is-best" element={<Blog2 />} />
          <Route path="/best-tiffin-center-in-hospet" element={<Blog3 />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
