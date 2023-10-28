import { DashboardHome } from "@/components/Dashboard/Home/home";

async function getResponsesData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/responses/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const { data } = await getResponsesData(params.id);
  return <DashboardHome data={data} />;
}
