import { Checkbox as Check } from "./ui/checkbox";
import { Label } from "./ui/label";

type checkbox = {
  id: string;
  checked: boolean;
  children?: string;
  onClick?: () => void;
};

const Checkbox = ({ id, checked, onClick, children }: checkbox) => {
  return (
    <div className="flex items-center gap-2">
      <Check id={id} checked={checked} onClick={onClick} />
      {children && <Label htmlFor="terms">{children}</Label>}
    </div>
  );
};

export default Checkbox;
