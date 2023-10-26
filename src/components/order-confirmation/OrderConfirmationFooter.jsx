"use client";

import { totalPriceAtom } from "@/state/orderAtoms";
import { formatToIDR } from "@/utils/formatter";
import { useAtom } from "jotai";
import Link from "next/link";

export const OrderConfirmationFooter = () => {
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  return (
    <div className="w-full p-6 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
      <div className="w-full flex-col gap-3 flex">
        {/* ini harga */}
        <div className="flex justify-between mb-4">
          <div className="text-neutral-950 text-sm font-semibold">
            Total Price
          </div>
          <div className="text-neutral-950 text-sm">
            {formatToIDR.format(totalPrice || 0)}
          </div>
        </div>
      </div>

      {/* ini btn */}
      <Link href="/order-complete">
        <div className="w-full py-3 bg-orange-500 rounded-lg justify-center items-center flex">
          <div className="text-white text-lg font-semibold">Pesan</div>
        </div>
      </Link>
    </div>
  );
};
