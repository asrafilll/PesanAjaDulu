import { atom } from "jotai";

export const createInventoryAtom = atom({
  name: "",
  description: "",
  price: "",
  image: null,
});
