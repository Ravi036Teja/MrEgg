import React from 'react';
import { AlertCircle, Mail, Phone } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="text-amber-500 w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-rose-600">
            Refund Policy
          </h1>
        </div>

        <p className="text-gray-700 text-lg mb-4">
          At <span className="font-semibold text-amber-600">Mr Egg</span>, we are dedicated to delivering delicious and hygienic meals to your doorstep via Zomato, Swiggy, and our official website.
        </p>

        <p className="text-gray-700 mb-4">
          Please note that all orders placed are <span className="font-semibold text-red-600">final and non-refundable</span>. Since our products are freshly prepared per order and are perishable, we do not accept returns or issue refunds.
        </p>

        <p className="text-gray-700 mb-4">
          If your order has any issues such as:
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
          <li>Incorrect item delivered</li>
          <li>Items missing from the order</li>
          <li>Quality concerns</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Please contact our support team immediately. We’ll do our best to resolve the issue quickly and fairly.
        </p>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg shadow-sm space-y-2 mb-6">
          <p className="flex items-center gap-2 text-sm text-gray-800">
            <Mail className="w-4 h-4 text-amber-600" />
            Email: <a href="mailto:freshbitezone24@gmail.com" className="text-amber-600 underline">freshbitezone24@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-800">
            <Phone className="w-4 h-4 text-amber-600" />
            Phone: <a href="tel:+919380609674" className="text-amber-600 underline">+91 9380609674</a>
          </p>
        </div>

        <p className="text-sm text-gray-500">
          This policy is effective as of <span className="text-gray-700 font-medium">{new Date().toLocaleDateString()}</span>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
