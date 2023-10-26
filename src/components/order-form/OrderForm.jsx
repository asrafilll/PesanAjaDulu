import { Footer } from "./Footer";
import { Header } from "./Header";
import { ItemCard } from "./ItemCard";

export const OrderForm = () => {
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      <Header />
      <div className="px-6 py-4 w-full space-y-4 h-screen overflow-y-scroll">
        <ItemCard />
      </div>
      <Footer />
    </div>
  );
};
