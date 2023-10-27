"use client";

import { activeMenuAtom } from "@/state/activeMenuAtom";
import { useAtom } from "jotai";
import { Store, FileText, ShoppingBasket, Settings } from "lucide-react";
import Link from "next/link";

const NavItem = ({ IconComponent, label, isActive, onClick, page }) => {
  const textColor = isActive ? "text-orange-500" : "text-neutral-500";
  return (
    <Link href={page}>
      <div className="w-12 flex flex-col items-center justify-center cursor-pointer">
        <IconComponent className={`gap-1 mb-1 ${textColor}`} />
        <div className={`text-xs font-normal ${textColor}`}>{label}</div>
      </div>
    </Link>
  );
};

export const DashboardFooter = () => {
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

  const navItems = [
    { label: "Pesanan", icon: Store, page: "/dashboard" },
    { label: "Formulir", icon: FileText, page: "/dashboard-form" },
    { label: "Produk", icon: ShoppingBasket, page: "/dashboard-product" },
    { label: "Setelan", icon: Settings, page: "/dashboard-setting" },
  ];

  return (
    <div className="w-full px-6 py-3 fixed bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
      <div className="w-full justify-evenly items-center flex gap-8">
        {navItems.map(({ label, icon, page }) => (
          <NavItem
            key={label}
            IconComponent={icon}
            label={label}
            isActive={activeMenu === label}
            page={page}
            onClick={() => setActiveMenu(label)}
          />
        ))}
      </div>
    </div>
  );
};
