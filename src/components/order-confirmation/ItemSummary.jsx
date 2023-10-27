"use client";

import { useAtom } from "jotai";
import { orderAtom } from "@/state/orderAtoms";
import { ItemCard } from "./ItemCard";

export const ItemSummary = () => {
  const [orderData, setOrderData] = useAtom(orderAtom);

  return (
    <div>
      {orderData.map((item) => {
        return <ItemCard data={item} />;
      })}
    </div>
  );
};
