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
					<div className="text-neutral-950 text-xl font-semibold mb-1">Buat Formulir</div>
					<div className="text-neutral-500 text-sm">Lengkapi isian di bawah ini untuk membuat formulir</div>
				</div>
			</div>

			{/* ini body isiniya form semua */}
			<div className="px-6 w-full space-y-3 h-screen overflow-y-scroll">
				<div className="form">
					<label htmlFor="nama" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Judul Form
					</label>
					<input type="text" name="nama" id="nama" className="w-full" placeholder="Form PO makan bulan Oktober" />
				</div>
				<div className="form">
					<label htmlFor="alamat" className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">
						Deskripsi Form
					</label>
					<input type="text" name="alamat" id="alamat" className="w-full" placeholder="Ini form untuk preorder bulan oktober" />
				</div>
				{/* ini pilihan produk */}
				<div className="flex flex-col">
					{/* container text */}
					<div className="flex justify-between items-center">
						<div className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0">Pilih Produk</div>
						<div className="mb-1 text-orange-500 text-sm font-semibold cursor-pointer">Tambah Produk</div>
					</div>
					{/* conteiner produknya */}
					<div className="p-4 space-y-3 bg-white rounded-md border border-gray-200 text-sm h-48 overflow-y-scroll">
						{/* itemnya */}
						<label className=" flex justify-between cursor-pointer" htmlFor="nacigoyeng">
							<div className="flex gap-1 items-center">
								<>
									<input className="appearance-none p-2 border-1 border-neutral-500 rounded-md bg-white checked:bg-orange-500 checked:border-1 checked:border-orange-500 peer" id="nacigoyeng" type="checkbox" />
									<Check className="absolute text-white hidden peer-checked:block" size={16} />
								</>
								<div>Cupcake Banteng</div>
							</div>
							<div>Rp.100.0000</div>
						</label>
						{/* itemnya */}
						<label className=" flex justify-between cursor-pointer" htmlFor="nacigoyeng">
							<div className="flex gap-1 items-center">
								<>
									<input className="appearance-none p-2 border-1 border-neutral-500 rounded-md bg-white checked:bg-orange-500 checked:border-1 checked:border-orange-500 peer" id="nacigoyeng" type="checkbox" />
									<Check className="absolute text-white hidden peer-checked:block" size={16} />
								</>
								<div>Naci Goyeng</div>
							</div>
							<div>Rp.10.0000</div>
						</label>
					</div>
				</div>

				<div className="form"></div>
				<div className="w-full py-3 bg-orange-500 rounded-lg justify-center items-center flex text-white text-lg font-semibold cursor-pointer">Buat Form</div>
			</div>
		</div>
	);
}
