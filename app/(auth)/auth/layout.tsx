import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-full flex items-center justify-center bg-linear-to-b from-sky-400  to-blue-800 dark:from-gray-950 dark:to-gray-950">
      {children}
    </div>
  );
};

export default AuthLayout;