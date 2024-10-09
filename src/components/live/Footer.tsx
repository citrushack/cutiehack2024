import Image from "next/image";
import Moon from "@/public/assets/moon.svg";
import Astronaut from "@/public/assets/astronauthappy.svg";
import Flag from "@/public/assets/blueflag.svg";
import LOGO from "@/public/assets/cutiehackLOGO.svg";
import { Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative -mt-1 bg-cutie-blue-300 pt-10">
      <div className="flex items-center justify-center">
        <Image
          src={Astronaut}
          alt="astroguy"
          className="z-20 animate-jiggle-3s md:w-[150px]"
        />
      </div>
      <div className="flex justify-center overflow-hidden md:h-[350px]">
        <Image src={Moon} alt="Moon Icon" className="z-10 h-full w-full" />
      </div>
      <div className="text-white">
        <Link href={"about"}>
          <Mail className="absolute left-[20%] top-[38%] h-14 w-14 -rotate-[28deg] md:left-[32%] md:top-[37%]" />
        </Link>
        <Link href={"schedule"}>
          <Linkedin className="absolute bottom-[32%] left-[2%] h-14 w-14 -rotate-[40deg] md:bottom-[42%] md:left-[25%]" />
        </Link>
        <Link href={"tracks"}>
          <Instagram className="absolute right-[14%] top-[40%] h-14 w-14 rotate-[30deg] md:-rotate-[50deg] md:top-[61%] md:left-[20%]" />
        </Link>
        <Image
          src={Flag}
          alt="Flag"
          className="absolute right-[26%] top-[22.5%] z-0 hidden rotate-[23deg] md:block"
        />
        <Image
          src={LOGO}
          alt="CutieHack Logo"
          className="absolute right-[25%] top-[26%] z-0 hidden w-[7%] rotate-[23deg] md:block"
        />
      </div>
    </div>
  );
};

export default Footer;
