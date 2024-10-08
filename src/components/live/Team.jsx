import Image from "next/image";
import TeamBorder from "@/public/assets/window.svg"
import { DIRECTORS, TEAMS, COMMITTEES } from "@/data/live/Team"


const Team = () => {
  return (
    <div className={`flex flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 ${FONT.className} pb-16`}>
      <div className="mt-5 text-cutie-yellow md:text-5xl">Meet the Team</div>
      <div className="mt-10 text-white flex flex-col items-center justify-center">
        <p className="text-cutie-tan md:text-3xl mb-5">Directors</p>
        <div className="flex-row mt-3 gap-x-24">
          {DIRECTORS.map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col">
                <Image src={TeamBorder} key={index} alt="Team Member" className="mb-3" />
                <p className="text-lg">{val.name}</p>
                <p className="text-md">Director</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-20 text-white flex flex-col items-center justify-center">
        <p className="text-cutie-tan md:text-3xl mb-5">Leads</p>
        <div className="flex-row mt-3 flex-wrap w-7/12 gap-y-12 text-center justify-center">
          {TEAMS.map((val, index) => {
            return (
              <div className="justify-center items-center flex flex-col w-56">
                <div className="relative w-32 h-32 mb-3">
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${TeamBorder.src})` }}
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      src={val.image}
                      alt={`${val.name}'s Image`}
                      className="rounded-full object-cover w-4/5 h-4/5" // Adjust size as needed
                    />
                  </div>
                </div>
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
          {Object.keys(COMMITTEES).map((val, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="text-2xl mb-3">{val}</div>
                {COMMITTEES[val].map((v, i) => {
                  return <div key={i} className="text-lg">{v}</div>
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Team;
