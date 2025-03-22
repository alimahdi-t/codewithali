"use client";
import { BeatLoader } from "react-spinners";

const RootLoading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <BeatLoader size={24} />
    </div>
  );
};

export default RootLoading;