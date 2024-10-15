import Image from "next/image";
import Countdown from "./Countdown";
import Apply from "./Apply";
import LOGO from "@/public/assets/cutieLogo.svg";
import star1 from "@/public/assets/star.svg";
import star2 from "@/public/assets/staryellow.svg";
import star3 from "@/public/assets/starwhite.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative mt-5 flex w-full flex-col bg-cutie-blue-300 text-white">
      <div className="mt-[9vh] flex w-full items-end justify-center">
        <div className="flex w-full flex-col items-center justify-end">
          <p className="my-1 text-base font-bold text-white md:text-4xl">
            November 16, 2024
          </p>
          <p className="mt-1 text-center text-sm font-semibold md:mt-2 md:text-2xl">
            Misson starts in:{" "}
          </p>
          <Countdown />
          <div className="mb-4 mt-1 flex items-center justify-center whitespace-normal font-righteous text-sm md:whitespace-nowrap md:text-3xl font-medium">
            <p>Apply to </p>
            <Apply text={"REGISTER"} link={"/form/participant"} />
            <p>or</p>
            <Apply text={"MENTOR"} link={"/form/mentor"} />
            <p>or </p>
            <Apply text={"VOLUNTEER"} link={"/form/volunteer"} />
          </div>
          <Link
            href={"/form/sponsor"}
            className="z-10  font-medium rounded-3xl bg-[#9E0C7A] px-9 py-2 font-righteous text-sm hover:opacity-75 md:text-2xl"
          >
            Sponsor CutieHack!
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={LOGO}
          alt="Cutie Hack Logo"
          className="absolute -top-6 left-0 w-[25%]"
        />
        <div className="absolute right-0 top-0 m-0 flex items-center justify-center gap-3 md:m-5">
          <Image src={star1} alt="star" className="w-1/5 md:w-1/3" />
          <div className="flex flex-col gap-4">
            <Image src={star2} alt="Yellow Star" className="w-1/2 md:w-4/5" />
            <Image src={star3} alt="White Star" className="w-1/2 md:w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
