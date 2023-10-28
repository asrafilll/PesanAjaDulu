import { Trash, Pencil, Share2 } from "lucide-react";
import { FormItem } from "./FormItem";

export const FormCard = ({ data }) => {
  const { inventory } = data;
  return (
    <div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-2 inline-flex">
      {/* content 1 container */}
      <div className="w-full flex gap-2 flex-wrap items-center">
        {/* text container */}
        <div className="flex flex-col grow space-y-1 w-3/5">
          <div className="text-neutral-950 text-sm font-semibold">
            {data.title}
          </div>
          <div className="text-neutral-500 text-xs font-medium">
            {data.desc}
          </div>
        </div>
        {/* status container */}
        <div className="flex flex-col">
          <div className="text-neutral-500 text-xs font-semibold">Status</div>
          <div className="text-orange-500 text-xs font-semibold">
            Formulir aktif
          </div>
        </div>
      </div>

      {/* border */}
      <hr className="w-full border-neutral-200"></hr>

      {/* container item */}
      <div className=" w-full flex flex-col space-y-1">
        <div className="text-neutral-950 text-sm font-semibold">Produk</div>

        {inventory.map((item) => {
          return <FormItem key={item.id} data={item} />;
        })}
      </div>

      {/* Kumpulan btn */}
      <div className="w-full h-fit pt-2 justify-end items-start gap-2 inline-flex flex-wrap">
        <div className="px-2 py-1 bg-red-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold gap-1">
          <Trash className="text-white" size={12} /> Hapus
        </div>
        <div className="px-2 py-1 bg-orange-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold gap-1">
          <Pencil className="text-white" size={12} /> Ubah
        </div>
        <div className="px-2 py-1 bg-blue-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold gap-1">
          <Share2 className="text-white" size={12} /> Bagikan
        </div>
      </div>
    </div>
  );
};
