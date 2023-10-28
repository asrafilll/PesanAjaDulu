import { CreateForm } from "@/components/Dashboard/Form/CreateForm";

async function getInventoryData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/inventories/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { data } = await getInventoryData(params.id);
  return <CreateForm inventoryItem={data} />;
}
