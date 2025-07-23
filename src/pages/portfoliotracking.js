import React from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div className="mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Automated <br /> portfolio tracking
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
            Yet bed any for travelling assistance indulgence unpleasing.<br />
            Not thoughts all exercise blessing.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mb-12">
          <div className="bg-gray-200 rounded-xl p-6 max-w-lg ml-auto">
            <div className="flex items-start mb-2">
              <span className="text-3xl font-bold text-gray-900 mr-2">“</span>
              <span className="text-gray-700">
                Wise busy past both park when an ye no. Nay likely her length sooner thrown  lively income. The expense windows adapted sir. Wrong widen.
              </span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              - Mike Taylor, Web Designer
            </p>
          </div>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="text-left text-gray-500 font-semibold text-lg mb-4">01</div>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/blue.png"
                alt="Connect wallets & companies"
                width={50}
                height={45}
                className="mx-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect wallets & companies</h3>
            <p className="text-gray-600 text-base">
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="text-left text-gray-500 font-semibold text-lg mb-4">02</div>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/orange.png"
                alt="Review transactions"
                width={50}
                height={45}
                className="mx-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Review transactions</h3>
            <p className="text-gray-600 text-base">
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="text-left text-gray-500 font-semibold text-lg mb-4">03</div>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/yellow.png"
                alt="Get income insights"
                width={50}
                height={45}
                className="mx-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get income insights</h3>
            <p className="text-gray-600 text-base">
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;