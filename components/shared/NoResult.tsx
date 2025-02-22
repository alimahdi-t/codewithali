import { ReactNode } from "react";

const NoResult = ({
  hiddenCondition,
  label,
  icon,
}: {
  hiddenCondition: boolean;
  label: string;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={`w-full flex justify-center items-center flex-col max-w-sm mx-auto${
        hiddenCondition ? " hidden" : ""
      }`}
    >
      {icon}
      <p className="w-full font-semibold text-gray-700 text-sm sm:text-base text-center">
        {label}
      </p>
    </div>
  );
};

export default NoResult;
