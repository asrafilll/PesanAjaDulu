import React from "react";

export const AppLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      {children}
    </div>
  );
};
