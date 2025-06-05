// import React from 'react';
// import { ShoppingCart, Zap, Clock, ChevronRight, IndianRupee, } from 'lucide-react';
// import samosa from '../assets/Images/samosa.png';
// import biriyani from '../assets/Images/Biriyani.jpg';
// import sandwich from '../assets/Images/sandwich2.png'

// const Deals = () => {
//   const deals = [
//     {
//       title: 'Spicy Samosa Deal',
//       bg: 'bg-gradient-to-br from-rose-600 to-amber-500',
//       items: ['Medium Aloo samosa 10rs', 'Medium Paneer samosa 25rs'],
//       price: '10',
//       save: 'Save 5',
//       images: [samosa, samosa]
//     },
//     {
//       title: 'Cheese Sandwich Deal',
//       bg: 'bg-gradient-to-br from-amber-400 to-yellow-300',
//       items: ['Medium Classic Cheese sandwich', 'Meduim Chacolate sandwich'],
//       price: '35',
//       save: 'Save 5',
//       images: [sandwich, sandwich]
//     },
//     {
//       title: 'Chicken Biriyani',
//       bg: 'bg-gradient-to-br from-gray-900 to-gray-700',
//       items: ['🔥 You Bring the Chicken, ', 'we’ll turn it into mouth-watering biryani.'],
//       price: '600 Per KG',
//       save: 'Save 50',
//       images: [biriyani, biriyani],
//       featured: true
//     }
//   ];

//   return (
//     <main className="bg-gradient-to-b from-white to-gray-50" id="offers">
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
//             <Zap className="w-4 h-4 mr-2" />
//             Limited Time Offers
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
//               Hot Deals
//             </span> for Every Craving
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             From family-sized feasts to solo indulgences, discover perfect offers for your food cravings.
//           </p>
//         </div>

//         {/* Deals Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {deals.filter(deal => !deal.featured).map((deal, index) => (
//             <div 
//               key={index}
//               className={`${deal.bg} rounded-2xl p-8 text-white overflow-hidden relative group transition-all duration-300 hover:shadow-xl`}
//             >
//               {/* Content */}
//               <div className="relative z-10">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4">{deal.title}</h2>
//                 <ul className="space-y-3 mb-8">
//                   {deal.items.map((item, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
//                       <span className="text-lg">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                   <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
//                     <ShoppingCart className="w-5 h-5" />
//                     Order Now
//                   </button>
//                   <div className="text-right">
//                     <p className="text-2xl font-bold">{deal.price} Rs</p>
//                     <p className="text-black">{deal.save} Rs</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Floating Images */}
//               <div className="absolute -bottom-10 -right-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="relative">
//                   <img 
//                     src={deal.images[0]} 
//                     alt="" 
//                     className="w-32 h-32 object-contain animate-float-slow" 
//                   />
//                   <img 
//                     src={deal.images[1]} 
//                     alt="" 
//                     className="w-28 h-28 object-contain absolute -top-8 -left-8 animate-float" 
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Featured Deal */}
//         {deals.filter(deal => deal.featured).map((deal, index) => (
//           <div 
//             key={index}
//             className={`${deal.bg} rounded-2xl p-8 md:p-12 text-white overflow-hidden relative mb-16 group`}
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               {/* Text Content */}
//               <div className="relative z-10">
//                 <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
//                   <Clock className="w-4 h-4 mr-2" />
//                   Today's Special
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">{deal.title}</h2>
//                 <ul className="space-y-4 mb-8">
//                   {deal.items.map((item, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span>
//                       <span className="text-xl">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-6">
//                   <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
//                     <ShoppingCart className="w-5 h-5" />
//                     Order Now
//                   </button>
//                   <div>
//                     <p className="text-3xl font-bold">{deal.price}</p>
//                     <p className="text-amber-300">{deal.save}</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Images */}
//               <div className="relative h-64">
//                 <img 
//                   src={deal.images[0]} 
//                   alt="" 
//                   className="absolute w-48 h-48 object-contain top-0 left-0 animate-float-slow" 
//                 />
//                 <img 
//                   src={deal.images[1]} 
//                   alt="" 
//                   className="absolute w-56 h-56 object-contain bottom-0 right-0 animate-float" 
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* View All CTA */}
//         <div className="text-center">
//           <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 group">
//             <span>View All Deals</span>
//             <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Deals;

import React from 'react';
import { ShoppingCart, Zap, Clock, ChevronRight } from 'lucide-react';
import dosa from '../assets/Images/donne-biriyani.avif';
import eggroll from  '../assets/Images/Biriyani.jpg';
import puri from '../assets/Images/chicken-curry.png'
// import samosa from '../assets/Images/samosa.png';
// import biriyani from '../assets/Images/Biriyani.jpg';
// import sandwich from '../assets/Images/sandwich2.png'


const Deals = () => {
  const deals = [
    {
      title: 'Donne Biriyani',
      bg: 'bg-gradient-to-br from-rose-600 to-amber-500',
      items: ['Chicken Donne Biriyani - ₹175', 'Egg Donne Biriyani - ₹125'],
      price: '₹90',
      save: 'Save ₹10',
      images: [dosa, dosa]
    },
    // {
    //   title: 'Stuffed Egg Roll Combo',
    //   bg: 'bg-gradient-to-br from-amber-400 to-yellow-300',
    //   items: ['Cheesy Egg Roll - ₹70', 'Spicy Chicken Egg Roll - ₹90'],
    //   price: '₹150',
    //   save: 'Save ₹15',
    //   images: [eggroll, eggroll]
    // },
    {
      title: 'Chicken Curry 1 kg',
      bg: 'bg-gradient-to-br from-gray-900 to-gray-700',
      items: ['🔥 You Bring the Chicken, ', 'we’ll turn it into mouth-watering Chicken Curry'],
      price: '₹350',
      save: 'Save ₹20',
      images: [puri, puri],
      featured: true
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50" id="offers">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Limited Time Offers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Hot Deals
            </span> on Egglicious Bites
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore crowd favorites from Mr Egg Hospet, specially priced for our egg-loving foodies.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 gap-8">
          {deals.filter(deal => !deal.featured).map((deal, index) => (
            // <div 
            //   key={index}
            //   className={`${deal.bg} rounded-2xl p-8 text-white overflow-hidden relative group transition-all duration-300 hover:shadow-xl`}
            // >
            //   {/* Content */}
            //   <div className="relative z-10">
            //     <h2 className="text-2xl md:text-3xl font-bold mb-4">{deal.title}</h2>
            //     <ul className="space-y-3 mb-8">
            //       {deal.items.map((item, i) => (
            //         <li key={i} className="flex items-center">
            //           <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            //           <span className="text-lg">{item}</span>
            //         </li>
            //       ))}
            //     </ul>
                
            //     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            //       <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
            //         <ShoppingCart className="w-5 h-5" />
            //         Order Now
            //       </button>
            //       <div className="text-right">
            //         {/* <p className="text-2xl font-bold">{deal.price}</p> */}
            //         {/* <p className="text-black">{deal.save}</p> */}
            //       </div>
            //     </div>
            //   </div>
              
            //   {/* Floating Images */}
            //   <div className="absolute -bottom-10 -right-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            //     <div className="relative">
            //       <img 
            //         src={deal.images[0]} 
            //         alt="" 
            //         className="w-32 h-32 object-contain animate-float-slow" 
            //       />
            //       <img 
            //         src={deal.images[1]} 
            //         alt="" 
            //         className="w-28 h-28 object-contain absolute -top-8 -left-8 animate-float" 
            //       />
            //     </div>
            //   </div>
            // </div>
            <div 
            key={index}
            className={`${deal.bg} rounded-2xl p-8 md:p-12 text-white overflow-hidden relative mb-16 group`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Today's Special
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{deal.title}</h2>
                <ul className="space-y-4 mb-8">
                  {deal.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span>
                      <span className="text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>
                  <div>
                    {/* <p className="text-3xl font-bold">{deal.price}</p>
                    <p className="text-amber-300">{deal.save}</p> */}
                  </div>
                </div>
              </div>
              
              {/* Images */}
              <div className="relative h-64">
                <img 
                  src={deal.images[0]} 
                  alt="" 
                  className="absolute w-48 h-48 top-0 left-0 animate-float-slow rounded-full object-cover" 
                />
                <img 
                  src={deal.images[1]} 
                  alt="" 
                  className="absolute w-56 h-56 object-contain bottom-0 right-0 animate-float  rounded-full object-cover" 
                />
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Featured Deal */}
        {deals.filter(deal => deal.featured).map((deal, index) => (
          <div 
            key={index}
            className={`${deal.bg} rounded-2xl p-8 md:p-12 text-white overflow-hidden relative mb-16 group`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  Today's Special
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{deal.title}</h2>
                <ul className="space-y-4 mb-8">
                  {deal.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-3 h-3 bg-amber-400 rounded-full mr-3"></span>
                      <span className="text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>
                  <div>
                    <p className="text-3xl font-bold">{deal.price}</p>
                    <p className="text-amber-300">{deal.save}</p>
                  </div>
                </div>
              </div>
              
              {/* Images */}
              <div className="relative h-64">
                <img 
                  src={deal.images[0]} 
                  alt="" 
                  className="absolute w-48 h-48 object-contain top-0 left-0 animate-float-slow" 
                />
                <img 
                  src={deal.images[1]} 
                  alt="" 
                  className="absolute w-56 h-56 object-contain bottom-0 right-0 animate-float" 
                />
              </div>
            </div>
          </div>
        ))}

        {/* View All CTA */}
        <div className="text-center">
          {/* <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 group">
            <span>View All Deals</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button> */}
           <a 
            href="/menu" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Full Deals</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Deals;
