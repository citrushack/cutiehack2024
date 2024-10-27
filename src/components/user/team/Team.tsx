import Title from "@/components/admin/Title";
import Details from "./Details";
import NewTeam from "./NewTeam";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "@/actions/join";

const Team = async () => {
  const session = await getSession();

  if (!session?.user.team) return <></>;

  const team = session.user.team;

  const details = await fetchTeam(team);

  return (
    <div className="flex h-full flex-col gap-3 py-4">
      <Title title="Team" />
      {team === "" ? <NewTeam /> : <Details team={details} />}
    </div>
  );
};

export default Team;
