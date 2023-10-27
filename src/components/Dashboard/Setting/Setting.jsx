import {
  Store,
  FileText,
  ShoppingBasket,
  Settings,
  Plus,
  Trash,
  Pencil,
  ChevronRight,
  UserCircle,
  LogOut,
  HelpCircle,
} from "lucide-react";

export const DashboardSetting = () => {
  return (
    <div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
      {/* ini header */}
      <div className="w-full flex p-6 gap-2 items-center bg-orange-500">
        {/* img */}
        <img
          className="w-20 h-20 rounded-full"
          src="https://via.placeholder.com/80x80"
        />
        {/* Text container */}
        <div className="flex flex-col gap-1 grow">
          <div className="text-white text-lg font-semibold">Syntex Store</div>
          <div className="text-white text-sm font-medium">08XXXXXXX</div>
        </div>
      </div>

      {/* ini body setting */}
      <div className="w-full h-fit overflow-y-scroll">
        {/* ini item setting */}
        <div className=" px-6 py-3 flex items-center bg-white cursor-pointer">
          <div className="text-neutral-500 text-sm tracking-normal font-medium grow flex items-center gap-2">
            <UserCircle
              className="text-neutral-500"
              size={24}
              strokeWidth={2}
            />{" "}
            Syntex Store
          </div>
          <ChevronRight
            className="text-neutral-500"
            size={24}
            strokeWidth={2}
          />
        </div>

        {/* border */}
        <hr className="w-full border-neutral-200"></hr>

        {/* ini item setting */}
        <div className=" px-6 py-3 flex items-center bg-white cursor-pointer">
          <div className="text-neutral-500 text-sm tracking-normal font-medium grow flex items-center gap-2">
            <HelpCircle
              className="text-neutral-500"
              size={24}
              strokeWidth={2}
            />{" "}
            Pusat Bantuan
          </div>
          <ChevronRight
            className="text-neutral-500"
            size={24}
            strokeWidth={2}
          />
        </div>

        {/* border */}
        <hr className="w-full border-neutral-200"></hr>

        <div className=" px-6 py-3 flex items-center bg-white cursor-pointer">
          <div className="text-red-500 text-sm tracking-normal font-medium grow flex items-center gap-2">
            <LogOut className="text-red-500" size={24} strokeWidth={2} /> Keluar
          </div>
          <ChevronRight className="text-red-500" size={24} strokeWidth={2} />
        </div>

        {/* border */}
        <hr className="w-full border-neutral-200"></hr>
      </div>

      {/* ini footer */}
      <div className="w-full px-6 py-3 fixed bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
        {/* container navigation */}
        <div className="w-full justify-evenly items-center flex gap-8">
          {/* Nav item */}
          <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
            <Store className="gap-1 text-neutral-500 mb-1" />
            <div className="text-xs font-normal text-neutral-500">Pesanan</div>
          </div>
          <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
            <FileText className="gap-1 text-neutral-500 mb-1" />
            <div className="text-xs font-normal text-neutral-500">Formulir</div>
          </div>
          <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
            <ShoppingBasket className="gap-1 text-neutral-500 mb-1" />
            <div className="text-xs font-normal text-neutral-500">Produk</div>
          </div>
          <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
            <Settings className="gap-1 text-orange-500 mb-1" />
            <div className="text-xs font-semibold text-orange-500">Setelan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
