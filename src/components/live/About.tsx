import Image from "next/image";
import Bubble from "@/public/assets/rocketbubble.svg";
import SVGS from "./SVGS";

const About = () => {
  return (
    <div className="relative -mt-3 flex items-center justify-center bg-cutie-blue-300 font-righteous">
      <Image
        src={Bubble}
        alt="Rocket Bubble"
        className="inset-0 z-10 min-w-full"
      />
      <div className="absolute z-10 w-8/12 rounded-xl border-8 border-cutie-blue-200 bg-cutie-violet p-4 text-center md:w-4/12 md:p-8">
        <div className="text-base font-semibold text-cutie-yellow md:text-3xl">
          What is CutieHack?
        </div>
        <p className="mt-2 text-xs text-cutie-blue-200 md:text-lg font-medium">
          Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by
          students at University of California, Riverside where hackers are
          challenged to create a cool project within the time frame to demo in
          order to win awesome prizes and participate in workshops, fun games,
          and networking.
        </p>
      </div>
      <SVGS />
    </div>
  );
};

export default About;
