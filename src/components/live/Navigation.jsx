"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import items from "@/data/Navigator";

function Hero() {
  return (
    <div className="flex cursor-pointer justify-evenly bg-[#021334] p-6 font-semibold text-white">
      {items.map((item, index) =>
        item.name === "LOGIN" ? (
          <div
            key={item.name}
            onClick={() => signIn("google")}
            className="border-custom-white border p-1 shadow-custom-white"
          >
            {item.name}
          </div>
        ) : (
          <Link key={index} href={item.link} className="flex p-1">
            {item.name}
          </Link>
        ),
      )}
    </div>
  );
}

export default Hero;
