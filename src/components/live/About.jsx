import Image from "next/image";
import Bubble from "@/public/assets/rocketbubble.svg";
import Rocket from "@/public/assets/rocketship.svg";
import Star from "@/public/assets/star.svg";
import UFO from "@/public/assets/ufo.svg";
import Satellite from "@/public/assets/satellite.svg";
import Edge from "@/public/assets/edgebubble.svg";

const About = () => {
  return (
    <div className="relative flex items-center justify-center bg-cutie-blue-300 font-righteous">
      <Image src={Bubble} alt="Rocket Bubble" className="inset-0 z-10 w-full" />
      <div className="absolute z-10 w-8/12 rounded-xl border-8 border-cutie-blue-200 bg-cutie-violet p-4 text-center md:w-4/12 md:p-8">
        <div className="text-base font-semibold text-cutie-yellow md:text-3xl">
          What is CutieHack?
        </div>
        <p className="mt-2 text-xs text-cutie-blue-200 md:text-lg">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </p>
      </div>
      <div className="w-2/5">
        <Image
          src={Rocket}
          alt="RocketShip"
          className="absolute -top-[2%] left-[1%] z-10 w-[30%]"
        />
        <Image
          src={Star}
          alt="Star"
          className="absolute right-[12%] top-[15%] z-10 w-[12%] md:right-[29%] md:top-[34%] md:w-[9%]"
        />
        <Image
          src={UFO}
          alt="UFO"
          className="absolute bottom-[24%] left-[20%] z-10 hidden w-[11%] rotate-[24deg] md:block"
        />
        <Image
          src={Satellite}
          alt="Satellite"
          className="absolute right-[2%] top-[23%] z-10 hidden w-[20%] md:block"
        />
        <Image
          src={Edge}
          alt="Rocket Bubble"
          className="absolute -bottom-[10%] right-[0%] z-0 w-full"
        />
      </div>
    </div>
  );
};

export default About;
