import { DashboardProduct } from "@/components/Dashboard/Product/Product";

async function getInventoryData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/inventories/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const { data } = await getInventoryData(params.id);
  return <DashboardProduct data={data} />;
}
