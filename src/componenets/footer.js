import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FB] py-12 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* AR Shakir Info */}
          <div className="flex flex-col space-y-4">
            <span className="text-2xl font-bold text-gray-900">AR Shakir</span>
            <p className="text-[#6B6B8F] text-base leading-relaxed">
              Finance helps companies<br />manage payments easily.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="text-[#3734A9]">
                {/* LinkedIn SVG */}
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.023-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.938v5.668h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.268 2.368 4.268 5.455v6.285zm-16.447-11.452c-1.148 0-2.078-.931-2.078-2.078 0-1.147.93-2.078 2.078-2.078s2.078.931 2.078 2.078c0 1.147-.93 2.078-2.078 2.078zm1.777 11.452h-3.554v-11.452h3.554v11.452zm18.223-20.452h-20.447c-1.104 0-2 .896-2 2v20.447c0 1.104.896 2 2 2h20.447c1.104 0 2-.896 2-2v-20.447c0-1.104-.896-2-2-2z"/>
                </svg>
              </a>
              <a href="#" aria-label="Messenger" className="text-[#3734A9]">
                {/* Messenger SVG */}
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 3C8.268 3 2 8.672 2 15.35c0 3.353 1.625 6.328 4.313 8.594v4.217c0 .373.309.672.692.672.12 0 .24-.031.349-.092l4.475-2.457c.834.166 1.697.254 2.561.254 7.731 0 14-5.672 14-12.35S23.732 3 16 3zm1.393 13.498l-2.999-3.223-4.731 3.223 6.468-6.825 2.999 3.223 4.731-3.223-6.468 6.825z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#3734A9]">
                {/* Twitter SVG */}
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.543.936-.855 2.021-.855 3.176 0 2.191 1.117 4.124 2.823 5.261a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.085c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" aria-label="Infinity" className="text-[#3734A9]">
                {/* Infinity SVG */}
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 16.5c-2.21 0-4-1.79-4-4a4.004 4.004 0 014-4c2.21 0 4 1.79 4 4s-1.79 4-4 4zm-13 0c-2.21 0-4-1.79-4-4a4.004 4.004 0 014-4c2.21 0 4 1.79 4 4s-1.79 4-4 4zm13-7a3 3 0 100 6 3 3 0 000-6zm-13 0a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Company */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 mb-4">Company</span>
            <ul className="space-y-3 text-gray-900 text-base font-medium">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 mb-4">Resources</span>
            <ul className="space-y-3 text-gray-900 text-base font-medium">
              <li><a href="#">Proposal Template</a></li>
              <li><a href="#">Invoice Template</a></li>
              <li><a href="#">Tutorial</a></li>
              <li><a href="#">How to write a contract</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 mb-4">Join Our Newsletter</span>
            <form className="flex mb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#F1F0FE] px-4 py-2 rounded-l-lg text-gray-900 text-base outline-none w-2/3"
              />
              <button
                type="submit"
                className="bg-[#3734A9] text-white px-6 py-2 rounded-r-lg text-base font-bold"
              >
                Subscribe
              </button>
            </form>
            <span className="text-[#6B6B8F] text-xs mt-2">
              * Will send you weekly updates for your better finance management.
            </span>
          </div>
        </div>
        {/* Bottom Row */}
        <hr className="border-t border-[#E4E4E8] my-6" />
        <div className="text-center text-gray-500 text-base">
          Copyright @ AR Shakir 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;