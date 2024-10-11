import React from "react";
import Image from "next/image";
import Star from "@/public/assets/staryellow.svg";
import White from "@/public/assets/whitestar.svg";

const Title = ({ text }) => {
  return (
    <div className="relative w-fit py-10 font-righteous font-normal">
      <div className="text-5xl text-white md:text-8xl">
        <span className="underline">{text.charAt(0)}</span>
        <span className="w-full">{text.slice(1)}</span>
      </div>
      {/* <p className="h-0.5 w-7 bg-white md:w-12" /> */}
      <p className="mt-8 text-center text-xs text-cutie-blue-100 md:text-3xl">
        Thank you so much!
      </p>
      <div>
        <Image
          src={Star}
          alt="Yellow star"
          className="absolute -right-[16%] -top-[3%] w-[18%] md:-top-[17%]"
        />
        <Image
          src={White}
          alt="White star"
          className="absolute -right-[43%] top-[22%] w-[33%] md:-right-[33%] md:w-fit"
        />
        <Image
          src={Star}
          alt="Yellow star"
          className="absolute -bottom-[3%] -left-[22%] w-[18%] md:-bottom-[16%]"
        />
        <Image
          src={White}
          alt="White star"
          className="absolute -left-[44%] bottom-[27%] w-[33%] md:-left-[32%] md:w-fit"
        />
      </div>
    </div>
  );
};

export default Title;
