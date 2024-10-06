"use client";

import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Countdown from "./Countdown";
import Apply from "./Apply";
import LOGO from "@/public/assets/cutiehackLOGO.svg";
import star1 from "@/public/assets/star.svg";
import star2 from "@/public/assets/staryellow.svg";
import star3 from "@/public/assets/starwhite.svg";

const Landing = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-full flex-col bg-cutie-blue-300 text-white">
      <div className="flex items-start justify-between">
        <Image src={LOGO} alt="Cutie Hack Logo" className="w-1/4" />
        <div className="m-0 flex h-fit items-center justify-center gap-3 md:m-5">
          <Image src={star1} alt="star" className="w-1/5 md:w-1/3" />
          <div className="flex flex-col gap-4">
            <Image src={star2} alt="Yellow Star" className="w-1/2 md:w-4/5" />
            <Image src={star3} alt="White Star" className="w-1/2 md:w-4/5" />
          </div>
        </div>
      </div>
      <div className="-mt-4 flex w-full items-end justify-center md:-mt-[18vh]">
        <div className="flex w-full flex-col items-center justify-end">
          <div className="my-1 text-base font-bold text-white md:text-4xl">
            November 16, 2024
          </div>
          <Countdown />

          <div className="mb-4 mt-1 flex w-1/3 flex-col items-center gap-5 md:w-1/3 md:flex-row md:justify-between">
            <Apply text={"Register"} link={"/form/participant"} />
            <Apply text={"Mentor"} link={"/form/mentor"} />
            <Apply text={"Volunteer"} link={"/form/volunteer"} />
          </div>
          <div className="my-5 text-xl font-semibold">Ready to Hack?</div>
          {session ? (
            Object.keys(session.user.roles).includes("participants") && (
              <div className="w-fit">
                <Apply text={"Hacker Portal"} link={"/user"} />
              </div>
            )
          ) : (
            <div
              className="bg-blue-300 px-4 py-1"
              onClick={() => SignIn("google")}
            >
              Login
            </div>
          )}

          {/* <div className="flex items-center text-sm font-bold text-white md:text-2xl bg-cutie-blue-200 px-4 p-1 rounded-lg border-4 border-cutie-violet">
             Register
            </div>
            <div className="flex items-center text-sm font-bold text-white md:text-2xl bg-cutie-blue-200 px-4 p-1 rounded-lg border-4 border-cutie-violet">
              Mentor
            </div>
            <div className="flex items-center text-sm font-bold text-white md:text-2xl bg-cutie-blue-200 px-4 p-1 rounded-lg border-4 border-cutie-violet">
              Volunteer
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
