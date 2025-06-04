import React from 'react';
import { Helmet } from 'react-helmet';
import tiffinbanner from '../../assets/Images/sandwhich.jpg'

const Blog2 = () => {
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
      "mainEntityOfPage": "https://freshbitezone.in/blog/top-evening-snacks-hospet",
      "datePublished": "2025-04-22"
    }
    `}
  </script>
</Helmet>

  return (
    <main className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto my-12  border-2 rounded-xl border-gray-100 font-sans shadow-xl">
      <Helmet>
        <title>Top 10 Reasons Why FreshBiteZone is the Best Tiffin & Snacks Center in Hospet (583201)</title>
        <meta name="description" content="Discover why FreshBiteZone is the top-rated tiffin and snacks center in Hospet. Hygienic, affordable, and delicious meals made fresh daily." />
        <meta name="keywords" content="Tiffin Hospet, best snacks Hospet, FreshBiteZone, homemade food, Hospet 583201" />
      </Helmet>

      {/* Blog Header */}
      <section className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center">
          10 Reasons Why <span className="text-[#ef0938]">FreshBiteZone</span> is Hospet’s Best Tiffin & Snacks Center
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
          Searching for the best tiffin in Hospet? Here's why FreshBiteZone is everyone’s favorite go-to spot.
        </p>
        <div className="w-full h-64 mt-8 rounded-xl overflow-hidden">
          <img src={tiffinbanner} alt="Tiffin snacks banner" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Blog Content */}
      <section className="space-y-8 text-lg leading-relaxed ">
        <ol className="list-decimal list-inside space-y-6">
          <li><strong className="text-[#ef0938]">Fresh, Homemade Food Every Day</strong><br /> Just like home — warm, nutritious and prepared with care.</li>
          <li><strong className="text-[#ef0938]">100% Hygienic Kitchen</strong><br /> We follow the highest cleanliness standards in our kitchen.</li>
          <li><strong className="text-[#ef0938]">Veg & Non-Veg Variety</strong><br /> From dal rice to chicken fry — something for every taste bud.</li>
          <li><strong className="text-[#ef0938]">Fast Delivery in Hospet</strong><br /> Serving Patel Nagar, Basaveshwar Colony & more. Always hot, always fast.</li>
          <li><strong className="text-[#ef0938]">Loved by Students & Families</strong><br /> Whether you're a college student or a working parent, our tiffins satisfy.</li>
          <li><strong className="text-[#ef0938]">Pocket-Friendly Pricing</strong><br /> Full meals from just ₹50. Honest food, no hidden costs.</li>
          <li><strong className="text-[#ef0938]">Customizable Meals</strong><br /> Don’t like something? Tell us! We let you pick your preferences.</li>
          <li><strong className="text-[#ef0938]">4.8+ Rated by Locals</strong><br /> Verified reviews, trusted by 1000s in Hospet.</li>
          <li><strong className="text-[#ef0938]">Order in Seconds</strong><br /> Browse our <a href="/menu" className="text-blue-600 underline">menu</a> and place your order via WhatsApp or website.</li>
          <li><strong className="text-[#ef0938]">We’re Truly Local</strong><br /> A homegrown Hospet brand you can rely on daily.</li>
        </ol>
      </section>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="/menu" className="bg-[#ef0938] text-white px-6 py-3 rounded-full shadow hover:bg-[#d80b32] transition">
          View Our Menu
        </a>
        <a href="/#contact" className="bg-gray-800 text-white px-6 py-3 rounded-full shadow hover:bg-gray-900 transition">
          Contact Us
        </a>
      </div>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">📌 Frequently Asked Questions</h2>
        <ul className="space-y-4 text-base">
          <li><strong>Q: Do you deliver in 583201?</strong><br />Yes, we deliver across all major areas in Hospet.</li>
          <li><strong>Q: Can I order only snacks?</strong><br />Yes! From samosas to chicken pakoras, we’ve got you covered.</li>
          <li><strong>Q: Is your food spicy?</strong><br />We offer both mild and spicy options — your taste, your choice!</li>
        </ul>
      </section>

      {/* SEO Footer Text */}
      <div className="mt-10 text-sm text-gray-500">
        <p><strong>Serving Areas:</strong> Patel Nagar, Basaveshwar Colony, Vidyanagar, Railway Station Area, Hospet 583201</p>
        <p><strong>Search Terms:</strong> tiffin near me, snacks center Hospet, non veg tiffin, FreshBiteZone review, best meals in Hospet</p>
      </div>

      <div className="mt-12 text-center text-xl font-semibold">
        ❤️ Join 1000+ Happy Customers. Try FreshBiteZone Today!
      </div>
    </main>
  );
};

export default Blog2;