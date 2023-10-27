"use client";

import { useAtom } from "jotai";
import { customerInfoAtom } from "@/state/customerAtom";

export const Form = () => {
  const [customerData, setCustomerData] = useAtom(customerInfoAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="px-6 w-full space-y-3 h-screen overflow-y-scroll">
      <div className="form">
        <label
          htmlFor="nama"
          className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0"
        >
          Nama
        </label>
        <input
          type="text"
          name="customerName"
          id="nama"
          className="w-full"
          placeholder="Hisyam Akbar"
          onChange={handleChange}
        />
      </div>
      <div className="form">
        <label
          htmlFor="alamat"
          className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0"
        >
          Alamat
        </label>
        <input
          type="text"
          name="customerAddress"
          id="alamat"
          className="w-full"
          placeholder="Jl. Merak RT10 RW11 No.12"
          onChange={handleChange}
        />
      </div>
      <div className="form">
        <label
          htmlFor="nomorwa"
          className="mb-1 text-neutral-950 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 focus:ring-0"
        >
          Nomor Whatsapp
        </label>
        <input
          type="number"
          name="customerPhone"
          id="nomorwa"
          className="w-full"
          placeholder="0812XXXXXXXX"
          onChange={handleChange}
        />
      </div>
      <div className="form">
        <label
          htmlFor="nama"
          className="mb-1 text-neutral-950 text-sm font-semibold "
        >
          Berikan Instruksi Tambahan (opsional)
        </label>
        <textarea
          name="customerNote"
          className="w-full"
          rows={10}
          cols={20}
          placeholder="Jangan tambahkan bawang goreng, seledri, dan kol. Soalnya saya asam lambung 🙏🏻"
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};
