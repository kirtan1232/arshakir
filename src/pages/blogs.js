import React from "react";
import Image from 'next/image';

const blogs = [
  {
    title: "In design active temper be uneasy. Thirty for remove plenty regard.",
    category: "BEST PRACTICES",
    readMore: true,
    image: "/images/blog1.png",
  },
  {
    title: "Partiality on or continuing particular principles as.",
    category: "BEST PRACTICES",
    image: "/images/blog2.png",
  },
  {
    title: "Village did removed enjoyed explain",
    category: "BEST PRACTICES",
    image: "/images/blog3.png",
  },
  {
    title: "Wise busy past both park when an ye no. Nay likely her length.",
    category: "BEST PRACTICES",
    image: "/images/blog4.png",
  },
];

const imageSizes = {
  main: { width: 340, height: 240 },
  card: { width: 340, height: 120 },
};

const Blogs = () => {
  return (
    <div className="bg-[#F8F9FB] py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">Recent Blogs</h2>
        {/* Top big feature row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8">
          {/* Left: Big Text Card */}
          <div className="bg-white rounded-tl-2xl rounded-bl-2xl md:rounded-tr-none p-8 flex flex-col justify-between min-h-[240px] border border-[#E5E5E5]">
            <span className="text-xs font-semibold text-gray-700 tracking-widest mb-4">
              {blogs[0].category}
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 leading-snug">
                {blogs[0].title}
              </h3>
              {blogs[0].readMore && (
                <a href="#" className="text-sm font-medium text-gray-900 flex items-center gap-2 mt-3 hover:underline">
                  Read More
                  <svg className="inline ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
          {/* Right: Image */}
          <div className="bg-white rounded-tr-2xl rounded-br-2xl md:rounded-bl-none border border-l-0 border-[#E5E5E5] flex items-center justify-center min-h-[240px]">
            <Image
              src={blogs[0].image}
              alt="Blog 1"
              width={imageSizes.main.width}
              height={imageSizes.main.height}
            />
          </div>
        </div>
        {/* Bottom grid: 3 cards (text top, image below text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] flex flex-col overflow-hidden">
            <div className="p-6 flex-1">
              <span className="text-xs font-semibold text-gray-700 tracking-widest mb-3 block">
                {blogs[1].category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {blogs[1].title}
              </h3>
              <Image
                src={blogs[1].image}
                alt="Blog 2"
                width={imageSizes.card.width}
                height={imageSizes.card.height}
                className="mt-4"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] flex flex-col overflow-hidden">
            <div className="p-6 flex-1">
              <span className="text-xs font-semibold text-gray-700 tracking-widest mb-3 block">
                {blogs[2].category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {blogs[2].title}
              </h3>
              <Image
                src={blogs[2].image}
                alt="Blog 3"
                width={imageSizes.card.width}
                height={imageSizes.card.height}
                className="mt-4"
              />
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#E5E5E5] flex flex-col overflow-hidden">
            <div className="p-6 flex-1">
              <span className="text-xs font-semibold text-gray-700 tracking-widest mb-3 block">
                {blogs[3].category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {blogs[3].title}
              </h3>
              <Image
                src={blogs[3].image}
                alt="Blog 4"
                width={imageSizes.card.width}
                height={imageSizes.card.height}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;