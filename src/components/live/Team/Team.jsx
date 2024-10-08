import Profile from "./Profile";
import Header from "./Header";
import { DIRECTORS, TEAMS } from "@/data/live/Team";

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 py-10 font-righteous">
      <div className="mt-5 text-cutie-yellow md:text-5xl">Meet the Team</div>
      <div className="mt-10 flex flex-col items-center justify-center gap-10 text-white">
        <Header title={"Directors"} />
        <div className="mx-10 flex w-11/12 justify-between">
          {DIRECTORS.map((director, index) => (
            <Profile
              name={director.name}
              team="Director"
              image={director.image}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-10 text-white">
        <Header title={"Leads"} />
        <div className="mt-3 flex w-11/12 flex-wrap justify-center gap-y-10 text-center md:w-9/12">
          {TEAMS.map((member, index) => (
            <div className="w-1/2 p-1 md:w-1/4">
              <Profile
                name={member.name}
                team={member.team}
                image={member.image}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
