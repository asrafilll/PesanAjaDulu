"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { useAtom } from "jotai";
import { selectedItemsAtom } from "@/app/state/orderAtoms";

async function getFromData({ params }) {
  const id = params.id;
  const res = await fetch();
}

export default function page() {
  const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);

  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      {/* ini header */}
      <div className="w-full pb-2 bg-slate-50 shadow border-b flex-col items-center sticky top-0">
        <div className="text-center text-neutral-950 text-xl font-semibold ">
          Syntex Store
        </div>
        <div className="text-center text-neutral-500 text-xs font-medium ">
          Tambahkan Item untuk Pre-Order
        </div>
      </div>

      {/* ini body */}
      <div className="px-6 py-4 w-full space-y-4 h-screen overflow-y-scroll">
        {/* ini item card */}
        <div className="w-full h-fit pr-2 bg-white rounded-lg border border-zinc-200 items-center gap-2 inline-flex overflow-hidden">
          <img
            className="max-w-[80] max-h-[99] self-stretch"
            src="https://via.placeholder.com/80x99"
          />
          {/* ini content container */}
          <div className="py-2 flex-col space-y-2">
            <div className=" text-orange-500 text-sm font-semibold">
              Seblak Gacor
            </div>
            <div className="w-full h-fit text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
              hidangan pedas khas Indonesia yang terdiri dari berbagai bahan
              seperti kerupuk, tahu, bakso, dan mie, dimasak dengan saus pedas
              dan rempah-rempah khas. Hidangan ini memiliki rasa gurih dan pedas
              yang kuat, cocok bagi pecinta makanan pedas.
            </div>
            <div className="text-neutral-950 text-xs font-semibold">
              Rp. 100.000
            </div>
          </div>
          {/* ini container btn increment & decrement item */}
          <div className="justify-start items-center gap-1 flex">
            {/* btn increment */}
            <div className="p-1 bg-neutral-300 rounded-full justify-start items-center gap-2 flex">
              <Minus color="white" size={12} strokeWidth={4} />
            </div>

            {/* item count */}
            <div className="w-5 text-center text-orange-500 text-sm font-semibold">
              0
            </div>

            {/* btn decrement */}
            <div className="p-1 bg-orange-500 rounded-full justify-start items-center gap-2 flex">
              <Plus color="white" size={12} strokeWidth={4} />
            </div>
          </div>
        </div>
      </div>

      {/* ini footer */}
      <div className="w-full p-6 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
        <div className="w-full flex-col gap-3 flex">
          {/* ini harga */}
          <div className="flex justify-between mb-4">
            <div className="text-neutral-950 text-sm font-semibold">
              Total Price
            </div>
            <div className="text-neutral-950 text-sm">Rp. 100.000</div>
          </div>
        </div>
        {/* ini btn */}
        <div className="w-full py-3 bg-neutral-300 rounded-lg justify-center items-center flex">
          <div className="text-white text-lg font-semibold">Pesan</div>
        </div>
      </div>
    </div>
  );
}
