import { DashboardHome } from "@/components/Dashboard/Home/DashboardHome";

async function getResponsesData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/responses/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { data } = await getResponsesData(params.id);
  return <DashboardHome data={data} />;
}
