"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.",
  },
  {
    question: "Six curiosity day assurance bed necessary?",
    answer: "",
  },
  {
    question: "Produce say the ten moments parties?",
    answer: "",
  },
  {
    question: "Simple innate summer fat appear basket his desire joy?",
    answer: "",
  },
  {
    question: "Outward clothes promise at gravity do excited?",
    answer: "",
  },
];

const FaqPage = () => {
  const [openIdx, setOpenIdx] = useState(0); // Only first FAQ open by default

  return (
    <div className="bg-[#F8F9FB] min-h-screen py-20 px-6 md:px-0 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Side: FAQ List */}
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
            Fequently<br />asked questions
          </h1>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl border border-[#E5E5E5] px-8 py-6 cursor-pointer transition shadow-sm ${
                  openIdx === idx ? "border-gray-400" : ""
                }`}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <span className="text-3xl text-gray-400 font-bold select-none">
                    +
                  </span>
                </div>
                {openIdx === idx && item.answer && (
                  <div className="mt-4 text-gray-700 text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right Side: Extra Card */}
        <div className="bg-white rounded-xl border border-[#E5E5E5] p-8 flex flex-col items-center justify-center shadow-sm mt-72">
          {/* Chat/Message Icon */}
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="mb-6">
            <rect x="10" y="10" width="32" height="24" rx="4" fill="#000" />
            <polygon points="26,34 22,42 30,34" fill="#000" />
          </svg>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900 mb-3">
              Do you have more questions?
            </p>
            <p className="text-base text-gray-700 mb-6">
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </p>
            <button className="bg-[#FF7F5C] text-white font-semibold rounded-lg px-6 py-3 text-base shadow hover:bg-[#ff6b3e] transition">
              Shoot a Direct Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;