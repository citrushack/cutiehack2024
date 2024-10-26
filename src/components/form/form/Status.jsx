import { Button } from "@/components/ui/button";
import Tag from "../../admin/Tag";
import { COLORS } from "@/data/Tags";

const Status = ({ object, statuses, setState }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        Hello <b>{object.name}</b>, your status is currently
      </p>
      <Tag
        color={COLORS[object.roles[object.form]]}
        text={statuses[object.roles[object.form]]}
        classes="mb-2"
      />
      <p data-cy="status-confirmation" className="text-center">
        You have already filled out the form. If you wish to change any
        information, please fill out the form again. Note that your status will
        change until approved by an admin.
      </p>
      <p data-cy="status-incorrect" className="text-center">
        If you believe that your status is incorrect, please reach out to us
        immediately.
      </p>
      <Button onClick={() => setState(1)}>Apply</Button>
    </div>
  );
};

export default Status;
