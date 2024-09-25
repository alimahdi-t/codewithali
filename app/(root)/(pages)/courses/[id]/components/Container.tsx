import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow border border-gray-100 p-4">
      {children}
    </div>
  );
};

export default Container;
