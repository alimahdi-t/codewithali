import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  label: string;
}

const FilterToggle = ({ label }: Props) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg flex items-center justify-between p-4">
      <Label
        htmlFor="airplane-mode"
        className="font-semibold text-sm text-slate-900"
      >
        {label}
      </Label>
      <Switch id="airplane-mode" />
    </div>
  );
};

export default FilterToggle;
