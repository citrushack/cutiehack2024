<<<<<<< HEAD
import ProtectedPage from "@/components/ProtectedPage";
import Join from "@/components/user/join/Join";
=======
import ProtectedPage from "@/components/protected";
import Join from "@/components/user/join";
>>>>>>> template/dev

type props = {
  params: { teamID: string };
};

const Page = ({ params }: props) => {
  return (
    <ProtectedPage
      title="User | Join"
      restrictions={{
        participants: [1],
      }}
    >
      <Join params={params} />
    </ProtectedPage>
  );
};

export default Page;
