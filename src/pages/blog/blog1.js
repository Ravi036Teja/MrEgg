import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Blog1 = () => {
  <Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 5 Evening Snacks Loved in Hospet – FreshBiteZone’s Special Picks!",
      "description": "Discover the top 5 homemade snacks in Hospet, served hot and hygienic at FreshBiteZone.",
      "image": "https://yourdomain.com/snack-banner.jpg",
      "author": {
        "@type": "Organization",
        "name": "FreshBiteZone"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FreshBiteZone",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"
        }
      },
      "mainEntityOfPage": "https://freshbitezone.in/blog/",
      "datePublished": "2025-04-22"
    }
    `}
  </script>
</Helmet>
  return (
    <main className="bg-white min-h-screen text-[#1a1a1a] px-4 md:px-8 py-12 font-sans max-w-4xl mx-auto">
      {/* Meta Tags */}
      <Helmet>
        <title>Top 5 Evening Snacks in Hospet | FreshBiteZone</title>
        <meta
          name="description"
          content="Discover the top 5 homemade snacks in Hospet, served hot and hygienic at FreshBiteZone. Veg and Non-Veg evening snacks available now!"
        />
        <meta
          name="keywords"
          content="Hospet evening snacks, best snacks in Hospet, homemade snacks, non veg snacks Hospet, FreshBiteZone"
        />
        <link rel="canonical" href="https://freshbitezone.netlify.app/blog/top-evening-snacks-hospet" />
      </Helmet>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
      >
        Top 5 Evening Snacks Loved in Hospet – <span className="text-green-600">FreshBiteZone</span> Picks!
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg mb-8 text-gray-700"
      >
        Whether you're a student, office-goer, or food lover, here are the most-loved evening snacks made fresh and hygienic, right here in Hospet!
      </motion.p>

      {/* Snack Cards */}
      <div className="space-y-8">
        {[
          {
            emoji: '🥟',
            title: 'Veg Samosa',
            desc: 'Crispy, golden and stuffed with spicy potatoes — a perfect evening treat with tea.',
          },
          {
            emoji: '🌽',
            title: 'Corn Chaat',
            desc: 'Juicy sweet corn tossed with onions, lemon, and spices. Light, healthy, and flavorful!',
          },
          {
            emoji: '🍗',
            title: 'Chicken Pakora (Non-Veg)',
            desc: 'Crispy, spicy chicken fritters – the perfect non-veg snack served hot and fresh.',
          },
          {
            emoji: '🍟',
            title: 'Masala French Fries',
            desc: 'Classic fries with a desi twist! Tossed in homemade masala for that extra kick.',
          },
          {
            emoji: '🌮',
            title: 'Egg Rolls (Non-Veg)',
            desc: 'Soft rolls stuffed with eggs, veggies & sauces. Tasty, filling, and loved by all.',
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition border"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <span>{item.emoji}</span> {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Location & CTA */}
      <motion.div
        className="mt-12 bg-green-50 p-6 rounded-xl border-l-4 border-green-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-2">📍 Available Only in Hospet (583201)</h3>
        <p className="text-gray-700 mb-2">All items are made fresh, hygienic, and budget-friendly — straight from our kitchen to your plate.</p>
        <p className="font-semibold text-lg text-green-700">🔥 Order now on WhatsApp or visit us at FreshBiteZone, Hospet.</p>
      </motion.div>

      {/* Bonus Section */}
      <div className="mt-10 text-sm text-gray-600">
        <h4 className="font-semibold text-lg mb-2">⭐ Bonus Tip:</h4>
        <p>Ask about our <strong className="text-green-600">Tiffin Combo Offers</strong> for PGs, students & working professionals!</p>
      </div>
    </main>
  );
};

export default Blog1;
