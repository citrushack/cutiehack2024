import Image from "next/image";
import { QUESTIONS } from "@/data/FAQ";
import UFO from "@/public/assets/ufo.svg";
import Item from "./Item";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="flex h-full w-full flex-col items-center bg-cutie-blue-300 py-10 font-righteous text-white"
    >
      <div className="flex items-center justify-center gap-2 py-4 align-middle text-7xl">
        <h1>F</h1>
        <Image
          src={UFO}
          alt="UFO"
          className="-mt-5 size-1/3 animate-jiggle-12s"
        />
        <h1>Q</h1>
      </div>
      <div className="w-11/12 rounded-3xl border-8 border-[#A22282] bg-[#61114D] p-6 shadow-lg md:w-5/12">
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
