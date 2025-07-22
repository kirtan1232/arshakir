import React from 'react';
import Image from 'next/image';

const PaymentSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-0 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* LEFT TOP - Full size image, no frame, shows all details */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/payment1.png"
            alt="Payment 1"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            style={{ display: 'block', maxHeight: '100vh' }}
          />
        </div>

        {/* RIGHT TOP - Track Payments Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-8 -mt-44">
          <span className="text-blue-700 font-semibold uppercase mb-2 tracking-wide text-sm">Why choose us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Track your payments<br />on the go with the best way possible
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
              <span className="text-gray-700">Get Overview at a glance</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
              <span className="text-gray-700">Deposit funds easily, security</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-400 rounded-full mr-3"></span>
              <span className="text-gray-700">Get Live Support</span>
            </li>
          </ul>
        </div>

        {/* LEFT BOTTOM - Save Money Text */}
        <div className="flex flex-col mt-16 px-6 md:px-12 py-8">
          <span className="text-blue-700 font-semibold uppercase mb-2 tracking-wide text-sm mt-10">Why choose us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Save money with<br />proper transaction
          </h2>
          <p className="text-gray-600 text-base mb-6">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
          </p>
          {/* Testimonial */}
          <div className="bg-gray-200 rounded-xl px-6 py-4 max-w-md mb-8">
            <div className="text-gray-700 text-base">
              Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows.
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              - Mike Taylor, Web Designer
            </p>
          </div>
        </div>

        {/* RIGHT BOTTOM - Full size image, no frame, shows all details */}
        <div className="flex flex-col items-end justify-end mt-0">
          <Image
            src="/images/payment2.png"
            alt="Payment 2"
            width={600}
            height={600}
            className="w-full h-full object-contain"
            style={{ display: 'block', maxHeight: '100vh' }}
          />
        </div>

      </div>
    </section>
  );
};

export default PaymentSection;