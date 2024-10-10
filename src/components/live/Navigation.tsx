"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { items } from "@/data/live/Navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navigation = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-cutie-blue-300 p-5 font-semibold text-white shadow-2xl md:shadow-none">
      {/* Desktop Nav */}
      <div className="hidden w-full justify-evenly md:flex">
        {items.map((item, index) => (
          <Link key={index} href={item.link} className="p-1">
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

      {/* Mobile Nav */}
      <div className="flex w-full items-center justify-end md:hidden">
        <Menu
          className="cursor-pointer text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-16 flex w-full flex-col items-center bg-cutie-blue-300/70 p-5">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="w-full py-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {session ? (
            Object.keys(session.user.roles).includes("participants") && (
              <Link
                href={"/user"}
                className="border-custom-white mt-2 w-fit border p-1 px-2 text-center shadow-custom-white"
                onClick={() => setIsOpen(false)}
              >
                HACKER PORTAL
              </Link>
            )
          ) : (
            <div
              onClick={() => {
                signIn("google");
                setIsOpen(false);
              }}
              className="border-custom-white mt-2 w-full border p-1 px-2 text-center shadow-custom-white"
            >
              LOGIN
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;
