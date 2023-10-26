import React from "react";
import { Store, FileText, ShoppingBasket, Settings, Plus, Trash, Pencil } from "lucide-react";

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
				<div className="w-full h-fit p-3 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-2 inline-flex">
					{/* content container */}
					<div className="w-full flex gap-2 items-start ssm:flex-wrap">
						{/* img */}
						<img className="w-20 h-20 rounded" src="https://via.placeholder.com/80x80" />
						{/* Text container */}
						<div className="flex flex-col gap-1">
							<div className="text-orange-500 text-sm font-semibold">Formulir aktif</div>
							<div className="text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
								hidangan nasi goreng khas Indonesia yang dihidangkan dengan saus balado, yang terkenal dengan cita rasa pedas dan gurih. Hidangan ini terdiri dari nasi yang digoreng bersama bumbu dan bahan tambahan seperti telur,
								ayam, udang, atau daging lainnya. Saus balado yang khas terbuat dari cabai merah, bawang, dan bumbu lainnya yang memberikan rasa pedas dan beraroma. Nasi Goreng Balado menggabungkan rasa gurih dan pedas dengan
								sempurna, menjadikannya pilihan yang lezat untuk pencinta makanan pedas.
							</div>
							<div className="text-neutral-950 text-xs font-semibold">Rp.100.000</div>
						</div>
					</div>

					{/* Kumpulan btn */}
					<div className="w-full h-fit pt-2 justify-end items-start gap-2 inline-flex flex-wrap">
						<div className="px-2 py-1 bg-red-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold gap-1">
							<Trash className="text-white" size={12} /> Hapus
						</div>
						<div className="px-2 py-1 bg-orange-500 rounded justify-center items-center flex cursor-pointer grow text-white text-sm font-semibold gap-1">
							<Pencil className="text-white" size={12} /> Ubah
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
						<FileText className="gap-1 text-neutral-500 mb-1" />
						<div className="text-xs font-normal text-neutral-500">Formulir</div>
					</div>
					<div className=" w-12 flex flex-col items-center justify-center cursor-pointer">
						<ShoppingBasket className="gap-1 text-orange-500 mb-1" />
						<div className="text-xs font-semibold text-orange-500">Produk</div>
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
