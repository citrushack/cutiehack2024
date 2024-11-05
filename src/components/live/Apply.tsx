import React from "react";
import Link from "next/link";

const Apply = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="font-righteous text-cutie-magenta flex w-full items-center p-1 px-4 text-lg font-bold hover:opacity-75 md:text-3xl"
    >
      {text}
    </Link>
  );
};

export default Apply;
