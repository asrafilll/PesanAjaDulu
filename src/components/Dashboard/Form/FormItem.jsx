import { formatToIDR } from "@/utils/formatter";
import React from "react";

export const FormItem = ({ data }) => {
  const { inventory } = data;
  return (
    <div className="w-full justify-between flex items-center flex-wrap gap-1">
      <div className="text-neutral-950 text-sm w-3/5">{inventory.title}</div>
      <div className="text-neutral-950 text-xs font-semibold">
        {formatToIDR.format(inventory.price)}
      </div>
    </div>
  );
};
