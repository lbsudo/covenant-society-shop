import getProducts from "@/actions/getProducts";
import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/Product";
import { Suspense } from 'react'

function PageFallback() {
  return <></>
}

export default async function Page() {
  const ProductData: Product[] = await getProducts();

  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <div>
          <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens All</h1>
          <ProductGrid products={ProductData} />
        </div>
      </Suspense>
    </>
  );
}
