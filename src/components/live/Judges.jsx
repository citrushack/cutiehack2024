import Profile from "./leads/Profile";
import Title from "./Title";
import { JUDGES } from "@/data/live/Judges";
const Judges = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-cutie-blue-200 from-[70%] to-cutie-blue-300 py-10">
      <Title text={"Judges"} />
      <div className="mt-[8vh] flex w-full flex-wrap justify-center gap-10 py-2 md:w-7/12">
        {JUDGES.map((judge, index) => (
          <div key={index}>
            <Profile name={judge.name} image={judge.image} team={judge.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
