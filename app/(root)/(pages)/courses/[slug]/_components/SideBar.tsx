import CompletionProgress from "@/app/(root)/(pages)/courses/[slug]/_components/CompletionProgress";
import { Group } from "lucide-react";

const SideBar = () => {
  return (
    <div className="w-96 flex flex-col gap-4">
      {/*<InstructorInfo />*/}
      <CompletionProgress progress={28} />
      <Group />
    </div>
  );
};

export default SideBar;