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
<<<<<<< HEAD
    <div
      className="flex w-fit items-center hover:cursor-pointer text-sm font-normal font-poppins"
      onClick={onClick}
      data-cy="checkbox"
    >
      <Check
        checked={toggle}
        // onChange={onClick}
        className={`mr-2 h-4 w-4 rounded-sm ${
          toggle
            ? `${color ? color : "bg-hackathon-blue-100"}`
            : "bg-hackathon-gray-100"
        }`}
        data-cy="checkbox-bg"
      />
      {text && (
        <p className="my-0 pt-0" data-cy="checkbox-text">
          {text}
        </p>
      )}
=======
    <div className="flex items-center gap-2">
      <Check id={id} checked={checked} onClick={onClick} />
      {children && <Label htmlFor={id}>{children}</Label>}
>>>>>>> e123a74c77e92df95bc26eb06652f64e2dabafa9
    </div>
  );
};

export default Checkbox;
