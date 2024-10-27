import Title from "./Title";
import orangeGalaxy from "@/public/assets/orangeGalaxy.svg";
import coolerMaster from "@/public/assets/coolerMaster.svg";
import cocalc from "@/public/assets/cocalc.svg";
import ellipse from "@/public/assets/ellipse.svg";
import blueflag from "@/public/assets/blueflag.svg";
import swirl from "@/public/assets/swirl.svg";
import rightswirl from "@/public/assets/rightswirl.svg";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-cutie-blue-300 px-10 sm:px-[107px]">
      <Title text={"Sponsors"} subtext={"Thank you so much!"} />

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Image
            src={swirl}
            alt="Cover"
            className="top[200px] rotate-220 absolute -left-[130px] h-[1000px] w-[1500px]"
          />
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={coolerMaster}
            alt="coolMaster"
            className="z-15 absolute inset-0 left-[90px] top-[100px] h-[251px] w-[245px] object-fill"
          />
        </div>
        <div className="relative">
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={cocalc}
            alt="cocalc"
            className="z-15 absolute inset-0 left-[90px] top-[100px] h-[251px] w-[245px] object-fill"
          />
        </div>
        <div className="relative">
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={coolerMaster}
            alt="coolMaster"
            className="z-15 absolute inset-0 left-[90px] top-[100px] h-[251px] w-[245px] object-fill"
          />
        </div>
      </div>

      <div className="items-center">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <Image
              src={blueflag}
              alt="flag"
              className="inset-0 z-20 ml-[190px]"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />
          </div>

          <div className="">
            <Image
              src={blueflag}
              alt="flag"
              className="inset-0 z-20 ml-[195px]"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />
          </div>

          <div className="mb-20">
            <Image
              src={blueflag}
              alt="flag"
              className="inset-0 z-20 ml-[190px]"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />

            <div className="relative">
              <Image
                src={rightswirl}
                alt="Cover"
                className="absolute inset-0 -top-[500px] left-[300px] h-[1000px] w-full scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
