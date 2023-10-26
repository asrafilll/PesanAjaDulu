import { atom } from "jotai";

export const customerInfoAtom = atom({
  customerName: "",
  customerAddress: "",
  customerPhone: "",
  customerNote: "",
});
