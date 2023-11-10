import { GET } from "../../../api/allProducts/route";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {
  const ProductData = await GET();

  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens All</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}
