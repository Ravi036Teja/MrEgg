import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/Images/Mr-Logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userId, setUserId] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null); // Optional

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) setUserId(storedUserId);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleNavigation = (item) => {
  //   setIsOpen(false);
  //   if (item.toLowerCase() === 'menu') return navigate('/menu');
  //   if (item.toLowerCase() === 'home') return navigate('/');
  //   if (location.pathname !== '/') {
  //     navigate(`/#${item.toLowerCase()}`);
  //   } else {
  //     const element = document.getElementById(item.toLowerCase());
  //     if (element) element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const handleNavigation = (item) => {
    setIsOpen(false);
    const path = item.toLowerCase();
    
    if (path === 'menu') return navigate('/menu');
    if (path === 'catering') {
      if (location.pathname !== '/') {
        navigate('/#catering');
      } else {
        const element = document.getElementById('catering');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (location.pathname !== '/') {
      navigate(`/#${path}`);
    } else {
      const element = document.getElementById(path);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUserId(null);
    navigate('/');
    window.location.reload(); // optional to re-trigger app state
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:mx-6">
          <div className="flex items-center">
            <img src={logo} alt="Mr Egg Logo" className='w-16 h-16' />
            <button onClick={() => navigate('/')} className="cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                Mr Egg 
              </h1>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          {/* <p className='bg-green-100 text-green-500 px-3 py-2 rounded-lg'>Production</p> */}
            {['Home', 'About', 'Offers', 'Catering', 'FAQ', 'Menu', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="relative group text-gray-700 hover:text-gray-900 font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-amber-500 transition-all group-hover:w-full"></span>
              </button>
            ))}

            <div className="flex items-center space-x-4 ml-6">
              <a href="tel:9380609674" className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="hidden lg:inline font-medium">Call Us</span>
              </a>

              {/* <button className="relative p-2 text-gray-700 hover:text-rose-600">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {orderStatus ? (orderStatus === 'confirmed' ? '✔' : '❌') : '0'}
                </span>
              </button> */}

              {userId ? (
                <>
                  <button
                    onClick={() => navigate('/orders')}
                    className="px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    My Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-rose-600 text-rose-600 font-medium rounded-full hover:bg-rose-600 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <button className="relative p-2 text-gray-700">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {orderStatus ? (orderStatus === 'confirmed' ? '✔' : '❌') : '0'}
              </span>
            </button> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-rose-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-b-lg transition-all`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {['Home', 'Menu', 'About', 'Catering', 'Offers', 'FAQ', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="block w-full text-left px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r from-rose-600 to-amber-500"
            >
              {item}
            </button>
          ))}

          <div className="pt-2 border-t border-gray-200">
            <div className="flex flex-col space-y-2 px-4 pt-3">
              <a
                href="tel:9380609674"
                className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-rose-400"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>

              {userId ? (
                <>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/orders');
                    }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-md hover:shadow-md"
                  >
                    My Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 rounded-md text-base font-medium text-red-600 hover:text-white hover:bg-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/login');
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-md"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
