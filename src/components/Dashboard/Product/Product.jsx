import { Store, FileText, ShoppingBasket, Settings, Plus } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export const DashboardProduct = ({ data }) => {
  return (
    <div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
      {/* ini header */}
      <div className="w-full p-6 bg-slate-50 shadow border-b flex-row items-center sticky top-0">
        <div className="flex flex-row items-center flex-wrap gap-2 ">
          <div className="flex flex-col grow">
            <div className="text-neutral-950 text-xl font-semibold ">
              Form Menu
            </div>
            <div className="text-neutral-500 text-xs font-medium ">
              Atur Form Pesananmu disini
            </div>
          </div>
          {/* ini btn */}
          <div className=" py-1 px-2 rounded border border-orange-500 justify-center items-center gap-1 inline-flex text-sm font-semibold text-orange-500 cursor-pointer">
            <Plus className=" text-orange-500" size={12} absoluteStrokeWidth />
            Buat Formulir
          </div>
        </div>
      </div>

      {/* ini body */}
      <div className="px-6 py-4 w-full space-y-4 h-screen overflow-y-scroll">
        {data.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>

      {/* ini footer */}
      <div className="w-full px-6 py-3 fixed bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
        <div className="w-full justify-evenly items-center flex gap-8">
          <Link href="/dashboard">
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <Store className="gap-1 text-neutral-500 mb-1" />
              <div className="text-xs font-semibold text-neutral-500">
                Pesanan
              </div>
            </div>
          </Link>
          <Link href="/dashboard-form">
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <FileText className="gap-1 text-neutral-500 mb-1" />
              <div className="text-xs font-normal text-neutral-500">
                Formulir
              </div>
            </div>
          </Link>
          <Link href="/dashboard-product">
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <ShoppingBasket className="gap-1  text-orange-500 mb-1" />
              <div className="text-xs font-normal text-orange-500">Produk</div>
            </div>
          </Link>
          <Link href="/dashboard-setting">
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <Settings className="gap-1 text-neutral-500 mb-1" />
              <div className="text-xs font-normal text-neutral-500">
                Setelan
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
