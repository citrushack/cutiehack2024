import React from "react";
import Link from "next/link";

const Apply = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex w-full justify-center rounded-lg border-4 border-cutie-violet bg-cutie-blue-200 p-1 px-4 text-sm font-bold text-white hover:border-opacity-75 hover:bg-opacity-75 md:text-2xl"
    >
      {text}
    </Link>
  );
};

export default Apply;
