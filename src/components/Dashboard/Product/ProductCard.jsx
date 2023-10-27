"use client";
import { Trash, Pencil } from "lucide-react";
import { formatToIDR } from "@/utils/formatter";

export const ProductCard = ({ item }) => {
  const deleteInventory = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/inventories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        console.log("Inventory deleted successfully");
      } else {
        console.log("Failed to delete inventory. Status code:", res.status);
      }
    } catch (error) {
      console.error("Error while deleting inventory:", error);
    }
  };

  return (
    <div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-2 inline-flex">
      {/* content container */}
      <div className="w-full flex gap-2 items-start ssm:flex-wrap">
        {/* img */}
        <img className="w-20 h-20 object-cover rounded" src={item.image} />
        {/* Text container */}
        <div className="flex flex-col gap-1">
          <div className="text-orange-500 text-sm font-semibold">
            {item.title}
          </div>
          <div className="text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
            {item.desc}
          </div>
          <div className="text-neutral-950 text-xs font-semibold">
            {formatToIDR.format(item.price)}
          </div>
        </div>
      </div>

      {/* Kumpulan btn */}
      <div
        className="w-full h-fit pt-2 justify-end items-start gap-2 inline-flex flex-wrap"
        onClick={() => {
          deleteInventory(item.id);
        }}
      >
        <div className="px-2 py-1 bg-red-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold gap-1">
          <Trash className="text-white" size={12} /> Hapus
        </div>
        {/* <div className="px-2 py-1 bg-orange-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold gap-1">
          <Pencil className="text-white" size={12} /> Ubah
        </div> */}
      </div>
    </div>
  );
};
