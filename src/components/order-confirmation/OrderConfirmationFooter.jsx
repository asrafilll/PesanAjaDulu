"use client";

import { totalPriceAtom } from "@/state/orderAtoms";
import { responseAtom } from "@/state/responseAtom";
import { formatToIDR } from "@/utils/formatter";
import { useAtom } from "jotai";
import Link from "next/link";

export const OrderConfirmationFooter = () => {
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);
  const [responseData, setResponseData] = useAtom(responseAtom);

  const createNewResponse = async () => {
    const data = await fetch("http://localhost:3000/api/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseData),
    });
  };

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
        <div
          className="w-full py-3 bg-orange-500 rounded-lg justify-center items-center flex"
          onClick={createNewResponse}
        >
          <div className="text-white text-lg font-semibold">Pesan</div>
        </div>
      </Link>
    </div>
  );
};
