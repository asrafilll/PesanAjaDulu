"use client";
import { Provider } from "jotai";

export default function RootProvider({ children }) {
  return <Provider>{children}</Provider>;
}
