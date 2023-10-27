import React from "react";
import { Check, ChevronLeft } from "lucide-react";

export default function page() {
	return (
		<div className="bg-slate-50 h-[100dvh] max-w-screen-sm mx-auto flex flex-col">
			{/* ini Header */}
			<div className="flex flex-col p-6 gap-4 cursor-pointer">
				{/* ini back btn */}
				<div className="w-16 h-6 justify-start items-center flex">
					<ChevronLeft />
					<div className="text-neutral-950 text-xs">Kembali</div>
				</div>

				{/* ini text container */}
				<div className="w-full flex-col">
					<div className="text-neutral-950 text-xl font-semibold mb-1">Tambah Produk</div>
					<div className="text-neutral-500 text-sm">Lengkapi isian di bawah ini untuk menambahkan produk</div>
				</div>
			</div>

			{/* ini body isiniya form semua */}
			<div className="px-6 w-full space-y-3 h-screen overflow-y-scroll">
				<div className="form">
					<label htmlFor="nama" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Nama Produk
					</label>
					<input type="text" name="nama" id="nama" className="w-full" placeholder="Seblak Gac*r" />
				</div>
				<div className="form">
					<label htmlFor="alamat" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Deskripsi Form
					</label>
					<input type="text" name="alamat" id="alamat" className="w-full" placeholder="Rp. 100.000" />
				</div>
				<div className="form">
					<label htmlFor="image" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Foto Produk
					</label>
					<input type="file" name="image" id="image" className="w-full" />
				</div>
				<div className="form">
					<label htmlFor="deskripsi" className="mb-1 text-neutral-950 text-sm font-semibold ">
						Berikan Instruksi Tambahan (opsional)
					</label>
					<textarea
						name="deskripsi"
						id="deskripsi"
						className="w-full"
						rows={10}
						cols={20}
						placeholder="hidangan nasi goreng khas Indonesia yang dihidangkan dengan saus balado, yang terkenal dengan cita rasa pedas dan gurih. Hidangan ini terdiri dari nasi yang digoreng bersama bumbu dan bahan tambahan seperti telur, ayam, udang, atau daging lainnya. Saus balado yang khas terbuat dari cabai merah, bawang, dan bumbu lainnya yang memberikan rasa pedas dan beraroma. Nasi Goreng Balado menggabungkan rasa gurih dan pedas dengan sempurna, menjadikannya pilihan yang lezat untuk pencinta makanan pedas."
					></textarea>
				</div>

				<div className="form"></div>
				<div className="w-full py-3 bg-orange-500 rounded-lg justify-center items-center flex text-white text-lg font-semibold cursor-pointer">Buat Form</div>
			</div>
		</div>
	);
}
