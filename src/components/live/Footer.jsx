import Image from "next/image";
import Moon from "@/public/assets/moon.svg";
import Astronaut from "@/public/assets/astronauthappy.svg";
import Flag from "@/public/assets/blueflag.svg";
import LOGO from "@/public/assets/cutiehackLOGO.svg";
import { Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-cutie-blue-300 pt-10">
      <div className="flex items-center justify-center">
        <Image src={Astronaut} alt="astroguy" className="w-[150px]" />
      </div>
      <div className="flex h-[350px] justify-center overflow-hidden">
        <Image src={Moon} alt="Moon Icon" className="z-10 h-[full] w-full" />
      </div>
      <div className="text-white">
        <Link href={"about"}>
          <Mail className="absolute left-[32%] top-[37%] h-14 w-14 -rotate-[28deg]" />
        </Link>
        <Link href={"schedule"}>
          <Linkedin className="absolute bottom-[42%] left-[25%] h-14 w-14 -rotate-[40deg]" />
        </Link>
        <Link href={"tracks"}>
          <Instagram className="absolute bottom-[27.5%] left-[19.5%] h-14 w-14 -rotate-[54deg]" />
        </Link>
        <Image
          src={Flag}
          className="absolute right-[26%] top-[22.5%] z-0 rotate-[23deg]"
        />
        <Image
          src={LOGO}
          className="absolute right-[25%] top-[26%] z-0 w-[7%] rotate-[23deg]"
        />
      </div>
    </div>
  );
};

export default Footer;
