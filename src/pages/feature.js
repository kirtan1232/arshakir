import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#C9E7F2' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Features that blows mind
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
          </p>
        </div>

        {/* Features Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Two big feature cards */}
          <div className="flex flex-col md:flex-row gap-8 flex-[2]">
            <div className="bg-white rounded-xl border border-gray-200 p-8 w-full md:w-[350px]">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/orange.png"
                  alt="Feature Icon 1"
                  width={40}
                  height={24}
                  className="mr-2"
                  priority
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Really boy law county she unable her sister
              </h3>
              <p className="text-gray-700 text-base">
                We so opinion friends me message as delight. Whole front do of plate heard oh ought.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 w-full md:w-[350px]">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/blue.png"
                  alt="Feature Icon 2"
                  width={40}
                  height={24}
                  className="mr-2"
                  priority
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Among sex are leave law built now
              </h3>
              <p className="text-gray-700 text-base">
                We so opinion friends me message as delight. Whole front do of plate heard oh ought.
              </p>
            </div>
          </div>

          {/* Right: Two stacked smaller cards */}
          <div className="flex flex-col gap-8 flex-1 w-full md:w-[300px]">
            <div className="bg-white rounded-xl border border-gray-200 p-8 flex items-center h-full">
              <h3 className="text-lg font-bold text-gray-900">
                Merits behind on afraid or warmly
              </h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 flex items-center h-full">
              <h3 className="text-lg font-bold text-gray-900">
                Believing neglected so so allowance existence
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;