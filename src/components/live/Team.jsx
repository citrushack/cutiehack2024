import Image from "next/image";
import TeamBorder from "@/public/assets/window.svg";
import YellowStar from "@/public/assets/star.svg";
import YellowDiamond from "@/public/assets/staryellow.svg";
import WhiteDiamond from "@/public/assets/starwhite.svg";
import {
  TEAMS as TeamMembers,
  COMMITTEES as Committees,
} from "@/data/live/Team";
import { Righteous } from "next/font/google";

const FONT = Righteous({
  weight: "400",
  subsets: ["latin"],
});

const Team = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 ${FONT.className} pb-16`}
    >
      <div className="mt-5 text-cutie-yellow md:text-5xl">Meet the Team</div>
      <div className="mt-10 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Directors</p>
        <div className="relative -top-10 left-48 w-2/5">
          <Image src={YellowStar} alt="Yellow Star" className="absolute w-10" />
          <Image
            src={YellowDiamond}
            alt="Yellow Diamond"
            className="absolute -top-8 left-12 w-6"
          />
          <Image
            src={WhiteDiamond}
            alt="White Diamond"
            className="absolute left-12 top-10 w-6"
          />
        </div>
        <div className="mt-3 flex-row gap-x-24">
          {TeamMembers.filter((val) => val.team == "Director").map(
            (val, index) => {
              return (
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-lg">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}
        </div>
        <div className="relative -left-48 -top-8 w-2/5">
          <Image src={YellowStar} alt="Yellow Star" className="absolute w-10" />
          <Image
            src={YellowDiamond}
            alt="Yellow Diamond"
            className="absolute -top-8 left-12 w-6"
          />
          <Image
            src={WhiteDiamond}
            alt="White Diamond"
            className="absolute left-12 top-10 w-6"
          />
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Leads</p>
        <div className="mt-3 w-7/12 flex-row flex-wrap justify-center gap-y-12 text-center">
          {TeamMembers.filter((val) => val.team == "Operations").map(
            (val, index) => {
              return (
                <div className="flex w-56 flex-col items-center justify-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-xl">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}
          {TeamMembers.filter((val) => val.team == "Marketing").map(
            (val, index) => {
              return (
                <div className="flex w-56 flex-col items-center justify-center text-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-xl">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}
          {TeamMembers.filter((val) => val.team == "Sponsorship").map(
            (val, index) => {
              return (
                <div className="flex w-56 flex-col items-center justify-center text-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-xl">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}
          {TeamMembers.filter((val) => val.team == "UI/UX").map(
            (val, index) => {
              return (
                <div className="flex w-56 flex-col items-center justify-center text-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-xl">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}

          {TeamMembers.filter((val) => val.team == "Software").map(
            (val, index) => {
              return (
                <div className="flex w-56 flex-col items-center justify-center text-center">
                  <Image
                    src={TeamBorder}
                    key={index}
                    alt="Team Member"
                    className="mb-3"
                  />
                  <p className="text-xl">{val.name}</p>
                  <p className="text-md">{val.team}</p>
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Committees</p>
        <div className="mt-3 flex w-full flex-row flex-wrap justify-center gap-x-16 text-center">
          <div>
            <div className="mb-2 text-xl">Operations</div>
            {Committees.filter((val) => val.team == "Operations").map(
              (val, index) => {
                return <div className="">{val.name}</div>;
              },
            )}
          </div>
          <div>
            <div className="mb-2 text-xl">Sponsorship</div>
            {Committees.filter((val) => val.team == "Sponsorship").map(
              (val, index) => {
                return <div className="">{val.name}</div>;
              },
            )}
          </div>
          <div>
            <div className="mb-2 text-xl">Marketing</div>
            {Committees.filter((val) => val.team == "Marketing").map(
              (val, index) => {
                return <div className="">{val.name}</div>;
              },
            )}
          </div>
          <div>
            <div className="mb-2 text-xl">Software</div>
            {Committees.filter((val) => val.team == "Software").map(
              (val, index) => {
                return <div className="">{val.name}</div>;
              },
            )}
          </div>
          <div>
            <div className="mb-2 text-xl">UI/UX</div>
            {Committees.filter((val) => val.team == "UI/UX").map(
              (val, index) => {
                return <div className="">{val.name}</div>;
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
