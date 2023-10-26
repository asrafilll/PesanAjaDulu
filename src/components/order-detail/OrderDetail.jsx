import { Form } from "./Form";
import { Header } from "./Header";
import { OrderDetailFooter } from "./OrderDetailFooter";

export const OrderDetail = () => {
  return (
    <div className="bg-slate-50 h-screen max-w-screen-sm mx-auto flex flex-col">
      <Header />
      <Form />
      <OrderDetailFooter />
    </div>
  );
};
