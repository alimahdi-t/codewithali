import { CourseLevels } from "@/constants";

interface CourseLevelProps {
  value: string;
}

const CourseLevel: React.FC<CourseLevelProps> = ({ value }) => {
  const level = CourseLevels.find((l) => l.value === value);

  if (!level) return null;

  return (
    <span
      className={`px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap ${getBadgeColor(
        value,
      )}`}
    >
      {level.label}
    </span>
  );
};

export default CourseLevel;

const getBadgeColor = (level: string) => {
  switch (level) {
    case "BEGINNER":
      return "text-action-success bg-action-light-success dark:bg-action-success/50";
    case "ADVANCED":
      return "text-action-warning bg-action-light-warning dark:bg-action-warning/50";
    case "EXPERT":
      return "text-action-error bg-action-light-error dark:bg-action-error/50";
    default:
      return "text-gray-500";
  }
};