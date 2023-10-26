import { Footer } from "./Footer";
import { Header } from "./Header";
import { ItemCard } from "./ItemCard";

export const OrderForm = ({ formData }) => {
  const { data } = formData;
  const { inventory } = data;
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      <Header title={data.title} description={data.desc} />
      <div className="px-6 py-4 w-full space-y-4 h-screen overflow-y-scroll">
        {inventory.map(({ inventory }) => {
          return <ItemCard key={inventory.id} inventoryData={inventory} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
