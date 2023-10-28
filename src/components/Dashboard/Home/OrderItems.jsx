import { formatToIDR } from "@/utils/formatter";

export const OrderItems = ({ data }) => {
  const { inventory } = data;
  return (
    <div className="w-full flex items-center flex-wrap gap-1">
      <div className="flex flex-col grow w-3/5">
        <div className="text-neutral-950 text-sm">{inventory.title}</div>
        <div className="text-neutral-500 text-xs font-medium">
          {data.quantity} x {formatToIDR.format(inventory.price)}
        </div>
      </div>
      <div className="text-neutral-950 text-xs font-semibold">
        {formatToIDR.format(data.quantity * inventory.price)}
      </div>
    </div>
  );
};
