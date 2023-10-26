import { Plus, Minus } from "lucide-react";

export const ItemCard = ({ inventoryData }) => {
  return (
    <div className="w-full h-fit pr-2 bg-white rounded-lg border border-zinc-200 items-center gap-2 inline-flex overflow-hidden justify-between">
      {" "}
      <div className="flex items-center gap-2">
        {" "}
        <div className="max-w-[200px]">
          <img className="object-cover" src={inventoryData.image} />
        </div>
        <div className="py-2 flex-col space-y-2">
          <div className="text-orange-500 text-sm font-semibold">
            {inventoryData.title}
          </div>
          <div className="w-full h-fit text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
            {inventoryData.desc}
          </div>
          <div className="text-neutral-950 text-xs font-semibold">
            {inventoryData.price}
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-1 flex">
        <div className="p-1 bg-neutral-300 rounded-full justify-start items-center gap-2 flex">
          <Minus color="white" size={12} strokeWidth={4} />
        </div>
        <div className="w-5 text-center text-orange-500 text-sm font-semibold">
          0
        </div>
        <div className="p-1 bg-orange-500 rounded-full justify-start items-center gap-2 flex">
          <Plus color="white" size={12} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
