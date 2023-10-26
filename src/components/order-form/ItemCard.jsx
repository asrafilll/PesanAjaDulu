"use client";

import { orderAtom } from "@/state/orderAtoms";
import { formatToIDR } from "@/utils/formatter";
import { useAtom } from "jotai";
import { Plus, Minus } from "lucide-react";

export const ItemCard = ({ inventoryData }) => {
  const [order, setOrder] = useAtom(orderAtom);

  const handleIncrement = () => {
    const itemInCart = order.find((item) => item.id === inventoryData.id);
    if (itemInCart) {
      const updatedOrder = order.map((item) =>
        item.id === inventoryData.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setOrder(updatedOrder);
    } else {
      setOrder([...order, { ...inventoryData, quantity: 1 }]);
    }
  };

  const handleDecrement = () => {
    const itemInCart = order.find((item) => item.id === inventoryData.id);
    if (itemInCart && itemInCart.quantity > 1) {
      const updatedOrder = order.map((item) =>
        item.id === inventoryData.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setOrder(updatedOrder);
    } else {
      const updatedOrder = order.filter((item) => item.id !== inventoryData.id);
      setOrder(updatedOrder);
    }
  };

  const itemInCart = order.find((item) => item.id === inventoryData.id);
  const currentQuantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="w-full h-fit pr-2 bg-white rounded-lg border border-zinc-200 items-center gap-2 inline-flex overflow-hidden justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[120px] h-[120px]">
          <img
            className="object-cover w-full h-full"
            src={inventoryData.image}
          />
        </div>
        <div className="py-2 flex-col space-y-2">
          <div className="text-orange-500 text-sm font-semibold">
            {inventoryData.title}
          </div>
          <div className="w-full h-fit text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
            {inventoryData.desc}
          </div>
          <div className="text-neutral-950 text-xs font-semibold">
            {formatToIDR.format(inventoryData.price)}
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div
          className="p-1 bg-neutral-300 rounded-full justify-start items-center gap-2 flex"
          onClick={handleDecrement}
        >
          <Minus color="white" size={12} strokeWidth={4} />
        </div>
        <div className="w-5 text-center text-orange-500 text-sm font-semibold">
          {currentQuantity}
        </div>
        <div
          className="p-1 bg-orange-500 rounded-full justify-start items-center gap-2 flex"
          onClick={handleIncrement}
        >
          <Plus color="white" size={12} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
