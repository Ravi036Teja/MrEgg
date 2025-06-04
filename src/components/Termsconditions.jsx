import React from 'react';
import { ScrollText, Mail } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <ScrollText className="text-amber-500 w-8 h-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-rose-600">
            Terms & Conditions
          </h1>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          These Terms & Conditions govern your use of the <span className="font-semibold text-amber-600">Mr Egg – Hospet</span> website and services. By accessing our offerings, you agree to abide by the terms below.
        </p>

        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">1. Ordering</h2>
            <p>
              All orders are subject to availability and confirmation. We reserve the right to accept, reject, or cancel any order at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">2. Pricing</h2>
            <p>
              All prices are listed in INR and are inclusive of applicable taxes unless stated otherwise. We may modify prices at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">3. Refund Policy</h2>
            <p>
              If your order is incorrect or not up to expectations, please reach out to us within 24 hours. Refunds are processed only after proper verification. See our <a href="/refund-policy" className="text-rose-600 underline font-medium">Refund Policy</a> for more details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">4. Changes</h2>
            <p>
              We may update or revise these terms at any time. Continued use of our website after changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-amber-600 mb-1">5. Contact Us</h2>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-500" />
              For queries regarding these terms, contact us at&nbsp;
              <a href="mailto:mr.egghospet@gmail.com" className="text-amber-600 underline">
                mr.egghospet@gmail.com
              </a>.
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

export default TermsAndConditions;
