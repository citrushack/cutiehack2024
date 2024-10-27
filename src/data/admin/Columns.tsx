// import { COLORS } from "../Tags";
import Checkbox from "@/components/Checkbox";
import { Table, Row, CellContext } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

export const generateSelect = <TData extends object>() => ({
  id: "select",
  header: ({ table }: { table: Table<TData> }) => (
    <Checkbox
      id="select-all"
      checked={table.getIsAllRowsSelected()}
      onClick={table.getToggleAllRowsSelectedHandler}
    />
  ),
  cell: ({ row }: { row: Row<TData> }) => (
    <Checkbox
      id="select-one"
      checked={row.getIsSelected()}
      onClick={() => row.getToggleSelectedHandler()}
    />
  ),
});

export const generateAffiliation = <TData extends Record<string, string>>(
  affiliations: Record<string, string>,
) => ({
  accessorKey: "affiliation",
  header: "Affiliation",
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Badge>{affiliations[getValue().toLowerCase()]}</Badge>
  ),
});

export const generateStatus = <TData extends object>(
  statuses: Record<string, string>,
) => ({
  accessorKey: "status",
  header: "Status",
  enableColumnFilter: true,
  filterFn: (row: any, col: any, filter: string[]) => {
    const status = row.getValue(col);
    return filter.includes(status);
  },
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Badge>{statuses[getValue()]}</Badge>
  ),
});
export const generateTiers = <TData extends Record<string, string>>(
  tiers: Record<string, string>,
) => ({
  accessorKey: "tier",
  header: "Tier",
  cell: ({ getValue }: CellContext<TData, string>) => (
    <Badge>{tiers[getValue().toLowerCase()]}</Badge>
  ),
});
