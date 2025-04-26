"use client";
import { BeatLoader } from "react-spinners";
import { useTheme } from "@/context/ThemeProvider";

const RootLoading = () => {
  const { mode } = useTheme();
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BeatLoader size={24} color={mode === "dark" ? "white" : "black"} />
    </div>
  );
};

export default RootLoading;