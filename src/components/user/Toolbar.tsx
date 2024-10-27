import { InputWithClear } from "@/components/ui/input";

interface props {
  setSearch: (value: any[]) => void;
  data: any[];
}

const Toolbar = ({ data, setSearch }: props) => {
  const onChange = (value: string) => {
    const filter = data.filter(
      ({ text, techs }) =>
        text.toLowerCase().includes(value.toLowerCase()) ||
        techs.some((tech: string) =>
          tech.toLowerCase().includes(value.toLowerCase()),
        ),
    );
    setSearch(filter);
  };

  return (
    <InputWithClear
      id="search"
      placeholder="Search"
      onClear={() => onChange("")}
      onChange={(e) => onChange(e.target.value)}
      maxLength={100}
    />
  );
};

export default Toolbar;
