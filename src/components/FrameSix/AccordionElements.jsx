import { SemiBoldFont, MediumFont } from "@/utils/fonts";

const items = [
  {
    title: "Build the Next Big Thing",
    content:
      "Work on groundbreaking projects that have the potential to revolutionize industries and shape the future",
    titleColor: "text-[#5F71F8B2]",
  },
  {
    title: "Gain Cutting-Edge Experience",
    content:
      "Immerse yourself in the development of innovative products, services, and technologies, gaining expertise in emerging fields.",
    titleColor: "text-[#FBD59B]",
  },
  {
    title: "Contribute Innovative Solutions",
    content:
      "Apply your knowledge and skills to solve complex challenges, contributing creative ideas that drive projects forward",
    titleColor: "text-[#2C2C2C99]",
  },
  {
    title: "Develop Future-Ready Skills",
    content:
      "Enhance your problem-solving, critical thinking, and adaptability – skills that are essential for success in the rapidly changing world of innovation.",
    titleColor: "text-[#38D37FB2]",
  },
  {
    title: "Build the Next Big Thing",
    content:
      "Work on groundbreaking projects that have the potential to revolutionize industries and shape the future",
    titleColor: "text-[#846548B2]",
  },
];

const AccordionElements = () => {
  return (
    <div className="mx-auto max-w-[1170px] -translate-y-28 rounded-[30px] bg-white px-4 md:px-16 md:py-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`py-6 ${index < items.length - 1 ? "border-b border-[#D7D7D7]" : ""}`}
        >
          <div
            className={`flex w-full px-4 py-2 text-left text-[27px] md:text-[40px] ${item.titleColor} ${SemiBoldFont.className}`}
          >
            {item.title}
          </div>
          <div
            className={`px-4 py-2 text-[21px] leading-[2.2rem] text-[#251729BF] md:text-[24px] md:leading-[2.5rem] ${MediumFont.className} max-w-[950px]`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionElements;
