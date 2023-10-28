"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { newFormAtom } from "@/state/newFormAtom";
import { sellerIdAtom } from "@/state/sellerIdAtom";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { formatToIDR } from "@/utils/formatter";

export const CreateForm = ({ inventoryItem }) => {
  const [id, setSellerIdAtom] = useAtom(sellerIdAtom);
  const [formData, setFormData] = useAtom(newFormAtom);
  const [localSellerId, setLocalSellerId] = useState("");
  const sellerId = id ?? localSellerId;

  useEffect(() => {
    if (!id) {
      const storedSellerId = localStorage.getItem("sellerId");
      setLocalSellerId(storedSellerId);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (itemId) => {
    setFormData((prevState) => ({
      ...prevState,
      inventoryItem: prevState.inventoryItem.includes(itemId)
        ? prevState.inventoryItem.filter((i) => i !== itemId)
        : [...prevState.inventoryItem, itemId],
    }));
  };

  const payLoad = {
    title: formData.title,
    desc: formData.desc,
    endFormDate: new Date(formData.endFormDate),
    userId: sellerId,
    inventory: formData.inventoryItem,
  };

  const handleSubmit = async (e) => {
    console.log(payLoad);
    const data = await fetch("http://localhost:3000/api/v1/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto space-y-2 py-10 justify-center">
      <Link href={`dashboard-form/${sellerId}`}>
        {" "}
        <div className="w-16 h-6 justify-start items-center flex">
          <ChevronLeft className="text-neutral-500" />
          <div className="text-neutral-500 text-xs">Kembali</div>
        </div>
      </Link>
      <div className="text-lg text-orange-500">Buat Form Pre-Order Baru</div>
      <div className="text-sm text-neutral-500">
        Silahkan membuat sebuah form pre-order baru untuk dibagikan dengan
        customer anda sesuai dengan item PO yang diinginkan
      </div>
      <div className="text-sm text-neutral-400 pt-4">Judul Form PO</div>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border-neutral-200 py-2"
      />

      <div className="text-sm text-neutral-400 pt-4">Deskripsi Form PO</div>
      <textarea
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        placeholder="Description"
        className="border-neutral-200 py-6 w-full"
      ></textarea>

      <div className="text-sm text-neutral-400 pt-4">Tanggal Berakhir PO</div>
      <input
        name="endFormDate"
        type="date"
        value={formData.endFormDate}
        onChange={handleChange}
        className="border-neutral-200 py-2 w-full"
      />
      {inventoryItem.map((item) => (
        <div key={item.id} className="flex items-center space-x-4 py-2">
          <input
            type="checkbox"
            checked={formData.inventoryItem.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
            className="form-checkbox text-blue-600 h-5 w-5"
          />
          <div className="flex flex-col flex-grow">
            <div className="font-semibold text-sm">{item.title}</div>
            <div className="text-xs text-neutral-400">{item.desc}</div>
          </div>
          <div className="text-xs text-neutral-600 font-semibold">
            {formatToIDR.format(item.price)}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="hover:bg-orange-500 transition-colors ease-in-out duration-300 bg-orange-400 text-white text-sm py-2 font-semibold"
      >
        Buat Form Baru
      </button>
    </div>
  );
};
