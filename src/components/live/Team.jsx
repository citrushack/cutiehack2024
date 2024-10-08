import TeamMember from "./TeamMember";
import { DIRECTORS, TEAMS } from "@/data/live/Team";

const Team = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 pb-16 font-righteous`}
    >
      <div className="mt-5 text-cutie-yellow md:text-5xl">Meet the Team</div>
      <div className="mt-10 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Directors</p>
        <div className="mt-3 flex-row gap-x-24">
          {DIRECTORS.map((val, index) => {
            return (
              <TeamMember
                name={val.name}
                team="Director"
                image={val.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Leads</p>
        <div className="mt-3 w-7/12 flex-row flex-wrap justify-center gap-y-12 text-center">
          {TEAMS.map((val, index) => {
            return (
              <TeamMember
                name={val.name}
                team={val.team}
                image={val.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
