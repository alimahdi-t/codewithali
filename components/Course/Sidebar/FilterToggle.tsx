"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  label: string;
  filterParam: string;
}

const FilterToggle = ({ label, filterParam }: Props) => {
  const router = useRouter(); // This hook is used for navigating to different routes.

  // Retrieve the initial state of the switch based on the query parameter
  const [checked, setChecked] = useState<boolean>(
    !!useSearchParams().get(filterParam), // Check if the `filterParam` exists in the URL query. If it does, set `checked` to `true`.
  );

  // Handle the toggle switch and update query parameters
  const handleToggle = (isChecked: boolean) => {
    setChecked(isChecked); // Update the local state for the switch.

    // Retrieve the current URL query parameters
    const params = new URLSearchParams(window.location.search);

    if (isChecked) {
      // If the switch is turned on, set the `filterParam` in the query with a value of 'true'.
      params.set(filterParam, "true");
    } else {
      // If the switch is turned off, remove the `filterParam` from the query.
      params.delete(filterParam);
    }

    // Navigate to the updated URL with the new query string
    router.push(
      "/courses" + (params.toString() ? "?" + params.toString() : ""), // Conditionally append the query string only if it exists.
    );
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg flex items-center justify-between p-4">
      <Label
        htmlFor={`switch-${filterParam}`}
        className="font-semibold text-sm text-slate-900"
      >
        {label}
      </Label>
      <Switch
        id={`switch-${filterParam}`}
        onClick={() => handleToggle(!checked)}
        checked={checked} // Control the switch state using the `checked` state variable.
      />
    </div>
  );
};

export default FilterToggle;
