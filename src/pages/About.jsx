// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Star, Clock, Shield, Truck } from 'lucide-react';
// import dosa from '../assets/Images/dosa.jpg';
// import puri from '../assets/Images/puri.jpg';
// import butter from '../assets/Images/butternaan.jpg';

// const About = () => {
//   const features = [
//     {
//       icon: <Star className="w-6 h-6 text-amber-400" />,
//       title: "Premium Quality",
//       description: "Only the finest ingredients make it to your plate"
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-rose-500" />,
//       title: "Fast Preparation",
//       description: "Freshly made to order in under 15 minutes"
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-emerald-500" />,
//       title: "Hygienic Packaging",
//       description: "100% contamination-free delivery"
//     },
//     {
//       icon: <Truck className="w-6 h-6 text-blue-500" />,
//       title: "Quick Delivery",
//       description: "At your doorstep in 30 minutes or less"
//     }
//   ];

//   const dishes = [
//     {
//       image: dosa,
//       title: "Dosa",
//       description: "Thin and crispy South Indian crepe made with fermented rice & urad dal batter. Served hot with sambar and chutney.",
//       price: "₹35",
//       badge: "Best Seller"
//     },
//     {
//       image: puri,
//       title: "Puri",
//       description: "Deep-fried Indian bread served with flavorful potato curry – a popular breakfast and lunch delight.",
//       price: "₹40",
//       badge: "Customer Favorite"
//     },
//     {
//       image: butter,
//       title: "Butter Naan",
//       description: "Oven-baked soft Indian flatbread brushed with melted butter – best enjoyed with curries and gravies.",
//       price: "₹45",
//       badge: "Chef's Special"
//     }
//   ];

//   return (
//     <main className="bg-gradient-to-b from-white to-rose-50" id="about">
//       <Helmet>
//         <title>About Us - Best-Selling Indian Snacks | FreshBiteZone</title>
//         <meta name="description" content="Discover the most loved Indian snacks at FreshBiteZone including Dosa, Puri, and Butter Naan. Fresh, flavorful, and made to delight your taste buds." />
//         {/* Keep other meta tags as in original */}
//       </Helmet>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         {/* Header Section */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
//             Our Signature Dishes
//           </span>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
//               Best-Selling
//             </span> Indian Snacks
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             Explore the most loved dishes at FreshBiteZone – from traditional South Indian Dosa to North Indian favorites like Butter Naan and crispy Puri. All made fresh and served hot!
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
//               <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Dishes Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {dishes.map((dish, index) => (
//             <article 
//               key={index}
//               className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="relative overflow-hidden h-64">
//                 <img 
//                   src={dish.image} 
//                   alt={dish.title} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//                 />
//                 {dish.badge && (
//                   <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
//                     {dish.badge}
//                   </span>
//                 )}
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-3 text-gray-900">{dish.title}</h2>
//                 <p className="text-gray-600 mb-6">{dish.description}</p>
//                 <div className="flex justify-between items-center">
//                   <button className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300">
//                     Order Now
//                   </button>
//                   <div className="flex items-center">
//                     <span className="text-gray-500 mr-2">from</span>
//                     <span className="text-xl font-semibold text-gray-900">{dish.price}</span>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <a 
//             href="#menu" 
//             className="inline-block px-8 py-4 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <span className="flex items-center justify-center space-x-2">
//               <span>View Full Menu</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </span>
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Star, Clock, Shield, Truck } from 'lucide-react';
import dosa from '../assets/Images/dosa.jpg';
import puri from '../assets/Images/eggcurry.png';
import butter from '../assets/Images/butternaan.jpg';

const About = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-amber-400" />,
      title: "Eggs-pert Quality",
      description: "We use Grade A eggs and fresh ingredients in every dish."
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: "Made Fresh",
      description: "Cooked on order—always hot, never stale."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Hygienic Cooking",
      description: "Prepared in a sanitized cloud kitchen environment."
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-500" />,
      title: "Swift Delivery",
      description: "Delivered via Zomato & Swiggy in under 30 minutes."
    }
  ];

  const dishes = [
    {
      image: 'https://orders.popskitchen.in/storage/2024/09/image-264.png',
      title: "Egg Bhurji with Chapthi",
      description: "Fluffy scrambled eggs spiced with turmeric, chilies, and onions,smashed hot on a griddle,  served with chapathi.",
      price: "₹170",
      badge: "Top Pick"
    },
    {
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2025/02/Egg-Curry-Square-FS.jpg',
      title: "Egg Curry with Chapathi",
      description: "Boiled eggs simmered in a spicy onion tomato gravy is super delicious, flavorsome and simple to make.",
      price: "₹170",
      badge: "Customer Favorite"
    },
    {
      image: 'https://thecurrymommy.com/wp-content/uploads/2018/09/Egg-Kheema.jpg',
      title: "Egg Kheema with Paratha",
      description: " Spiced minced egg (kheema) cooked with onions, chilies, and aromatic spices, served with buttery paratha.",
      price: "₹170",
      badge: "Chef’s Choice"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-rose-50" id="about">
      <Helmet>
        <title>Mr Egg Hospet | Best Egg Dishes Delivered</title>
        <meta name="description" content="At Mr Egg – Hospet, discover egg-infused delights like Masala Egg Dosa, Egg Curry Puri, and Butter Naan with Egg Bhurji. Fresh, fast, and full of flavor." />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            Mr Egg Specials
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Egg-licious
            </span> Dishes Loved in Hospet
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our best-sellers from the Mr Egg kitchen—crafted with passion and packed with protein. Whether you crave dosa, puri, or naan, we bring egg-citing flavors to your doorstep!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dishes.map((dish, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {dish.badge && (
                  <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {dish.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dish.title}</h2>
                <p className="text-gray-600 mb-6">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300">
                    Order Now
                  </button>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Just </span>
                    <span className="text-xl font-semibold text-gray-900">{dish.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="/menu" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Full Menu</span>
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

export default About;
