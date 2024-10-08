import Header from "./Header";
import { COMMITTEES } from "@/data/live/Team";

const Committees = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-cutie-blue-200 py-10 font-righteous text-white">
      <Header title={"Committees"} />
      <div className="mt-3 flex w-full flex-row flex-wrap justify-center gap-11 text-center">
        {Object.keys(COMMITTEES).map((val, index) => (
          <div className="flex flex-col" key={index}>
            <div className="mb-3 text-2xl">{val}</div>
            {COMMITTEES[val].map((member, index) => (
              <div key={index} className="text-lg">
                {member}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
