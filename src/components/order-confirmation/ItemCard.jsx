import React from "react";
import { formatToIDR } from "@/utils/formatter";

export const ItemCard = ({ data }) => {
  return (
    <div className="w-full h-fit pr-2 bg-white rounded-lg border border-zinc-200 items-center gap-2 inline-flex overflow-hidden justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[120px] h-[120px]">
          <img className="object-cover w-full h-full" src={data.image} />
        </div>
        <div className="py-2 flex-col space-y-2">
          <div className="text-orange-500 text-sm font-semibold">
            {data.title}
          </div>
          <div className="w-full h-fit text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
            {data.desc}
          </div>
          <div className="text-neutral-950 text-xs font-semibold">
            Jumlah : {data.quantity}
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div className="ItemPrice text-neutral-950 text-xs font-bold">
          {formatToIDR.format(data.price * data.quantity)}
        </div>
      </div>
    </div>
  );
};
