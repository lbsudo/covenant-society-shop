import getCategory from "@/actions/getCategory";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {

  const categories = [
    15,
    45,
  ]

  const ProductData = await getCategory(categories);


  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Sweatshirts</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}
