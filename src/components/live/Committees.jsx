import { COMMITTEES } from "@/data/live/Team";

const Committees = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-cutie-blue-200 pb-16 font-righteous`}
    >
      <div className="mt-5 flex flex-col items-center justify-center text-white">
        <p className="mb-5 text-cutie-tan md:text-3xl">Committees</p>
        <div className="mt-3 flex w-full flex-row flex-wrap justify-center gap-x-16 text-center">
          {Object.keys(COMMITTEES).map((val, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="mb-3 text-2xl">{val}</div>
                {COMMITTEES[val].map((v, i) => {
                  return (
                    <div key={i} className="text-lg">
                      {v}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Committees;
