"use client";

import { signIn } from "next-auth/react";

const Landing = () => {
  return (
    <div className="flex cursor-pointer justify-evenly bg-[#021334] p-6 font-semibold text-white">
      <div className="p-2">HOME</div>

      <div className="p-2">SCHEDULE</div>

      <div className="p-2">ABOUT US</div>

      <div
        className="border-white p-2 font-goodtimes shadow-custom-white"
        onClick={() => signIn("google")}
      >
        LOGIN
      </div>
    </div>
  );
};

export default Landing;
