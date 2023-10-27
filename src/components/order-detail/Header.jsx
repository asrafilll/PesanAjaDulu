import React from "react";
import { BackButton } from "../shared/BackButton";

export const Header = () => {
  return (
    <div>
      <div className="flex flex-col p-6 gap-4">
        {/* ini back btn */}
        <BackButton />
        {/* ini text container */}
        <div className="w-full flex-col">
          <div className="text-neutral-950 text-xl font-semibold mb-1">
            Lanjutkan Pre-ordermu!
          </div>
          <div className="text-neutral-500 text-sm">
            Isi formulir di bawah ini agar pesanan kamu bisa kami proses lebih
            lanjut!
          </div>
        </div>
      </div>
    </div>
  );
};
