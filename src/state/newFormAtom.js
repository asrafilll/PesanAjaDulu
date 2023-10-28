import { atom } from "jotai";

export const newFormAtom = atom({
  title: "",
  desc: "",
  endFormDate: "",
  userId: "",
  inventoryItem: [],
});
