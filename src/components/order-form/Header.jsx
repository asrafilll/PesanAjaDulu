import React from "react";

export const Header = () => {
  return (
    <div className="w-full pb-2 bg-slate-50 shadow border-b flex-col items-center sticky top-0">
      <div className="text-center text-neutral-950 text-xl font-semibold ">
        Syntex Store
      </div>
      <div className="text-center text-neutral-500 text-xs font-medium ">
        Tambahkan Item untuk Pre-Order
      </div>
    </div>
  );
};
