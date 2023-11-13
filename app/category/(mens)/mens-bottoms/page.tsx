// import GET from "../../../api/getCategory/route";
import getCategory from "@/lib/getCategory";
import { Product } from "@/types/Product";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {

  const categories = [
    98
  ]

  const ProductData = await getCategory(categories);

  return (
    <>
      <div>
        <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens All</h1>
        <ProductGrid products={ProductData} />
      </div>
    </>
  );
}
