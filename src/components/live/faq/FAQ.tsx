import { QUESTIONS } from "@/data/FAQ";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="flex h-full w-full flex-col items-center font-righteous text-white">
      <div className="w-5/12 rounded-3xl border-8 border-[#A22282] bg-[#61114D] p-6 shadow-lg">
        <div className="flex w-full flex-col space-y-2 overflow-hidden">
          {QUESTIONS.map((faq, index) => (
            <div
              key={index}
              className={`${
                index !== QUESTIONS.length - 1
                  ? "border-b border-white pb-1"
                  : ""
              }`}
            >
              <Item title={faq.question}>{faq.answer}</Item>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
