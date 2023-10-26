export const Footer = () => {
  return (
    <div className="w-full p-6 bg-white rounded-tl-3xl rounded-tr-3xl shadow flex-col justify-center items-center gap-3 max-w-screen-sm">
      <div className="w-full flex-col gap-3 flex">
        {/* ini harga */}
        <div className="flex justify-between mb-4">
          <div className="text-neutral-950 text-sm font-semibold">
            Total Price
          </div>
          <div className="text-neutral-950 text-sm">Rp. 100.000</div>
        </div>
      </div>
      {/* ini btn */}
      <div className="w-full py-3 bg-neutral-300 rounded-lg justify-center items-center flex">
        <div className="text-white text-lg font-semibold">Pesan</div>
      </div>
    </div>
  );
};
