import { Plus, Minus } from "lucide-react";

export const ItemCard = () => {
  return (
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
          hidangan pedas khas Indonesia yang terdiri dari berbagai bahan seperti
          kerupuk, tahu, bakso, dan mie, dimasak dengan saus pedas dan
          rempah-rempah khas. Hidangan ini memiliki rasa gurih dan pedas yang
          kuat, cocok bagi pecinta makanan pedas.
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
  );
};
