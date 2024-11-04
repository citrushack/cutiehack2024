import { useState } from "react";

const Toolbar = ({ onFilterChange }) => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex items-center justify-end">
      <div className="flex rounded-md border-2 border-cutie-violet bg-cutie-violet">
        <button
          onClick={() => {
            setSelected("all");
            onFilterChange("all");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "all"
              ? "rounded bg-cutie-blue-200 text-white"
              : "bg-cutie-violet text-black"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => {
            setSelected("hackweek");
            onFilterChange("hackweek");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackweek"
              ? "rounded bg-cutie-blue-200 text-white"
              : "bg-cutie-violet text-black"
          }`}
        >
          HackWeek
        </button>
        <button
          onClick={() => {
            setSelected("hackathon");
            onFilterChange("hackathon");
          }}
          className={`m-0.5 px-3 py-1 ${
            selected === "hackathon"
              ? "rounded bg-cutie-blue-200 text-white"
              : "bg-cutie-violet text-black"
          }`}
        >
          Hackathon
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
