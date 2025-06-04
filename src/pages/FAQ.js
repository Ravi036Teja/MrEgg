import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const faqData = [
  {
    question: "What kind of food do you offer?",
    answer: "We offer a variety of South Indian snacks, Tiffin meals, and combo options, including Chapati, Sambar, Samosas, and more.",
  },
  {
    question: "How do I place an order?",
    answer: "Simply go to the 'Menu' section, choose your items, and place your order online. We’ll take care of the rest!",
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes! We deliver across the city. You can choose delivery at checkout.",
  },
  {
    question: "Can I customize my order?",
    answer: "Yes, we offer customization options for certain items. You can contact us for any special requests.",
  },
  {
    question: "What are your hours of operation?",
    answer: "We are open every day from 9:00 AM to 9:00 PM. Feel free to visit or place an order during these hours.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#fafafa] py-16" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-gray-600">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
