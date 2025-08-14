import { BeatLoader } from "react-spinners";
import { Button } from "@/components/ui/button";

interface Props {
  pending: boolean;
  label: string;
}
export const SubmitButton = ({ pending, label }: Props) => {
  return (
    <Button disabled={pending} type="submit" className="w-full cursor-pointer">
      {pending ? <BeatLoader color={"#fff"} size={10} /> : label}
    </Button>
  );
};