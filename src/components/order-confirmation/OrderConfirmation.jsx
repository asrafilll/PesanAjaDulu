import React from "react";
import { Header } from "./Header";
import { OrderConfirmationFooter } from "./OrderConfirmationFooter";
import { ItemSummary } from "./ItemSummary";
import { AddOrderButton } from "./AddOrderButton";

export default function OrderConfirmation() {
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      <Header />
      <div className="ItemContainer px-6 py-0 w-full space-y-4 h-screen overflow-y-scroll">
        <ItemSummary />
        {/* <AddOrderButton /> */}
      </div>
      <OrderConfirmationFooter />
    </div>
  );
}
