import { generateAffiliation, generateSelect, generateStatus } from "./Columns";
import { AFFILIATIONS } from "../form/Information";
import { ICONS } from "./Icons";
import { STATUSES } from "../Statuses";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Tags } from "@/types/dashboard";

type Admin = {
  name: string;
  email: string;
  affiliation: string;
  discord: string;
  major: string;
  grade: string;
  gender: string;
  shirt: string;
};

type dropdownProps = {
  object: Record<string, string[]>;
};

export const TAGS: Tags[] = [
  {
    text: "accept",
    value: 1,
  },
  {
    text: "reject",
    value: -1,
  },
];

export const COLUMNS: ColumnDef<Admin, string>[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Admin, Admin["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Admin, Admin["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    meta: { width: "w-3/12" },
    enableColumnFilter: true,
    filterFn: "includesString",
    cell: (props: CellContext<Admin, Admin["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateAffiliation(AFFILIATIONS),
  generateStatus(STATUSES),
];

const attributes: string[] = [
  "email",
  "phone",
  "age",
  "gender",
  "school",
  "major",
  "grade",
  "shirt",
  "diet",
  "restriction",
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-11/12 grid-cols-3">
        {attributes.map((attribute, index) => (
          <div key={index} className="my-1 flex px-1 text-sm">
            {ICONS[attribute]}
            {Array.isArray(object[attribute])
              ? object[attribute].length !== 0
                ? object[attribute].join(",")
                : "N/A"
              : object[attribute]}
          </div>
        ))}
      </div>
    </div>
  );
};