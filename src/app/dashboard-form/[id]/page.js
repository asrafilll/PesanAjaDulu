import { DashboardForm } from "@/components/Dashboard/Form/Form";

async function getFormsData(id) {
  const res = await fetch(`http://localhost:3000/api/v1/forms/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const { data } = await getFormsData(params.id);
  return <DashboardForm data={data} />;
}
