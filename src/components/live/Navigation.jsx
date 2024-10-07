"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { items } from "@/data/live/Navigation";

const Navigation = () => {
  const { data: session } = useSession();
  return (
    <div className="flex cursor-pointer justify-evenly bg-[#021334] p-5 font-semibold text-white">
      {items.map((item, index) => (
        <Link key={index} href={item.link} className="flex p-1">
          {item.name}
        </Link>
      ))}
      {session ? (
        Object.keys(session.user.roles).includes("participants") && (
          <Link
            href={"/user"}
            className="border-custom-white border p-1 px-2 shadow-custom-white"
          >
            HACKER PORTAL
          </Link>
        )
      ) : (
        <div
          onClick={() => signIn("google")}
          className="border-custom-white border p-1 px-2 shadow-custom-white"
        >
          LOGIN
        </div>
      )}
    </div>
  );
};

export default Navigation;
