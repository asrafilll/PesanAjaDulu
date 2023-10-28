"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { sellerIdAtom } from "@/state/sellerIdAtom";
import { ChevronLeft } from "lucide-react";
import { newInventoryAtom } from "@/state/newInventoryAtom";
import { toast } from "react-toastify";
import { FileUpload } from "@/lib/storage/FileUpload";

export const CreateProduct = ({ userId }) => {
  const router = useRouter();
  const [id, setSellerIdAtom] = useAtom(sellerIdAtom);
  const [inventoryData, setInventoryData] = useAtom(newInventoryAtom);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [localSellerId, setLocalSellerId] = useState("");

  useEffect(() => {
    if (!id) {
      const storedSellerId = localStorage.getItem("sellerId");
      setLocalSellerId(storedSellerId);
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const sellerId = id ?? localSellerId ?? userId;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevState) => ({ ...prevState, [name]: value }));
  };

  let payLoad = {};

  const handleSubmit = async (e) => {
    if (selectedFile) {
      const imageUrl = await FileUpload(selectedFile, "pesanaja");
      const customString = "https://ik.imagekit.io/asrafil/";
      if (imageUrl) {
        payLoad = {
          title: inventoryData.title,
          desc: inventoryData.desc,
          price: Number(inventoryData.price),
          image: `${customString}/${imageUrl.key}`,
          userId: sellerId,
        };
      }
    }
    const data = await fetch("http://localhost:3000/api/v1/inventories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });

    if (data.status === 201) {
      toast.success("Pesanan sukses dibuat!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      router.back();
    } else {
      toast.error("Gagal Buat Pesanan", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-2 py-10 justify-center">
      <div
        className="w-16 h-6 justify-start items-center flex"
        onClick={() => router.back()}
      >
        <ChevronLeft className="text-neutral-500" />
        <div className="text-neutral-500 text-xs">Kembali</div>
      </div>
      <div className="text-lg text-orange-500">Buat Menu Pesanan</div>
      <div className="text-sm text-neutral-500">
        Buat sebuah menu yang bisa diinput pada menu pesanan yang akan dibagikan
        kepada customer anda
      </div>
      <div className="text-sm text-neutral-400 pt-4">Nama Menu</div>
      <input
        name="title"
        value={inventoryData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border-neutral-200 py-2"
      />

      <div className="text-sm text-neutral-400 pt-4">Deskripsi Menu</div>
      <textarea
        name="desc"
        value={inventoryData.desc}
        onChange={handleChange}
        placeholder="Description"
        className="border-neutral-200 py-6 w-full"
      ></textarea>

      <div className="text-sm text-neutral-400 pt-4">Upload Image</div>
      <input
        name="image"
        type="file"
        onChange={(e) => handleImageChange(e)}
        className="border-neutral-200 py-2"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Image Preview"
          className="mt-4 w-64 h-64 object-cover"
        />
      )}

      <div className="text-sm text-neutral-400 pt-4">Harga Menu</div>
      <input
        name="price"
        type="number"
        min="0"
        value={inventoryData.price}
        onChange={handleChange}
        placeholder="Price"
        className="border-neutral-200 py-2"
      />

      <button
        onClick={handleSubmit}
        className="hover:bg-orange-500 transition-colors ease-in-out duration-300 bg-orange-400 text-white text-sm py-2 font-semibold"
      >
        Buat Menu Baru
      </button>
    </div>
  );
};
