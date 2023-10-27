import Image from "next/image";
import completeImg from "@../../public/complete-order.png";

export const OrderComplete = () => {
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col justify-center items-center">
      {/* ini container */}
      <div className="px-4 pb-36">
        {/* ini container content */}
        <div className="w-full flex-col justify-center items-center gap-1 inline-flex">
          <div className="text-center text-neutral-950 text-xl font-semibold">
            Pesananmu Berhasil Dipesan!
          </div>
          <div className="text-center text-neutral-500 text-sm">
            Yuk, kontak penjual untuk info pembayaran dan selesaikan pesananmu!
          </div>
        </div>
        {/* ini img */}
        <Image className="w-full" src={completeImg} />

        {/* ini button */}
        <a
          href="https://wa.me/082122206887?text=Hai Hisyam :3"
          className=" inline-flex w-full py-3 justify-center bg-orange-500 rounded-lg text-white text-lg font-semibold"
        >
          Hubungi Seller
        </a>
      </div>
    </div>
  );
};
