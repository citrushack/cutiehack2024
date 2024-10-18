import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-cutie-customPurple text-3xl font-bold">Loading...</p>
      <Loader className="text-cutie-cutusomPurple2 animate-spin" />
    </div>
  );
};

export default Loading;
