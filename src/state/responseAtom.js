import { atom } from "jotai";
import { customerInfoAtom } from "./customerAtom";
import { orderAtom } from "./orderAtoms";

export const formIdAtom = atom("");

export const responseAtom = atom((get) => {
  const order = get(orderAtom);
  const customerInfo = get(customerInfoAtom);
  const formId = get(formIdAtom);

  const orderItems = order.map((item) => ({
    inventoryId: item.id,
    quantity: item.quantity,
  }));

  const data = {
    formId,
    customerName: customerInfo.customerName,
    customerAddress: customerInfo.customerAddress,
    customerPhone: customerInfo.customerPhone,
    customerNote: customerInfo.customerNote,
    orderItems,
    createdAt: new Date().toISOString().split("T")[0],
  };
  return data;
});
