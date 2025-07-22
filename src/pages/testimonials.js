import React from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Testimonials
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold leading-none">“</span>
                </div>
              </div>
              <div>
                <p className="text-gray-900 text-lg font-medium mb-4">
                  Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.
                </p>
                <p className="text-gray-700 text-base font- medium">
                  - Mike Taylor, Web Designer
                </p>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="bg-blue-200 w-60 h-72 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/person1.png"
                  alt="Person 1"
                  width={240}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold leading-none">“</span>
                </div>
              </div>
              <div>
                <p className="text-gray-900 text-lg font-medium mb-4">
                  Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.
                </p>
                <p className="text-gray-700 text-base font-medium">
                  - Mike Taylor, Web Designer
                </p>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="bg-blue-200 w-60 h-72 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/person2.png"
                  alt="Person 2"
                  width={240}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Section - Full Width, bg=3734A9, larger text */}
        <div className="bg-[#3734A9] py-16 px-4 rounded-t-3xl w-screen relative left-1/2 right-1/2 -mx-[50vw] flex flex-col items-center">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
            <div className="flex flex-col justify-center items-center">
              <p className="text-blue-100 font-bold text-2xl mb-4">
                We speak with our powerfull statistics
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl font-extrabold mb-4">1M+</div>
              <div className="text-blue-300 font-bold text-2xl flex items-center">
                <span className="text-green-400 text-3xl mr-2">★</span>
                Active Users
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl font-extrabold mb-4">30K+</div>
              <div className="text-blue-300 font-bold text-2xl flex items-center">
                <span className="text-yellow-400 text-3xl mr-2">★</span>
                5-Stars Reviews
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-5xl font-extrabold mb-4">$252M</div>
              <div className="text-blue-300 font-bold text-2xl flex items-center">
                <span className="text-cyan-300 text-3xl mr-2">$</span>
                Transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;