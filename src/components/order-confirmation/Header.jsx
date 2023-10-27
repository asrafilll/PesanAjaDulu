import React from "react";
import { BackButton } from "../shared/BackButton";

export const Header = () => {
  return (
    <div>
      <div className="flex flex-col p-6 gap-4">
        <BackButton />
        <div className="w-full flex-col">
          <div className="text-neutral-950 text-xl font-semibold mb-1">
            Konfirmasi Pesananmu!
          </div>
          <div className="text-neutral-500 text-sm">
            Pastikan semua rincian sudah benar sebelum melanjutkan pembayaran.
          </div>
        </div>
      </div>
    </div>
  );
};
