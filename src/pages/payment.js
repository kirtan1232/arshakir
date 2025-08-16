import Image from 'next/image';

const PaymentSection = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* First Row: Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          
          {/* LEFT TOP - Full size image, no frame, shows all details */}
          <div className="flex flex-col justify-center items-center order-2 lg:order-1">
            <Image
              src="/images/payment1.png"
              alt="Payment 1"
              width={600}
              height={600}
              className="w-full h-auto object-contain max-w-md lg:max-w-full"
              style={{ display: 'block' }}
            />
          </div>

          {/* RIGHT TOP - Track Payments Text */}
          <div className="flex flex-col justify-center px-0 py-8 order-1 lg:order-2">
            <span className="text-blue-700 font-semibold uppercase mb-2 tracking-wide text-sm">Why choose us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Track your payments<br />on the go with the best way possible
            </h2>
            <p className="text-gray-600 text-base lg:text-lg mb-6">
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Get Overview at a glance</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Deposit funds easily, security</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Get Live Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT BOTTOM - Save Money Text */}
          <div className="flex flex-col px-0 py-8 order-1">
            <span className="text-blue-700 font-semibold uppercase mb-2 tracking-wide text-sm">Why choose us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Save money with<br />proper transaction
            </h2>
            <p className="text-gray-600 text-base lg:text-lg mb-6">
              We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.
            </p>
            {/* Testimonial */}
            <div className="bg-gray-200 rounded-xl px-4 sm:px-6 py-4 max-w-md mb-8">
              <div className="text-gray-700 text-sm sm:text-base">
                Wise busy past both park when an ye no. Nay likely her length sooner thrown  lively income. The expense windows.
              </div>
              <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                - Mike Taylor, Web Designer
              </p>
            </div>
          </div>

          {/* RIGHT BOTTOM - Full size image, no frame, shows all details */}
          <div className="flex flex-col items-center justify-center order-2">
            <Image
              src="/images/payment2.png"
              alt="Payment 2"
              width={600}
              height={600}
              className="w-full h-auto object-contain max-w-md lg:max-w-full"
              style={{ display: 'block' }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PaymentSection;