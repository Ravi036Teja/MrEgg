import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import food from '../assets/Images/egg-biriyani-removebg.png';

function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-sans flex items-center justify-center px-4 relative overflow-hidden">
      <Helmet>
        <html lang="en" />
        <title>Mr Egg Hospet | Best Egg Rolls, Rice, Curries & Sandwiches</title>
        <meta
          name="description"
          content="Mr Egg is Hospet’s #1 cloud kitchen serving premium egg dishes. Try our rolls, egg rice, creamy curries, sandwiches, and more—delivered hot via Swiggy & Zomato!"
        />
        <meta
          name="keywords"
          content="Mr Egg Hospet, Egg Dishes Hospet, Cloud Kitchen Hospet, Egg Rolls, Egg Sandwiches, Egg Rice, Order Egg Online, Swiggy Zomato Hospet"
        />
        <meta name="author" content="Mr Egg Cloud Kitchen, Hospet" />
      </Helmet>

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-emerald-100 rounded-full filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <section className="relative z-10 w-full max-w-7xl mx-auto" id="home">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="space-y-6 text-center lg:text-left pt-8 lg:pl-12">
            <div className="inline-flex items-center px-4 py-2 bg-rose-50 rounded-full">
              <span className="w-2 h-2 bg-rose-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-rose-600">Cloud Kitchen • Swiggy & Zomato</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500">Mr Egg, Hospet<br /></span>
              Where Every Dish is an Egg Masterpiece!
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Order sizzling Egg Rolls, Egg Rice, Curries, Sandwiches & Snacks made fresh in our hygienic cloud kitchen. Taste the difference in every bite!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="px-8 py-3.5 bg-gradient-to-r from-rose-600 to-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-white font-semibold text-lg">Explore Our Menu</span>
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 border-2 border-gray-300 rounded-lg hover:border-rose-400 transition-colors duration-300"
              >
                <span className="text-gray-700 font-medium text-lg">About Us</span>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">500+</span> happy foodies served in Hospet
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative pt-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={food}
                alt="Egg rolls, rice and more from Mr Egg"
                className="w-full h-[650px] object-contain animate-[spin_15s_linear_infinite_reverse]"
              />
            </div>

            <div className="absolute top-24 -left-6 p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Hygienic Kitchen</div>
                  <div className="text-sm text-gray-500">Safe, clean & chef-managed</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-4 p-4 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Quick Delivery</div>
                  <div className="text-sm text-gray-500">Get food in under 30 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
