import React from 'react';
import { Helmet } from 'react-helmet';
import { ShoppingCart, Star, Heart, ChevronRight } from 'lucide-react';
import cheesecake from '../assets/Images/cheesecake.jpg';
import chocolate from '../assets/Images/chocolate.jpg';
import temptation from '../assets/Images/temptation.png';

const Desserts = () => {
  const desserts = [
    {
      image: cheesecake,
      title: "Cheesecake",
      description: "Creamy and rich cheesecake with a buttery crust. Melts in your mouth.",
      price: "$4.99",
      rating: 4.8,
      featured: false
    },
    {
      image: chocolate,
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey molten center. Pure indulgence.",
      price: "$5.49",
      rating: 4.9,
      featured: true
    },
    {
      image: temptation,
      title: "Strawberry Temptation",
      description: "Layers of fresh cream and strawberries with a hint of rose.",
      price: "$4.49",
      rating: 4.7,
      featured: false
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dessert Menu - FreshBiteZone",
    "itemListElement": desserts.map((dessert, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": dessert.title,
      "description": dessert.description,
      "image": `https://freshbitezone.netlify.app${dessert.image}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": dessert.price.replace('$', ''),
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": dessert.rating.toString(),
        "ratingCount": "100"
      }
    }))
  };

  return (
    <main className="bg-gradient-to-b from-white to-rose-50" id="desserts">
      <Helmet>
        <title>Premium Desserts in Hospet | FreshBiteZone</title>
        <meta name="description" content="Indulge in our gourmet desserts - cheesecakes, lava cakes & strawberry delights. Perfect ending to your meal, available for delivery in Hospet." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2 fill-amber-400" />
            Sweet Indulgences
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
              Decadent Desserts
            </span> to Satisfy Your Cravings
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Looking for the best desserts near you? At FreshBiteZone, indulge in homemade lava cakes, creamy cheesecakes, and sweet strawberry delights – available for takeaway or delivery in Hospet!
          </p>
        </div>

        {/* Dessert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {desserts.map((dessert, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${dessert.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dessert.image} 
                  alt={`${dessert.title} - FreshBiteZone`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {dessert.featured && (
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm flex items-center">
                    <Star className="w-4 h-4 mr-1 text-amber-400 fill-amber-400" />
                    Chef's Special
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-rose-600" />
                </button>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">{dessert.title}</h2>
                  <div className="flex items-center bg-amber-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="ml-1 text-sm font-medium">{dessert.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{dessert.description}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300">
                    <ShoppingCart className="w-5 h-5" />
                    Order Now
                  </button>
                  <div className="flex items-baseline">
                    <span className="text-gray-500 mr-1 text-sm">from</span>
                    <span className="text-xl font-semibold text-gray-900">{dessert.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 group">
            <span>View Full Dessert Menu</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Desserts;