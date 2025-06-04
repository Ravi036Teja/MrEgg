import React from 'react';
import food from '../assets/Images/food.png';

const Newsletter = () => {
  return (
    <main className="min-h-screen bg-white font-sans flex justify-center items-center px-4 py-12">
      <section className="text-[#1a1a1a] w-full max-w-6xl" id="newsletter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img
              src={food}
              alt="food"
              className="w-full max-w-md md:max-w-full h-auto object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 text-left">
              Delicious Deals, <br className="hidden sm:block" /> Just for You
            </h1>
            <p className="text-left text-[#2f2f2f] text-base md:text-lg mb-6">
              Sign up for our newsletter and receive <br className="hidden md:block" />
              exclusive offers on new items!
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff003c]"
              />
              <input
                type="email"
                placeholder="youremail@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff003c]"
              />
              <button
                type="submit"
                className="w-full bg-[#ff003c] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#e00035] transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
