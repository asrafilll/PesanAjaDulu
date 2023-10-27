import Link from "next/link";
import React from "react";

export const AddOrderButton = () => {
  return (
    <Link href="/order-form">
      <div className="w-full h-10 pr-2 py-3 rounded-lg border border-orange-500 justify-center items-center gap-2 inline-flex">
        <div className="justify-center items-center gap-1 flex">
          <div className="w-4 h-4 relative" />
          <div className="text-orange-500 text-sm font-medium leading-none">
            Tambah Orderan
          </div>
        </div>
      </div>
    </Link>
  );
};
