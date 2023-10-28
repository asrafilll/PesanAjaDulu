"use client";
import { Store, FileText, ShoppingBasket, Settings } from "lucide-react";
import Link from "next/link";
import { sellerIdAtom } from "@/state/sellerIdAtom";
import { useAtom } from "jotai";
import { ResponseCard } from "./ResponseCard";
import { useState, useEffect } from "react";

export const DashboardHome = ({ data }) => {
  const [id, setSellerIdAtom] = useAtom(sellerIdAtom);
  const [localSellerId, setLocalSellerId] = useState("");

  useEffect(() => {
    if (!id) {
      const storedSellerId = localStorage.getItem("sellerId");
      setLocalSellerId(storedSellerId);
    }
  }, [id]);

  const sellerId = id ?? localSellerId;
  return (
    <div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
      <div className="w-full p-6 bg-slate-50 shadow border-b flex-col items-center sticky top-0">
        <div className="text-neutral-950 text-xl font-semibold ">
          Pesanan Menu
        </div>
        <div className="text-neutral-500 text-xs font-medium ">
          Lihat dan atur Pesananmu disini
        </div>
      </div>
      {/* ini body */}
      <div className="px-6 py-4 pb-12 w-full space-y-4 h-screen overflow-y-scroll ">
        {data.map((item) => {
          return <ResponseCard key={item.id} data={item} />;
        })}
      </div>

      {/* ini footer */}
      <div className="w-full px-6 py-3 fixed bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
        <div className="w-full justify-evenly items-center flex gap-8">
          <Link href={`/dashboard/${sellerId}`}>
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <Store className="gap-1 text-orange-500 mb-1" />
              <div className="text-xs font-semibold text-orange-500">
                Pesanan
              </div>
            </div>
          </Link>
          <Link href={`/dashboard-form/${sellerId}`}>
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <FileText className="gap-1 text-neutral-500 mb-1" />
              <div className="text-xs font-normal text-neutral-500">
                Formulir
              </div>
            </div>
          </Link>
          <Link href={`/dashboard-product/${sellerId}`}>
            <div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
              <ShoppingBasket className="gap-1 text-neutral-500 mb-1" />
              <div className="text-xs font-normal text-neutral-500">Produk</div>
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
