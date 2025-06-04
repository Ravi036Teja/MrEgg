import React from 'react';
import { ShieldCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-amber-500 w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-rose-600">
            Privacy Policy
          </h1>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          At <span className="font-semibold text-amber-600">Mr Egg – Hospet</span>, your privacy is important to us.
          This policy explains how we handle your personal information when you use our website or place an order.
        </p>

        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">1. Information Collection</h2>
            <p>
              We collect personal information such as your name, phone number, and delivery address when you place an order. We may also collect browsing data through cookies and analytics tools for improving your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">2. Use of Information</h2>
            <p>
              Your information is used to process orders, provide customer service, and (with your consent) offer promotions or updates relevant to your preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">3. Data Protection</h2>
            <p>
              We follow industry-standard security practices to ensure your personal data is safe and protected. We never share your data with third parties except for delivery or payment processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">4. Contact Us</h2>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-500" />
              If you have any questions, email us at &nbsp;
              <a href="mailto:mr.egghospet@gmail.com" className="text-amber-600 underline">
                mr.egghospet@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: <span className="text-gray-700 font-medium">{new Date().toLocaleDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
