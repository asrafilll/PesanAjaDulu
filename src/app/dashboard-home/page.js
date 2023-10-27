"use client";

import React from "react";
import { Store, FileText, ShoppingBasket, Settings } from "lucide-react";

export default function page() {
	return (
		<div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
			<div className="w-full p-6 bg-slate-50 shadow border-b flex-col items-center sticky top-0">
				<div className="text-neutral-950 text-xl font-semibold ">Pesanan Menu</div>
				<div className="text-neutral-500 text-xs font-medium ">Lihat dan atur Pesananmu disini</div>
			</div>

			{/* ini body */}
			<div className="px-6 py-4 w-full space-y-4 h-screen overflow-y-scroll">
				{/* ini item card */}
				<div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-end gap-2 inline-flex">
					{/* content 1 container */}
					<div className=" w-full flex items-center flex-wrap gap-2">
						{/* text container */}
						<div className="flex flex-col grow space-y-1">
							<div className="text-neutral-950 text-sm font-semibold">Hisyammm</div>
							<div className="text-green-500 text-xs font-semibold">Rp. 300.0000</div>
						</div>
						{/* status container */}
						<div className="flex flex-col">
							<div className="text-neutral-500 text-xs font-semibold">Status</div>
							<div className="text-orange-500 text-xs font-semibold">Menunggu Konfirmasi</div>
						</div>
					</div>

					{/* border */}
					<hr className="w-full border-neutral-200"></hr>

					{/* container item */}
					<div className=" w-full flex flex-col space-y-1">
						<div className="text-neutral-950 text-sm font-semibold">Pesanan</div>

						{/* item pesanan */}
						<div className="w-full flex items-center flex-wrap gap-1">
							<div className="flex flex-col grow w-3/5">
								<div className="text-neutral-950 text-sm">Seblak Gacor</div>
								<div className="text-neutral-500 text-xs font-medium">3 x 100.000</div>
							</div>
							<div className="text-neutral-950 text-xs font-semibold">Rp300.0000</div>
						</div>

						{/* item pesanan */}
						<div className="w-full flex items-center flex-wrap gap-1">
							<div className="flex flex-col grow w-3/5">
								<div className="text-neutral-950 text-sm">Seblak Gacor</div>
								<div className="text-neutral-500 text-xs font-medium">3 x 100.000</div>
							</div>
							<div className="text-neutral-950 text-xs font-semibold">Rp300.0000</div>
						</div>
					</div>

					{/* border */}
					<hr className="w-full border-neutral-200"></hr>

					{/* container alamat */}
					<div className=" w-full flex flex-col space-y-1">
						<div className="text-neutral-950 text-sm font-semibold">Alamat</div>
						<div className="text-neutral-950 text-sm font-normal">Bogor tengah, Jawa barat</div>
					</div>

					{/* container catatan */}
					<div className=" w-full flex flex-col space-y-1">
						<div className="text-neutral-950 text-sm font-semibold">Catatan</div>
						<div className="text-neutral-950 text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Lorem euismod diam amet amet nec nulla eget elementum.</div>
					</div>

					{/* Kumpulan btn */}
					<div className="w-full h-fit pt-2 justify-end items-start gap-2 inline-flex flex-wrap">
						<div className="px-2 py-1 bg-red-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold">Batalkan</div>
						<div className="px-2 py-1 bg-emerald-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold">Hubungi</div>
						<div className="px-2 py-1 bg-orange-500 rounded justify-center items-center flex cursor-pointer grow-[2] text-white text-sm font-semibold">Konfirmasi</div>
					</div>
				</div>
			</div>

			{/* ini footer */}
			<div className="w-full px-6 py-3 fixed bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
				{/* container navigation */}
				<div className="w-full justify-evenly items-center flex gap-8">
					{/* Nav item */}
					<div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
						<Store className="gap-1 text-orange-500 mb-1" />
						<div className="text-xs font-semibold text-orange-500">Pesanan</div>
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
						<Settings className="gap-1 text-neutral-500 mb-1" />
						<div className="text-xs font-normal text-neutral-500">Setelan</div>
					</div>
				</div>
			</div>
		</div>
	);
}
