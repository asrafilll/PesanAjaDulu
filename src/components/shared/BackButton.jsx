"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <div
      className="w-16 h-6 justify-start items-center flex hover:cursor-pointer"
      onClick={router.back}
    >
      <ChevronLeft />
      <div className="text-neutral-950 text-xs">Kembali</div>
    </div>
  );
};
