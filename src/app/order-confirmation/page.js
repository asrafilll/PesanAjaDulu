import React from "react";
import { ChevronLeft } from "lucide-react";

export default function page() {
	return (
		<div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
			{/* ini Header */}
			<div className="flex flex-col p-6 gap-4">
				{/* ini back btn */}
				<div className="w-16 h-6 justify-start items-center flex">
					<ChevronLeft />
					<div className="text-neutral-950 text-xs">Kembali</div>
				</div>

				{/* ini text container */}
				<div className="w-full flex-col">
					<div className="text-neutral-950 text-xl font-semibold mb-1">Konfirmasi Pesananmu!</div>
					<div className="text-neutral-500 text-sm font-normal leading-none">Pastikan semua rincian sudah benar sebelum melanjutkan pembayaran.</div>
				</div>
			</div>

			{/* ini body*/}
			<div className="ItemContainer px-6 py-0 w-full space-y-4 h-screen overflow-y-scroll">
				{/* ini item card */}
				<div className="w-full h-fit pr-2 bg-white rounded-lg border border-zinc-200 items-center gap-2 inline-flex overflow-hidden">
					<img className="max-w-[80] max-h-[99] self-stretch" src="https://via.placeholder.com/80x99" />
					{/* ini content container */}
					<div className="py-2 flex-col space-y-2">
						<div className=" text-orange-500 text-sm font-semibold">Seblak Gacor</div>
						<div className="w-full h-fit text-neutral-500 text-xs font-normal line-clamp-2 hover:line-clamp-none">
							hidangan pedas khas Indonesia yang terdiri dari berbagai bahan seperti kerupuk, tahu, bakso, dan mie, dimasak dengan saus pedas dan rempah-rempah khas. Hidangan ini memiliki rasa gurih dan pedas yang kuat, cocok bagi
							pecinta makanan pedas.
						</div>
						<div className="flex justify-between w-full">
							<div className="ItemPrice text-neutral-950 text-xs font-semibold">
								Jumlah: <span>1</span>
							</div>
							<div className="ItemPrice text-neutral-950 text-xs font-semibold">Rp. 100.000</div>
						</div>
					</div>
				</div>
				{/*btn tambah order */}
				<div className="w-full h-10 pr-2 py-3 rounded-lg border border-orange-500 justify-center items-center gap-2 inline-flex">
					<div className="justify-center items-center gap-1 flex">
						<div className="w-4 h-4 relative" />
						<div className="text-orange-500 text-sm font-medium leading-none">Tambah Orderan</div>
					</div>
				</div>
			</div>

			{/* ini footer */}
			<div className="w-full h-60 p-6 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex flex-col items-center gap-3">
				{/* ini ringkasan biaya */}
				<div className="Container w-full pb-1 flex justify-between items-center">
					<div className="text-neutral-950 text-base font-semibold">Ringkasan Biaya</div>
					<div className="text-orange-500 text-sm font-semibold">Lihat Detail</div>
				</div>

				{/* ini summary container */}
				<div className="w-full flex-col gap-3 flex">
					{/* ini harga */}
					<div className="flex justify-between">
						<div className="text-neutral-800 text-sm">Price</div>
						<div className="text-neutral-950 text-sm">Rp. 100.000</div>
					</div>
					{/* ini biaya admin */}
					<div className="flex justify-between">
						<div className="text-neutral-800 text-sm">Admin Fee</div>
						<div className="text-neutral-950 text-sm">Rp. 15.000</div>
					</div>

					{/* ini total */}
					<div className="flex justify-between">
						<div className="text-neutral-950 text-sm font-semibold">Total</div>
						<div className="text-neutral-950 text-sm font-semibold">Rp. 115.000</div>
					</div>
				</div>

				{/* ini btn */}
				<div className="w-full py-3 bg-orange-500 rounded-lg justify-center items-center flex">
					<div className="text-white text-lg font-semibold">Pesan</div>
				</div>
			</div>
		</div>
	);
}
