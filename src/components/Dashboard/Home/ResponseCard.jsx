import React from "react";
import { OrderItems } from "./OrderItems";

export const ResponseCard = ({ data }) => {
  const inventoryData = data.orderItems;
  return (
    <div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-2 inline-flex">
      <div className=" w-full flex items-center flex-wrap gap-2">
        <div className="flex flex-col grow space-y-1">
          <div className="text-neutral-950 text-sm font-semibold">
            {data.customerName}
          </div>
          <div className="text-green-500 text-xs font-semibold">Rp300.000</div>
        </div>
        {/* status container */}
        <div className="flex flex-col">
          <div className="text-neutral-500 text-xs font-semibold">Status</div>
          <div className="text-orange-500 text-xs font-semibold">
            Menunggu Konfirmasi
          </div>
        </div>
      </div>

      {/* border */}
      <hr className="w-full border-neutral-200"></hr>

      {/* container item */}
      <div className=" w-full flex flex-col space-y-1">
        <div className="text-neutral-950 text-sm font-semibold">Pesanan</div>

        {/* item pesanan */}
        {inventoryData.map((item) => {
          return <OrderItems key={item.id} data={item} />;
        })}

        {/* border */}
        <hr className="w-full border-neutral-200"></hr>

        {/* container alamat */}
        <div className=" w-full flex flex-col space-y-1">
          <div className="text-neutral-950 text-sm font-semibold">Alamat</div>
          <div className="text-neutral-950 text-sm font-normal">
            {data.customerAddress}
          </div>
        </div>

        {/* container catatan */}
        <div className=" w-full flex flex-col space-y-1">
          <div className="text-neutral-950 text-sm font-semibold">Catatan</div>
          <div className="text-neutral-950 text-sm font-normal">
            {data.customerNote}
          </div>
        </div>

        {/* Kumpulan btn */}
        <div className="w-full h-fit pt-2 justify-end items-start gap-2 inline-flex flex-wrap">
          <div className="px-2 py-1 bg-red-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold">
            Batalkan
          </div>

          <div className="px-2 py-1 bg-emerald-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold">
            <a href={`https://wa.me/${data.customerPhone}`}> Hubungi</a>
          </div>
          <div className="px-2 py-1 bg-orange-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold">
            Konfirmasi
          </div>
        </div>
      </div>
    </div>
  );
};
