import { atom } from "jotai";

export const orderAtom = atom([]);

export const totalPriceAtom = atom((get) => {
  const order = get(orderAtom);

  return order.reduce((acc, item) => {
    const price = item.price || 0;
    return acc + price * item.quantity;
  }, 0);
});
