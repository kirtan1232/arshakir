import React from "react";

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center py-16 bg-[#F8F9FB]">
      <div
        className="w-full max-w-4xl rounded-2xl relative flex flex-col items-center justify-center py-16 px-4 md:px-0"
        style={{ backgroundColor: "#3734A9" }}
      >
        {/* Decorative Dots (top left) */}
        <svg
          className="absolute left-8 top-8"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <g opacity="0.4">
            {[...Array(7)].map((_, row) =>
              [...Array(7)].map((_, col) => (
                <circle
                  key={row + "-" + col}
                  cx={col * 14}
                  cy={row * 14}
                  r="2"
                  fill="white"
                />
              ))
            )}
          </g>
        </svg>
        {/* Top Right Zigzag */}
        <svg
          className="absolute right-12 top-10"
          width="60"
          height="16"
          viewBox="0 0 60 16"
          fill="none"
        >
          <path
            d="M1 15C8.5 1 16.5 15 24.5 1C32.5 15 40.5 1 48.5 15C56.5 1 59 15 59 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Left Zigzag */}
        <svg
          className="absolute left-8 top-1/2 -translate-y-1/2"
          width="16"
          height="60"
          viewBox="0 0 16 60"
          fill="none"
        >
          <path
            d="M1 1C15 9 1 17 15 25C1 33 15 41 1 49C15 57 1 59 1 59"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Bottom Right Shapes */}
        <svg
          className="absolute right-16 bottom-12"
          width="90"
          height="52"
          viewBox="0 0 90 52"
          fill="none"
        >
          <path d="M18 0V18H36A18 18 0 0 0 18 0Z" fill="#6B6B8F" opacity="0.4" />
          <path
            d="M72 0V18H90A18 18 0 0 0 72 0Z"
            fill="#6B6B8F"
            opacity="0.4"
            transform="rotate(90 72 0)"
          />
          <path d="M54 34V52H72A18 18 0 0 0 54 34Z" fill="#6B6B8F" opacity="0.4" />
        </svg>
        {/* Bottom Center Shape */}
        <svg
          className="absolute left-56 bottom-20"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M0 16A16 16 0 0 0 16 32V16H0Z" fill="#09D8FD" />
        </svg>
        {/* Title */}
        <h2 className="text-white font-bold text-4xl md:text-5xl text-center mb-8 z-10 leading-tight">
          Discover a better way to<br />manage spendings
        </h2>
        {/* Button */}
        <button className="bg-[#FF7F5C] text-white font-semibold rounded-lg px-8 py-3 text-lg shadow-md z-10 mt-2 hover:bg-[#ff6b3e] transition">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default GetStarted;