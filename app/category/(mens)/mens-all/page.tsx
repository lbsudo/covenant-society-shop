import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Page() {
  const ProductData = await getProducts();

  return (
    <div>
      <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens All</h1>
      <ProductGrid products={ProductData} />
    </div>
  );
}
