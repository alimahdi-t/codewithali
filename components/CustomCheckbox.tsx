"use client";
import { useState } from "react";

interface Props {
  label: string;
  state?: "checked" | "unchecked";
}

const CustomCheckbox = ({ label, state = "unchecked" }: Props) => {
  const [checked, setChecked] = useState(state === "checked");
  const onChange = () => {
    if (checked) {
      setChecked(false);
    } else setChecked(true);
  };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onChange}>
      <div
        className={`w-4 h-4 ${
          checked ? "bg-brand-500" : "bg-gray-200"
        } rounded`}
      >
        {" "}
      </div>
      <span>
        <p className="text-sm font-bold text-gray-800 hover:text-gray-500">
          {label}
        </p>
      </span>
    </div>
  );
};

export default CustomCheckbox;
