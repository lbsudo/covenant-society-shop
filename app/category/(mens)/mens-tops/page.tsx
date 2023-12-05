import getCategory from "@/actions/getCategory";
import ProductGrid from "@/components/product/ProductGrid";
import { Product } from "@/types/Product";
import { Suspense } from 'react'

function PageFallback() {
  return <></>
}

export default async function Page() {
  const categories = [108]
  const Products: Product[] = await getCategory(categories)

  return (
    <>
      <Suspense fallback={<PageFallback />}>
        <div>
          <h1 className='flex justify-center text-3xl pt-3 mb-6 font-bold '>Mens Tops</h1>
          <ProductGrid products={Products} />
        </div>
      </Suspense>
    </>
  );
}


