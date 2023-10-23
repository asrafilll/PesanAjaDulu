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
					<div className="text-neutral-950 text-xl font-semibold mb-1">Lanjutkan Pre-ordermu!</div>
					<div className="text-neutral-500 text-sm">Isi formulir di bawah ini agar pesanan kamu bisa kami proses lebih lanjut!</div>
				</div>
			</div>

			{/* ini body isiniya form semua */}
			<div className="px-6 w-full space-y-3 h-screen overflow-y-scroll">
				<div className="form">
					<label htmlFor="nama" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Nama
					</label>
					<input type="text" name="nama" id="nama" className="w-full" placeholder="Hisyam Akbar" />
				</div>
				<div className="form">
					<label htmlFor="alamat" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Alamat
					</label>
					<input type="text" name="alamat" id="alamat" className="w-full" placeholder="Jl. Merak RT10 RW11 No.12" />
				</div>
				<div className="form">
					<label htmlFor="nomorwa" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Nomor Whatsapp
					</label>
					<input type="number" name="nomorwa" id="nomorwa" className="w-full" placeholder="+628XXXXXXXXXX" />
				</div>
				<div className="form">
					<label htmlFor="nama" className="mb-1 text-neutral-950 text-sm font-semibold ">
						Berikan Instruksi Tambahan (opsional)
					</label>
					<textarea className="w-full" rows={10} cols={20} placeholder="Jangan tambahkan bawang goreng, seledri, dan kol. Soalnya saya asam lambung 🙏🏻"></textarea>
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
