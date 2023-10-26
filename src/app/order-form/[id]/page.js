import { OrderForm } from "@/components/order-form/OrderForm";

async function getFormData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/forms/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const data = await getFormData(params.id);
  return <OrderForm formData={data} />;
}
