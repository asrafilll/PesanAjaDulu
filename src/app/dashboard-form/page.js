import React from "react";
import { Store, FileText, ShoppingBasket, Settings, Plus, Trash, Pencil, Share2 } from "lucide-react";

export default function page() {
	return (
		<div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
			{/* ini header */}
			<div className="w-full p-6 bg-slate-50 shadow border-b flex-row items-center sticky top-0">
				<div className="flex flex-row items-center flex-wrap gap-2 ">
					<div className="flex flex-col grow">
						<div className="text-neutral-950 text-xl font-semibold ">Form Menu</div>
						<div className="text-neutral-500 text-xs font-medium ">Atur Form Pesananmu disini</div>
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
				{/* ini item card */}
				<div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-2 inline-flex">
					{/* content 1 container */}
					<div className="w-full flex gap-2 flex-wrap items-center">
						{/* text container */}
						<div className="flex flex-col grow space-y-1 w-3/5">
							<div className="text-neutral-950 text-sm font-semibold">Pre Order Form Oktober</div>
							<div className="text-neutral-500 text-xs font-medium">Formulir ini digunakan untuk bulan Oktober sampai tanggal 31</div>
						</div>
						{/* status container */}
						<div className="flex flex-col">
							<div className="text-neutral-500 text-xs font-semibold">Status</div>
							<div className="text-orange-500 text-xs font-semibold">Formulir aktif</div>
						</div>
					</div>

					{/* border */}
					<hr className="w-full border-neutral-200"></hr>

					{/* container item */}
					<div className=" w-full flex flex-col space-y-1">
						<div className="text-neutral-950 text-sm font-semibold">Produk</div>

						{/* item pesanan */}
						<div className="w-full justify-between flex items-center flex-wrap gap-1">
							<div className="text-neutral-950 text-sm w-3/5">Seblak Gacor</div>
							<div className="text-neutral-950 text-xs font-semibold">Rp100.0000</div>
						</div>

						{/* item pesanan */}
						<div className="w-full justify-between flex items-center flex-wrap gap-1">
							<div className="text-neutral-950 text-sm w-3/5">Cupcake Banteng</div>
							<div className="text-neutral-950 text-xs font-semibold">Rp100.0000</div>
						</div>
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
						<FileText className="gap-1 text-orange-500 mb-1" />
						<div className="text-xs font-semibold text-orange-500">Formulir</div>
					</div>
					<div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
						<ShoppingBasket className="gap-1 text-neutral-500 mb-1" />
						<div className="text-xs font-normal text-neutral-500">Produk</div>
					</div>
					<div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
						<Settings className="gap-1 text-neutral-500 mb-1" />
						<div className="text-xs font-normal text-neutral-500">Setelan</div>
					</div>
				</div>
			</div>
		</div>
	);
}
