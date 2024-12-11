"use client";
import { useState } from "react";

interface Props {
  label: string;
  state?: "checked" | "unchecked";
  onChange?: (checked: boolean) => void; // Add onChange as a prop
}

const CustomCheckbox = ({ label, state = "unchecked", onChange }: Props) => {
  const [checked, setChecked] = useState(state === "checked");

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked); // Call the onChange prop with the new state
    }
  };

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
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
