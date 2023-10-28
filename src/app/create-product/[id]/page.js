import { CreateProduct } from "@/components/Dashboard/Form/CreateProduct";

export default async function Page({ params }) {
  return <CreateProduct userId={params.id} />;
}
