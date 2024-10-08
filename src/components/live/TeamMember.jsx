import Image from "next/image";
import TeamBorder from "@/public/assets/window.svg";

const TeamMember = ({ name, team, image }) => {
  return (
    <div className="flex w-56 flex-col items-center justify-center">
      <div className="relative mb-3 h-32 w-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${TeamBorder.src})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image}
            alt={`${name}'s Image`}
            className="h-4/5 w-4/5 rounded-full object-cover" // Adjust size as needed
          />
        </div>
      </div>
      <p className="text-xl">{name}</p>
      <p className="text-md">{team}</p>
    </div>
  );
};

export default TeamMember;
