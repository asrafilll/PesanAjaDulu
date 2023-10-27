import { atom } from "jotai";

export const loginAtom = atom({
  phoneNumber: "",
  password: "",
});

export const registerAtom = atom({
  fullName: "",
  shopName: "",
  phoneNumber: "",
  password: "",
});
