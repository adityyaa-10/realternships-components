"use client";
import { SemiBoldFont, MediumFont } from "@/utils/fonts";
import { useState } from "react";

const items = [
  {
    title: "Embrace Challenges",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
  {
    title: "Pursue Excellence",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
  {
    title: "Empathy in Action",
    content:
      "See problems as opportunities for innovation and growth. Your ability to tackle difficult issues head- on is what will set you apart",
  },
];

const UnpretentiousAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className="mx-auto max-w-[700px] rounded-t-[10px] border-[5px] border-[#FAD49B]/50 bg-[#4A5FF7] px-2 text-white md:py-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`py-6 ${index < items.length - 1 ? "border-b-2 border-[#D7D7D7]" : ""}`}
        >
          <button
            onClick={() => handleClick(index)}
            className={`flex w-full justify-between px-4 py-2 text-left text-[22px] md:text-[28px] ${SemiBoldFont.className}`}
          >
            {item.title}
            <span className="ml-2 p-2">
              {openIndex === index ? (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 15l-7-7-7 7"></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div
              className={`px-4 py-2 text-[20px] leading-[2.4rem] ${MediumFont.className} max-w-[700px]`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UnpretentiousAccordion;
