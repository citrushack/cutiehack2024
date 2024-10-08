import React from "react";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex w-full items-center p-1 px-4 font-righteous text-base font-bold text-cutie-magenta underline hover:opacity-75 md:text-3xl"
    >
      {text}
    </Link>
  );
};

export default Apply;
