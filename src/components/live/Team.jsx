import Image from "next/image";
import TeamBorder from "@/public/assets/window.svg"
import YellowStar from "@/public/assets/star.svg"
import YellowDiamond from "@/public/assets/staryellow.svg"
import WhiteDiamond from "@/public/assets/starwhite.svg"
import { TEAMS as TeamMembers, COMMITTEES as Committees } from "@/data/live/Team"
import { Righteous } from "next/font/google";

const FONT = Righteous({
  weight: "400",
  subsets: ["latin"]
})

const Team = () => {
  return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 ${FONT.className} pb-16`}>
      <div className="mt-5 text-cutie-yellow md:text-5xl">Meet the Team</div>
      <div className="mt-10 text-white flex flex-col items-center justify-center">
        <p className="text-cutie-tan md:text-3xl mb-5">Directors</p>
        <div className="w-2/5 relative left-48 -top-10">
          <Image src={YellowStar} alt="Yellow Star" className="absolute w-10" />
          <Image src={YellowDiamond} alt="Yellow Diamond" className="absolute left-12 -top-8 w-6" />
          <Image src={WhiteDiamond} alt="White Diamond" className="absolute left-12 top-10 w-6" />
        </div>
        <div className="flex-row mt-3 gap-x-24">
          {TeamMembers.filter(val => val.team == "Director").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-lg">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}
        </div>
        <div className="w-2/5 relative -left-48 -top-8">
          <Image src={YellowStar} alt="Yellow Star" className="absolute w-10" />
          <Image src={YellowDiamond} alt="Yellow Diamond" className="absolute left-12 -top-8 w-6" />
          <Image src={WhiteDiamond} alt="White Diamond" className="absolute left-12 top-10 w-6" />
        </div>
      </div>
      <div className="mt-20 text-white flex flex-col items-center justify-center">
        <p className="text-cutie-tan md:text-3xl mb-5">Leads</p>
        <div className="flex-row mt-3 flex-wrap w-7/12 gap-y-12 text-center justify-center">
          {TeamMembers.filter(val => val.team == "Operations").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-xl">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}
          {TeamMembers.filter(val => val.team == "Marketing").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56 text-center">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-xl">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}
          {TeamMembers.filter(val => val.team == "Sponsorship").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56 text-center">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-xl">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}
          {TeamMembers.filter(val => val.team == "UI/UX").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56 text-center">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-xl">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}

          {TeamMembers.filter(val => val.team == "Software").map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56 text-center">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-xl">{val.name}</p>
                <p className="text-md">{val.team}</p>
              </div>
            )
          })}

        </div>
      </div>
      <div className="mt-20 text-white flex flex-col items-center justify-center">
        <p className="text-cutie-tan md:text-3xl mb-5">Committees</p>
        <div className="flex flex-row mt-3 flex-wrap w-full gap-x-16 text-center justify-center">
          <div>
            <div className="text-xl mb-2">Operations</div>
            {Committees.filter(val => val.team == "Operations").map((val, index) => {
              return (
                <div className="">
                  {val.name}
                </div>
              )
            })}
          </div>
          <div>
            <div className="text-xl mb-2">Sponsorship</div>
            {Committees.filter(val => val.team == "Sponsorship").map((val, index) => {
              return (
                <div className="">
                  {val.name}
                </div>
              )
            })}
          </div>
          <div>
            <div className="text-xl mb-2">Marketing</div>
            {Committees.filter(val => val.team == "Marketing").map((val, index) => {
              return (
                <div className="">
                  {val.name}
                </div>
              )
            })}
          </div>
          <div>
            <div className="text-xl mb-2">Software</div>
            {Committees.filter(val => val.team == "Software").map((val, index) => {
              return (
                <div className="">
                  {val.name}
                </div>
              )
            })}
          </div>
          <div>
            <div className="text-xl mb-2">UI/UX</div>
            {Committees.filter(val => val.team == "UI/UX").map((val, index) => {
              return (
                <div className="">
                  {val.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Team;
