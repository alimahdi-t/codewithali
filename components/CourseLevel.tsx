import { CourseLevels } from "@/constants";
import { Badge } from "lucide-react";

interface CourseLevelProps {
  value: string;
}

const CourseLevel: React.FC<CourseLevelProps> = ({ value }) => {
  const level = CourseLevels.find((l) => l.value === value);

  if (!level) return null;

  return (
    <span className={`px-4 p-0.5 rounded text-xs] ${getBadgeColor(value)}`}>
      {level.label}
    </span>
  );
};

export default CourseLevel;

const getBadgeColor = (level: string) => {
  switch (level) {
    case "BEGINNER":
      return "text-green-500";
    case "ADVANCED":
      return "text-orange-500";
    case "EXPERT":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};
