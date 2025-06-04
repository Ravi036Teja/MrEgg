import React from 'react';
import { ShoppingCart, Zap, Clock, ChevronRight, Phone, Mail, Utensils, PartyPopper } from 'lucide-react';
// Import catering images if available

const Catering = () => {

  const cateringServices = [
  {
    title: 'PG/Bachelor Meal Service',
    includes: [
      'Daily lunch/dinner provisions',
      'Simple veg/non-veg options',
      'Basic rice & curry combinations',
      'Bulk quantity availability'
    ],
    note: 'Lunch/dinner as needed | No additional services'
  },
  {
    title: 'Office Group Meals',
    includes: [
      'Lunch buffet packages',
      'Dinner specials',
      'Weekly meal plans',
      'Combination thali options'
    ],
    note: 'Lunch/dinner as needed | No additional services'
  },
  {
    title: 'Custom Bulk Orders',
    includes: [
      'Menu-based pricing',
      'Quantity-based discounts',
      'Special dietary requests',
      'Flexible delivery timing'
    ],
    note: 'Lunch/dinner as needed | No additional services'
  }
];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50"  id="catering">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Catering Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                Professional Catering
              </span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elevate your special occasions with our expert catering solutions. Book 24 hours in advance for perfect planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cateringServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <PartyPopper className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Utensils className="w-5 h-5 text-green-500 mt-1 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-amber-700 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.note} 
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Catering Contact Section */}
          <div className="bg-gradient-to-r from-rose-600 to-amber-500 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Plan Your Perfect Meal
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact our catering specialists for personalized service
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Catering Hotline</p>
                    <a href="tel:+91 9380609674" className="text-xl font-semibold hover:underline">
                      +91 9380609674
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email Inquiries</p>
                    <a href="mailto:catering@freshbitezone.com" className="text-xl font-semibold hover:underline">
                      freshbitezone24@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm opacity-80">
                Available daily 8 AM - 10 PM | Minimum 24h notice required
              </p>
            </div>
          </div>
        </div>

      
      </section>
    </main>
  );
};

export default Catering;